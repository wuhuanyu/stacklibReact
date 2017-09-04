window.cacheClient = (() => {
    const cache = {
        medim: {
            recent: [],
            data: []
        },
        bbc: {
            header: 0,
            recent: {
                politics: [],
                china: [],
                life: [],
                tech: [],
                business: []
            },
            data: []
        },
        cnn: {
            header: 0,
            recent: {
                politics: [],
                china: [],
                life: [],
                tech: [],
                business: []
            },
            data: []
        },
        reuters: {
            header: 0,
            recent: {
                politics: [],
                china: [],
                life: [],
                tech: [],
                business: []
            },
            data: []
        },
        mbook: {
            recent: {},
            data: []
        }
    };

    const pushCacheData = function (source, obj) {
        // console.log(cache);
        if (checkExists(source, obj._id)) {
            let index = cache[source]
                .data
                .findIndex(x => x._id === obj._id);
            let item = cache[source]
                .data
                .filter(x => x._id === obj._id)[0];
            item = Object.assign(item, Object.assign({}, obj));
            cache[source].data[index] = item;
        } else {
            cache[source]
                .data
                .push(Object.assign({}, obj));
        }
    }

    const checkExists = function (source, id) {
        let exists = false;
        cache[source]
            .data
            .forEach(e => {
                if (e._id === id) {
                    exists = true;
                }
            });
        return exists;
    }

    const pushNewsRecent = (source, tag, _id) => {
        let recent = cache[source].recent[tag];
        if (!recent.includes(_id)) 
            recent.push(_id);
        };
    const dropNewsRecent = (source, tag) => {
        cache[source].recent[tag] = [];
    }

    const pushOtherRecent = (source, _id) => {
        let recent = cache[source].recent;
        if (!recent.includes(_id)) 
            recent.push(_id);
        }
    
    const getData = (source, id) => {
        let datas = cache[source].data;
        return datas.filter(d => d._id === id)[0];
    }

    const checkFieldsExsits = (source, _id, field) => {
        let datas = cache[source].data;
        if (!checkExists(source, _id)) {
            return false;
        } else {
            let data = getData(source, _id);
            // console.log(data);
            if (data[field]) 
                return true;
            else 
                return false;
            }
        
    }

    return {
        pushCacheData,
        pushNewsRecent,
        dropNewsRecent,
        checkExists,
        pushOtherRecent,
        checkFieldsExsits,

        cache,
        getData
    }
})();
