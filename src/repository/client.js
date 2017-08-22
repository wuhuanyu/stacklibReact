const host = "localhost:3001";
const url = "/api/v1/";
const defaultDomain = host + url;
const defaultHeaders = {
    method: 'GET',
    cache: 'default'
}

const constructRecentNewsUrl = (source, tag, count = 5, fields) => {
    let url = "http://" + defaultDomain + source + "/recent?";
    let _tag = tag ? "tag=" + tag + "&" : '';
    let _fields = fields ? "fields=" + fields.join(',') + '&' : '';
    let _count = "count=" + count;

    url = url + _tag + _fields + _count;
    console.log('[constructRecentNewsUrl ] url=' + url);
    return url;
};
const constructIdNewsUrl = (source, id, fields) => {
    let url = "http://" + defaultDomain + source + "/id-" + id + '?';
    let _fields = fields ? "fields=" + fields.join(',') : '';
    url = url + fields;
    console.log('[constructIdNewsUrl] url=' + url);
    return url;
};

const constructTagNewsUrl = (source, tag, count = 5, fields) => {
    let url = "http://" + defaultDomain + source + "/tag-" + tag + '?';
    let _fields = fields ? "fields=" + fields.join(',') + '&' : '';
    let _count = "count=" + count;
    url = url + _fields + count;
    console.log('[constructTagNewsUrl] url=' + url);
    return url;
}


window.client = (function () {

    let getNewsRecent = function (source, tag, count = 5, fields) {
        return fetch(constructRecentNewsUrl(source, tag, count, fields), defaultHeaders);
    };

    let getNewsById = (source, id, fields) => {
        return fetch(constructIdNewsUrl(source, id, fields), defaultHeaders);
    }

    let getNewsByTag = (source, tag, count = 5, fields) => {
        return fetch(constructTagNewsUrl(source, tag, count, fields), defaultHeaders);

    }

    let getMediumById=(id,fields)=>{

    }
    let getMediumRecent=function(count=5,fields){

    }

    return {
        getNewsRecent,
        getNewsById,
        getNewsByTag,
    }

})();