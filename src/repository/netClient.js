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
    let getNewsRecent = function (source, tag, count = 5, fields) {
        let recentLen = cacheClient.cache[source][recent][tag].length;
        console.log(`[getNewsRecent] current there is ${recentLen} in ${source} recent`);
        /**
         * 缓存中数量不足，网络请求
         */
        if (length < count) {
            fetch(constructor.constructRecentNewsUrl(source, tag, count, ['id']), defaultHeaders).then(response => {
                if (response.ok) {
                    response
                        .json()
                        .then(body => {
                            let recentids = body
                                .data
                                .map(d => d._id);
                            recentids.forEach(id => cacheClient.pushNewsRecent(source, tag, id));
                        })
                }
            })
        }
        let recentIds = cacheClient.cache[source][recent][tag];
        let recentPromises = recentIds.forEach(id => getNewsById(source, id, fields));

        let newss = [];
        Promise
            .all(recentPromises)
            .then(datas => {
                datas.forEach(data => newss.push(data));
            })
            .catch(e => console.log(e));
        console.log(`[getNewsRecent]: ${newss}`);

        return Promise.resolve(data);
    }
    let getNewsById = (source, id, fields) => {
        let unMetFields = fields.filter(f => (!checkFieldsExsits(source, id, f)));
        console.log(`[getNewsById] ${unMetFields.length}`);

        if (unMetFields.length === 0) {
            return Promise.resolve(cacheClient.getData(source, id));
        } else {
            console.log('[getNewsById]: feching');
            return fetch(constructor.constructIdNewsUrl(source, id, unMetFields), defaultHeaders).then((res => {
                if (res.ok) {
                    res
                        .json()
                        .then(body => {
                            if (body.count === 1) {
                                cacheClient.pushCacheData(source, body.data[0]);
                                return Promise.resolve(cacheClient.getData(source, id));
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
        return fetch(constructor.constructIdMedium(id, fields), defaultHeaders);
    }
    let getMediumRecent = function (count = 5, fields) {
        return fetch(constructor.constructRecentMedium(count, fields), defaultHeaders);
    }

    return {getNewsRecent, getNewsById, getNewsByTag, getMediumById, getMediumRecent}
})();