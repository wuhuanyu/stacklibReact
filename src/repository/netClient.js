import * as constructor from './urlConstruct';

const defaultHeaders = {
    method: 'GET',
    cache: 'default'
};
let {
    pushCacheData,
    pushNewsRecent,
    checkExists,
    pushOtherRecent,
    checkFieldsExsits,
    cache,
    getData
} = window.cacheClient;

let cacheClient = window.cacheClient;
window.client = (function () {
    let getNewsRecent = function (source, tag, count, fields) {
        let isSummaryRequired = fields.includes('summary');
        let recentLen = cacheClient.cache[source].recent[tag].length;
        /**
         * 已经缓存的最近新闻
         */
        let oldRecentIds = cacheClient.cache[source].recent[tag];
        let recentPromises = oldRecentIds.map(id => getNewsById(source, id, fields));
        /**
         * 缓存中数量不足，网络请求
         */
        if (recentLen < count) {
            console.log('[getNewsRecent] fetching');
            return fetch(constructor.constructRecentNewsUrl(source, tag, count, ['id']), defaultHeaders).then(response => {
                if (response.ok) {
                    return response
                        .json()
                        .then(body => {
                            let recentids = body
                                .data
                                .map(d => d._id);
                            recentids.forEach((id) => cacheClient.pushNewsRecent(source, tag, id));
                            let newRecentIds = cacheClient.cache[source].recent[tag];
                            return Promise.all(newRecentIds.map(id => getNewsById(source, id, fields)));
                        })
                }
            })
        } else {
            let newRecentIds = cacheClient.cache[source].recent[tag];
            return Promise.all(newRecentIds.map(id => getNewsById(source, id, fields)));
        }

    }
    let getNewsById = (source, id, fields) => {
        let unMetFields = fields.filter(f => (!checkFieldsExsits(source, id, f)));
        console.log(`[getNewsById] unmetFields ${unMetFields.length}`);

        if (unMetFields.length === 0) {
            return Promise.resolve(cacheClient.getData(source, id));
        } else {
            console.log('[getNewsById]: feching');
            return fetch(constructor.constructIdNewsUrl(source, id, unMetFields), defaultHeaders).then((res => {
                if (res.ok) {
                    return res
                        .json()
                        .then(body => {
                            if (body.count === 1) {
                                cacheClient.pushCacheData(source, body.data[0]);
                                // console.log(body.data[0]);
                                return cacheClient.getData(source, id);
                                // return Promise.resolve(cacheClient.getData(source, id));
                            } else 
                                throw new Error(`[getNewsById] get ${body.count} data`);
                            }
                        )
                } else 
                    throw new Error(`[getNewsById] ${res.status}`);
                }
            ))
        }
    }

    let getNewsByTag = (source, tag, count = 5, fields) => {
        return fetch(constructor.constructTagNewsUrl(source, tag, count, fields), defaultHeaders);

    }

    let getMediumById = (id, fields) => {

        let source = 'medium';
        let unMetFields = fields.filter(f => (!checkFieldsExsits(source, id, f)));
        console.log(`[getMediumById] unmetFields ${unMetFields.length}`);

        if (unMetFields.length === 0) {
            return Promise.resolve(cacheClient.getData(source, id));
        } else {
            console.log('[getMediumById]: feching');
            return fetch(constructor.constructIdNewsUrl(source, id, unMetFields), defaultHeaders).then((res => {
                if (res.ok) {
                    res
                        .json()
                        .then(body => {
                            if (body.count === 1) {
                                cacheClient.pushCacheData(source, body.data[0]);
                                return Promise.resolve(cacheClient.getData(source, id));
                            } else 
                                throw new Error(`[getMediumById] get ${body.count} data`);
                            }
                        )
                } else 
                    throw new Error(`[getMediumById] ${res.status}`);
                }
            ))
        }
    }
    let getMediumRecent = function (count = 5, fields) {

        let source = 'medium';
        let recentLen = cacheClient.cache[source].recent.length;
        console.log(`[getMediumRecent] current there is ${recentLen} in ${source} recent`);
        // fields.forEach(f=>console.log(f));
        /**
         * 已经缓存的最近文章
         */
        let oldRecentIds = cacheClient.cache[source].recent;
        let recentPromises = oldRecentIds.map(id => getMediumById(id, fields));
        /**
         * 缓存中数量不足，网络请求
         */
        if (recentLen < count) {
            console.log('[getMediumRecent] fetching');
            fetch(constructor.constructRecentMedium(count, ['id']), defaultHeaders).then(response => {
                if (response.ok) {
                    response
                        .json()
                        .then(body => {
                            let recentids = body
                                .data
                                .map(d => d._id);
                            recentids.forEach((id) => {
                                cacheClient.pushOtherRecent(source, id);
                                recentPromises.push(getMediumById(id, fields));
                            });
                        });
                }
            })
        }

        let blogs = [];
        Promise
            .all(recentPromises)
            .then(datas => {
                datas.forEach(data => blogs.push(data));
            })
        console.log(`[getNewsRecent]: ${blogs}`);
        return Promise.resolve(blogs);
    }

    let getMBookById = function (id, fields) {
        let source = 'mbook';
        let method = '[getMBookById]'
        let unMetFields = fields.filter(f => (!checkFieldsExsits(source, id, f)));
        console.log(`[getMBookById] unmetFields ${unMetFields.length}`);

        if (unMetFields.length === 0) {
            return Promise.resolve(cacheClient.getData(source, id));
        } else {
            console.log('[getMBookById]: feching');
            return fetch(constructor.constructIdNewsUrl(source, id, unMetFields), defaultHeaders).then((res => {
                if (res.ok) {
                    res
                        .json()
                        .then(body => {
                            if (body.count === 1) {
                                cacheClient.pushCacheData(source, body.data[0]);
                                return Promise.resolve(cacheClient.getData(source, id));
                            } else 
                                throw new Error(`[getMBookById] get ${body.count} data`);
                            }
                        )
                } else 
                    throw new Error(`[getMBookById] ${res.status}`);
                }
            ))
        }
    };
    let getMBookRecent = function (count = 5, fields) {

        let source = 'mbook';
        let recentLen = cacheClient.cache[source].recent.length;
        console.log(`[getMBookRecent] current there is ${recentLen} in ${source} recent`);
        // fields.forEach(f=>console.log(f));
        /**
         * 已经缓存的最近文章
         */
        let oldRecentIds = cacheClient.cache[source].recent;
        let recentPromises = oldRecentIds.map(id => getMBookById(id, fields));
        /**
         * 缓存中数量不足，网络请求
         */
        if (recentLen < count) {
            console.log('[getMBookRecent] fetching');
            fetch(constructor.constructRecentNewsUrl(source, null, count, ['id']), defaultHeaders).then(response => {
                if (response.ok) {
                    response
                        .json()
                        .then(body => {
                            let recentids = body
                                .data
                                .map(d => d._id);
                            recentids.forEach((id) => {
                                cacheClient.pushOtherRecent(source, id);
                                recentPromises.push(getMBookById(id, fields));
                            });
                        });
                }
            })
        }

        let blogs = [];
        Promise
            .all(recentPromises)
            .then(datas => {
                datas.forEach(data => blogs.push(data));
            })
        console.log(`[getMBookRecent]: ${blogs}`);
        return Promise.resolve(blogs);
    }

    return {
        getNewsRecent,
        getNewsById,
        getNewsByTag,
        getMediumById,
        getMediumRecent,
        getMBookById,
        getMBookRecent
    }
})();