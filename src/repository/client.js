import {BBC, CNN, MBook, Reuters} from './data';
const host = "localhost:3001";
const url = "/api/v1/";
const defaultDomain = host + url;
const defaultHeaders = {
    method: 'GET',
    cache: 'default'
}

export const checkTitle = function (data) {
    if (Array.isArray(data)) {
        data.forEach((d) => {
            if (d.title) {
                let title = d.title;
                title = title
                    .split(' ')
                    .map((word) => {
                        return word[0].toUpperCase() + word.slice(1);
                    })
                    .join(' ');
                d.title = title;
            }
        });
        return data;
    } else if (typeof data === 'object') {
        if (data.title) {
            let title = data.title;
            title = title
                .split(' ')
                .map((word) => {
                    return word[0].toUpperCase() + word.slice(1);
                })
                .join(' ');
            data.title = title;
        }
        return data;
    }
};

const constructRecentNewsUrl = (source, tag, count = 5, fields) => {
    let url = "http://" + defaultDomain + source + "/recent?";
    let _tag = tag
        ? "tag=" + tag + "&"
        : '';
    let _fields = fields
        ? "fields=" + fields.join(',') + '&'
        : '';
    let _count = "count=" + count;

    url = url + _tag + _fields + _count;
    console.log('[constructRecentNewsUrl ] url=' + url);
    return url;
};
const constructIdNewsUrl = (source, id, fields) => {
    let url = "http://" + defaultDomain + source + "/id-" + id + '?';
    let _fields = fields
        ? "fields=" + fields.join(',')
        : '';
    url = url + fields;
    console.log('[constructIdNewsUrl] url=' + url);
    return url;
};

const constructTagNewsUrl = (source, tag, count = 5, fields) => {
    let url = "http://" + defaultDomain + source + "/tag-" + tag + '?';
    let _fields = fields
        ? "fields=" + fields.join(',') + '&'
        : '';
    let _count = "count=" + count;
    url = url + _fields + count;
    console.log('[constructTagNewsUrl] url=' + url);
    return url;
}

const constructRecentMedium = (count = 5, fields) => {
    let url = "http://" + defaultDomain + "medium/recent?"
    let _count = "count=" + count;
    let _fields = fields
        ? "fields=" + fields.join(',') + '&'
        : '';

    url = url + _fields + count;
    console.log('[constructRecentMedium] url=' + url);
    return url;
}

const constructIdMedium = (id, fields) => {
    let url = "http://" + defaultDomain + "medium/id-" + id;
    let _fields = fields
        ? "fields=" + fields.join(',') + '&'
        : '';

    url = url + _fields;
    console.log('[constructIdMedium] url=' + url);
    return url;
}

export const client = (function () {

    let getNewsRecent = function (source, tag, count = 5, fields) {
        return fetch(constructRecentNewsUrl(source, tag, count, fields), defaultHeaders);
    };

    let getNewsById = (source, id, fields) => {
        return fetch(constructIdNewsUrl(source, id, fields), defaultHeaders);
    }

    let getNewsByTag = (source, tag, count = 5, fields) => {
        return fetch(constructTagNewsUrl(source, tag, count, fields), defaultHeaders);

    }

    let getMediumById = (id, fields) => {
        return fetch(constructIdMedium(id, fields), defaultHeaders);
    }
    let getMediumRecent = function (count = 5, fields) {
        return fetch(constructRecentMedium(count, fields), defaultHeaders);
    }

    return {getNewsRecent, getNewsById, getNewsByTag, getMediumById, getMediumRecent}
})();

export function addTimeOut(delay = 1500, obj, func, args) {
    if (!Array.isArray(args)) 
        throw 'args must be array';
    let promise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            let data = func.apply(obj, args);
            data = checkTitle(data);
            if (data) {
                resolve(data);
            } else {
                reject(data);
            }
        }, delay);
    });

    return promise;

}

export const mockClient = (() => {
    let getNewsRecent = (source, tag, count = 5, fields) => {
        let func,
            obj
        switch (source) {
            case 'bbc':
                func = BBC.getRecent;
                obj = BBC;
                break;
            case 'cnn':
                func = CNN.getRecent;
                obj = CNN;
                break;

            case 'reuters':
                func = Reuters.getRecent;
                obj = Reuters;
            default:
                break;
        }
        return addTimeOut(1500, obj, func, [tag, count, fields])
    }

    let getNewsById = (source, fields) => {
        let func,
            obj
        switch (source) {
            case 'bbc':
                func = BBC.getById;
                obj = BBC;
                break;
            case 'cnn':
                func = CNN.getById;
                obj = CNN;
                break;
            case 'reuters':
                func = Reuters.getById;
                obj = Reuters;
                break;
            default:
                break;
        }
        return addTimeOut(1500, obj, func, [fields]);
    }

    return {getNewsRecent, getNewsById}
})();