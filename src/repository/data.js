export const BBCData = 
{
                                "_id": "599843354da4162d58a23dc8",
                                "crawled_at": 1503150898353,
                                "title": "Why you could soon be missing your cup of Darjeeling tea",
                                "url": "http://www.bbc.com/news/world-asia-india-40825298",
                                "timestamp": "1501894770",
                                "source": "bbc",
                                "tag": "politics",
                                "image_urls": ["https://ichef.bbci.co.uk/news/320/cpsprodpb/13718/production/_97204697_gettyimag" +
                                                "es-99392828.jpg"],
                                "text": [
                                        "If you are a tea connoisseur, here's some bad news: your morning cuppa of steami" +
                                                        "ng Darjeeling tea may soon be difficult to get. ",
                                        "Famously called the \"champagne of teas\", it is grown in 87 gardens in the foot" +
                                                        "hills of the Himalayas in Darjeeling in West Bengal state. Some of the bushes ar" +
                                                        "e as old as 150 years and were introduced to the region by a Scottish surgeon.",
                                        "Half of the more than 8 million kg - 60% of it is certified organic - of this so" +
                                                        "ught-after tea produced every year is exported, mainly to the UK, Europe and Jap" +
                                                        "an. The tea tots up nearly $80m (£60m) in annual sales. ",
                                        "Darjeeling tea is also one of the world's most expensive - some of it has fetche" +
                                                        "d prices of up to $850 (£647) per kg. The tea is also India's first Protected Ge" +
                                                        "ographical Indication (PGI) product. ",
                                        "Since June, Darjeeling has been hit by violent protests and prolonged strikes in" +
                                                        " support of a campaign by a local party demanding a separate state for the area'" +
                                                        "s majority Nepali-speaking Gorkha community. ",
                                        "The upshot: some 100,000 workers - permanent and temporary - working in the gard" +
                                                        "ens have halted work. Production has been severely hit. Only a third of last yea" +
                                                        "r's crop of 8.32 million kg had been harvested when work stopped in June. If the" +
                                                        " trouble continues, garden owners say they are staring at losses amounting to ne" +
                                                        "arly $40m.",
                                        "\"This is the worst crisis we have ever faced. Future orders are being cancelled" +
                                                        ", and there is no fresh supply. Connoisseurs of Darjeeling may have to soon swit" +
                                                        "ch to other teas until the situation improves,\" Darjeeling Tea Association's pr" +
                                                        "incipal advisor Sandeep Mukherjee told me. ",
                                        "The shutdown in the gardens couldn't have come at a worse time. ",
                                        "The harvesting season in Darjeeling extends to roughly a little over seven month" +
                                                        "s - from March to October. It is also divided into four distinct seasons called " +
                                                        "\"flushes\". ",
                                        "The ongoing impasse came in the middle of the second - or summer flush - season " +
                                                        "which gives the tea an unique \"muscatel\" scent and accounts for half of the ye" +
                                                        "arly crop and and 40% of annual sales. The separatist agitation in Darjeeling ha" +
                                                        "s disrupted life in the region since 1980s, but in the past the strikes usually " +
                                                        "happened during the lull between seasons. ",
                                        "Tea buyers are already feeling the crunch. In India, the tea is fast going off t" +
                                                        "he shelves. Some supermarkets in Japan have said their stocks will run out by No" +
                                                        "vember if supplies don't resume. An importer in Germany says the tea runs the ri" +
                                                        "sk of becoming a \"limited edition\" beverage.  ",
                                        "Even if the agitation is called off tomorrow and the workers return to the garde" +
                                                        "ns, it will take more than a month to begin harvesting. The gardens have been id" +
                                                        "le for more than two months, and are full of weeds. Tea bushes have become \"fre" +
                                                        "e growth plants\", say owners. Workers have to clean and slash the bushes before" +
                                                        " they can begin plucking the leaves again.",
                                        "Clearly, if the political impasse is resolved this month, the gardens of Darjeel" +
                                                        "ing will be humming only next year - India is heading into a season of yearly fe" +
                                                        "stivals, marked by long holidays. ",
                                        "\"For the moment, Darjeeling looks like becoming a limited edition tea all right" +
                                                        ",\" says Ashok Lohia, who owns 13 gardens in the region. \"But I'd just request " +
                                                        "the connoisseurs to bear with us, and we promise to be back with the our very be" +
                                                        "st quality soon\". For the moment, tea drinkers may have to learn to live withou" +
                                                        "t their favourite brew."
                                ]
                        },
       
//         tag: function (tag,count=4) {

//                 return {
//                         count: this.source.count,
//                         data: this
//                                 .source
//                                 .data
//                                 .map(news => Object.assign({}, news, {tag: tag}))
//                 }
//         },

//         get business() {
//                 return this.tag('business');
//         },

//         get life() {
//                 return this.tag('life');
//         }

// }

export const BBC = {
        getById(id,fields){
                let data=Object.assign({},BBCData,{_id:id});
                let newData={};
                data.forEach(f=>{
                        newData[f]=data[f];
                })
                return {count:1,data:newData};

        },

        getByTag(tag,count=5,fields){
  let data=Object.assign({},BBCData);
                let newData={};
                data.forEach(f=>{
                        newData[f]=data[f];
                });
                let tagData={count:count,data:[]};
                for (let i=0;i<count;i++){
                        tagData.data.push(Object.assign({},newData));
                }
                return tagData;
        },
        getRecent(tag,count=5,fields){
                return getByTag(tag,count,fields);
        }

}




export const MediumRecent={
        
}
