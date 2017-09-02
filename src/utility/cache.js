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
    if (checkExists(source, obj._id)) {
        let index = cache[source]
            .data
            .findIndex(x => x._id === obj._id);
        let item = cache[source]
            .data
            .filter(x => x._id === obj._id);
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
    console.log("pushNewsRecent")
    let recent = cache[source].recent[tag];
    if(!recent.includes(_id))
        recent.push(_id);
}

const pushOtherRecent=(source,_id)=>{
    console.log("pushNewsRecent");
    let recent = cache[source].recent;
    if(!recent.includes(_id))
        recent.push(_id);
}


const getRecentNewsCache=(source,tag,)=>{
    
}

