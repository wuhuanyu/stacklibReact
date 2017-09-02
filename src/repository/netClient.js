import * as constructor from './urlConstruct';
let {
    pushCacheData,
    pushNewsRecent,
    checkExists,
    pushOtherRecent,
    checkFieldsExsits,
    cache
} = window.cacheClient;
window.client = (function () {

    let getNewsRecent = function (source, tag, count = 5, fields) {
        return fetch(constructor.constructRecentNewsUrl(source, tag, count, fields), defaultHeaders);
    };

    let getNewsById = (source, id, fields) => {
        
        return fetch(constructor.constructIdNewsUrl(source, id, fields), defaultHeaders);
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