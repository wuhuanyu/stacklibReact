const host = "localhost:3001";
const url = "/api/v1";
const defaultDomain = host + url;
const defaultHeaders = {
    method: 'GET',
    cache: 'default'
}

const constructRecentNewsUrl = (source, tag, count=5, fields) => {
   let  url = "http://"+host+url+"/"+source+"/recent?";
   let _tag =tag?"tag="+tag:null;
   let _fields=fields? "fields="+fields.join(','):null;
   let _count="count="+count;

   url = url +[_tag,_fields,_count].join('&');
   console.log('[constructRecentNewsUrl ] url='+url);
   return url;
}


window.client = (function () {

    let getNewsRecent = function (source, tag, count=5, fields) {
        return fetch(constructRecentNewsUrl(source,tag,count,fields),defaultHeaders);
    };

    let getNewsById=(source,id,fields){

    }
    
    let getNewsByTag=(source,tag,count=5,fields){

    }

    return {
        getNewsRecent,
        getNewsById,
    }




})();