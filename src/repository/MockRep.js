const checkTitle = function (data) {
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

const MockRep = function () {

    const BBC = {
        "count": 3,
        "data": [
            {
                "_id": "5975d9454da41631e7e4cafe",
                "crawled_at": 1500895557000,
                "title": "Jared Kushner: The son-in-law with Donald Trump's ear",
                "url": "http://www.bbc.com/news/world-us-canada-37986429",
                "summary": "For someone with no prior government experience, Jared Kushner has accumulated a" +
                        " dizzying array of portfolios in the administration of his father-in-law Preside" +
                        "nt Donald Trump.",
                "source": "bbc",
                "tag": "world",
                "timestamp": "2017-07-24 19:25:56.833424",
                "image_urls": [
                    "https://ichef.bbci.co.uk/news/320/cpsprodpb/15E43/production/_95476698_mediaitem" +
                            "92457145.jpg",
                    "https://ichef.bbci.co.uk/images/ic/720x405/p04y7kw4.jpg",
                    "https://ichef.bbci.co.uk/images/ic/720x405/p050mb03.jpg",
                    "https://ichef.bbci.co.uk/images/ic/720x405/p056d4d3.jpg",
                    "https://ichef.bbci.co.uk/images/ic/720x405/p054ndw7.jpg"
                ],
                "text": [
                    "For someone with no prior government experience, Jared Kushner has accumulated a" +
                            " dizzying array of portfolios in the administration of his father-in-law Preside" +
                            "nt Donald Trump.",
                    "The 36-year-old, whose previous main work experience was running his father's re" +
                            "al-estate firm, is a senior adviser to the commander-in-chief.",
                    "Despite having no diplomatic credentials, he has been tasked with no less a chal" +
                            "lenge than resolving the Israeli-Palestinian conflict.",
                    "Mr Kushner, who is married to Mr Trump's daughter Ivanka, also serves as the pre" +
                            "sident's lead adviser on relations with China, Mexico and Canada.",
                    "And he has been charged with leading a bureaucracy-busting White House office wh" +
                            "ose ambitious remit ranges from reforming veterans' care to combating US opioid " +
                            "abuse.",
                    "In April, ",
                    " to meet American generals and hold talks with Iraqi officials. ",
                    "Mr Trump has described Mr Kushner, who accompanied him on his first visit to the" +
                            " White House after the election, as \"very good at politics\". ",
                    "And his son-in-law seemed to justify this assessment during the 2016 White House" +
                            " campaign, proving himself adept at outmanoeuvring rivals.",
                    "When combative campaign manager Corey Lewandowski was fired before the election," +
                            " it was reportedly Mr Kushner who pushed for him to get the chop.",
                    "More recently Mr Kushner has clashed with White House chief strategist Steve Ban" +
                            "non, who has been sidelined as a result, according to reports.",
                    "Jared Kushner was born and raised in Livingston, New Jersey, alongside two siste" +
                            "rs and a brother. ",
                    "An Orthodox Jew, his grandparents were Holocaust survivors who arrived in the US" +
                            " in 1949. His father Charles made his fortune as a New Jersey property mogul.",
                    "The young Jared won a place at Harvard despite poor grades, according to Daniel " +
                            "Golden, author of The Price of Admissions: How America's Ruling Class Buys Its W" +
                            "ay into Elite Colleges. ",
                    "The year of his admission, according to Mr Golden's book, Charles Kushner donate" +
                            "d $2.5m to the university, along with similar one-off donations to Cornell and P" +
                            "rinceton.",
                    "In 2006, at just 25, Mr Kushner bought the New York Observer, but his tenure was" +
                            " not plain sailing.",
                    "The newspaper's respected editor of 15 years, Peter Kaplan, resigned three years" +
                            " after Mr Kushner took over following clashes between the two.",
                    "Six other editors were recycled in quick succession over the next seven years, b" +
                            "efore Mr Kushner severed ties to the Observer as he joined the White House.",
                    "In 2008, he took over his family's company after his father was jailed for tax e" +
                            "vasion, illegal campaign contributions and witness tampering. ",
                    "Mr Kushner Snr had admitted setting up his own brother-in-law with a prostitute," +
                            " secretly filming the liaison, and sending the tape to his sister in an effort t" +
                            "o prevent them testifying against him.",
                    "In 2009, Jared wed Ivanka Trump at a Trump golf club in New Jersey. They have th" +
                            "ree children.",
                    "Mr Kushner and Mr Trump's apparent bond may be based in part at least on similar" +
                            " experiences.",
                    "Both are political outsiders who inherited property empires from their fathers a" +
                            "t a relatively young age. The Kushners own 666 Fifth Avenue, a Manhattan skyscra" +
                            "per just a few blocks from Trump Tower.",
                    "Mr Trump's father, Frederick Christ Trump, was also a controversial figure who w" +
                            "as taken to court for alleged racial discrimination in housing allocation. ",
                    "But in contrast to his father-in-law, Mr Kushner is seen as a composed and camer" +
                            "a-shy personality.",
                    "This fresh-faced, behind-the-scenes operator will have to face the spotlight whe" +
                            "n he is questioned as part of a Senate investigation into alleged links between " +
                            "the Trump campaign and the Kremlin.",
                    "It has emerged that Mr Kushner not only spoke to Moscow's ambassador in December" +
                            " 2016, but met the head of a US-sanctioned, Russian state-owned bank. ",
                    "The ",
                    " and the ",
                    " report that Mr Kushner allegedly discussed setting up a back channel with the R" +
                            "ussian ambassador. ",
                    "Investigators reportedly believe Mr Kushner has relevant information, but is not" +
                            " necessarily suspected of a crime. ",
                    "He will be the closest person to the president quizzed in the ongoing congressio" +
                            "nal inquiry and will no doubt find the inquiry an unwelcome distraction from his" +
                            " many other duties.",
                    "Mr Kushner will need to muster all his lauded political acumen to navigate the h" +
                            "earing."
                ]
            }, {
                "_id": "5975d9434da41631e7e4caf2",
                "crawled_at": 1500895556000,
                "title": "Turkey's Cumhuriyet journalists in terrorism trial",
                "url": "http://www.bbc.com/news/world-europe-40699368",
                "summary": "Seventeen journalists and managers at Turkish opposition newspaper Cumhuriyet we" +
                        "nt on trial on Monday on charges of aiding a terrorist organisation.",
                "source": "bbc",
                "tag": "world",
                "timestamp": "2017-07-24 19:25:55.512538",
                "image_urls": ["https://ichef.bbci.co.uk/news/320/cpsprodpb/B31F/production/_97055854_turkey.jpg"],
                "text": [
                    "Seventeen journalists and managers at Turkish opposition newspaper Cumhuriyet we" +
                            "nt on trial on Monday on charges of aiding a terrorist organisation.",
                    "If found guilty this week, they could face sentences of up to 43 years in jail. " +
                            "Ten have already been in pre-trial detention for almost nine months.",
                    "At the Istanbul courthouse a large crowd of supporters let off balloons and call" +
                            "ed for their release.",
                    "There was chaos as they tried to enter the court for the start of the trial.",
                    "As the trial got under way in the packed courtroom, veteran Cumhuriyet columnist" +
                            " Kadri Gursel told the court that all the allegations against him were false and" +
                            " methods used to build the case against him illegal.",
                    "Supporters of the accused are adamant the trial is political. ",
                    "\"All I can say is that this is a political case. They are held for being journa" +
                            "lists, for doing their jobs,\" says Elif Gunay, whose father Turhan Gunay is edi" +
                            "tor-in-chief of the newspaper's book supplement. ",
                    "\"I cannot touch him. I cannot hug him,\" says Elif, who is allowed to visit her" +
                            " father once a week, for an hour. ",
                    "\"We talk over the phone behind a glass. When the time is up, they cut the line." +
                            " ",
                    "\"It is so frustrating to be taken away from him every week.\"",
                    "She says her father, now 71, has been through various health problems, including" +
                            " atherosclerosis (a hardening of the arteries) followed by an operation. ",
                    "\"But even that was not enough for him to be released on bail,\" she complains.",
                    "Just over a week ago, Turkey marked the first anniversary of a failed coup. Ther" +
                            "e were massive commemorations held by thousands of jubilant people, hailing the " +
                            "day as the triumph of democracy.",
                    "But critics argue that day - and the introduction of the state of emergency soon" +
                            " after - were actually the beginning of a massive crackdown, with more than 50,0" +
                            "00 people arrested in the last year.",
                    "Press freedom groups say media has been particularly hard hit during this period" +
                            ", as about 150 media outlets have been shut down. ",
                    "Turkey is currently listed as the country with the biggest number of imprisoned " +
                            "journalists. Journalism organisations say more than 150 journalists are behind b" +
                            "ars, most of them accused of terror charges.",
                    "But the government contradicts that figure. ",
                    "Speaking to the BBC earlier this month, President Recep Tayyip Erdogan said ther" +
                            "e were only two jailed journalists in the country. ",
                    "\"The rest are either terrorists, or they were carrying guns, or they robbed ATM" +
                            " machines,\" he said. ",
                    "The previous editor-in-chief of Cumhuriyet newspaper is the number one suspect i" +
                            "n the case starting on Monday.",
                    "Can Dundar was give a three-month jail term last year for espionage in another c" +
                            "ase but was released on bail. He now lives in exile in Germany.",
                    "\"I wonder who those two journalists Mr Erdogan speaks about are,\" he says whil" +
                            "e speaking to the BBC on Skype.",
                    "He too gives the figure of imprisoned journalists as more than 150.",
                    "\"Mr Erdogan hates criticism,\" he says. ",
                    "\"He regards every criticism as an insult to himself or as a terrorist act. We k" +
                            "now that all those people are journalists and they've done nothing but journalis" +
                            "m.\"",
                    "In the indictment against Cumhuriyet, there are accusations such as \"changing t" +
                            "he paper's editorial policy\", preparing \"violent and divisive news\" and \"int" +
                            "erviewing leaders of terrorist organisations\".",
                    "\"This is an oddity, it is absurd,\" says defence lawyer Adil Demirci.",
                    "\"This is obviously a political case. They are targeting Cumhuriyet because it i" +
                            "s an opposition paper.\"",
                    "The head of media organisation PEN Turkey, Zeynep Oral, believes the state of pr" +
                            "ess freedom in the country is the worst it has been for decades.",
                    "\"You never know what will happen tomorrow,\" she says.",
                    "\"Anybody can put anybody into jail these days. But even if a single journalist " +
                            "is behind bars for no reason, no-one will ever be free in this country.\"",
                    "Journalists and press freedom activists all over the world will be watching the " +
                            "Cumhuriyet trial very closely. The hearings are expected to last all week.",
                    "Mr Dundar thinks the outcome of this case could be indicative of the route Turke" +
                            "y is willing to take in the near future.",
                    "\"Cumhuriyet is one of the last castles of free media in Turkey,\" he says.",
                    "\"If we lose this last castle, there will be no more free press in our country." +
                            "\""
                ]
            }, {
                "_id": "5975d9434da41631e7e4caf3",
                "crawled_at": 1500895556000,
                "title": "Michael Phelps loses 'race' to Great White shark",
                "url": "http://www.bbc.com/news/world-40702752",
                "summary": "The much-hyped head-to-head race between US swimmer Michael Phelps and a Great W" +
                        "hite shark turned out to be a computer simulation, drawing complaints from many " +
                        "disappointed viewers.",
                "source": "bbc",
                "tag": "world",
                "timestamp": "2017-07-24 19:25:55.733564",
                "image_urls": ["https://ichef.bbci.co.uk/news/320/cpsprodpb/176D1/production/_97035959_d4b698ef-" +
                        "5744-4f04-ac96-fe7050eb17bc.jpg"],
                "text": [
                    "The much-hyped head-to-head race between US swimmer Michael Phelps and a Great W" +
                            "hite shark turned out to be a computer simulation, drawing complaints from many " +
                            "disappointed viewers.",
                    "The world's most decorated Olympic swimmer completed 100m in open ocean off Sout" +
                            "h Africa in 38.1 seconds to the shark's 36.1.",
                    "Discovery Channel aired the \"race\".",
                    "But what viewers actually saw was a montage of Phelps swimming alongside a compu" +
                            "ter-generated Great White.",
                    "Before Sunday's broadcast, Discovery had the 28-time Olympic medallist, who is n" +
                            "ow retired, and the shark swim the course separately.",
                    "Computer-generated footage of a shark was then superimposed over the swimmer to " +
                            "look like they were racing alongside each other. ",
                    "Some social media users loved the \"race\" idea, but many said that they felt \"" +
                            "robbed\" by the simulation.",
                    "Phelps himself tweeted that he was ready for a \"rematch\"... but in warmer wate" +
                            "rs.",
                    "Although the US athlete represents the peak of human athletic prowess, he can on" +
                            "ly swim at a top speed of 5-6mph (8-10km/h) without a monofin, while a Great Whi" +
                            "te is capable of doing at least 25mph in short bursts.",
                    "But humans have long pitted themselves against dangerous animals, often ones the" +
                            "y know are much faster.",
                    "They have done this for money; to draw attention to a cause; to create a spectac" +
                            "le, and perhaps also out of an inflated sense of what humans are capable of.",
                    "Here are four other instances when man has raced beast.",
                    "Bryan Habana, one of the fastest players in international rugby, decided to take" +
                            " on the world's fastest land animal in 2007 as part of an event sponsored by a c" +
                            "onservation group.",
                    "Habana is quick, but not Usain Bolt quick - running the 100m in 10.4 seconds at " +
                            "his best (compared with Bolt's 9.58 world record).",
                    "Still, the then 23-year-old, keen to raise awareness about the decline of the ch" +
                            "eetah, fancied his chances.",
                    "The cheetah was tempted with a dangling leg of lamb which it chased during the r" +
                            "ace, while Habana, who was given a significant head start, ",
                    ". ",
                    "The end was close but the cheetah just got over the line first. Habana asked for" +
                            " a re-run and was soundly beaten.",
                    "Filippo Magnini, a former world champion in the 100m freestyle, took on two dolp" +
                            "hins in a pool near Rome in 2011.",
                    "Given the animals' clear advantage, the Italian only had to swim one length of t" +
                            "he pool, while they had to swim two. ",
                    "But that didn't make a difference and the man nicknamed \"Superpippo\" was ",
                    ". ",
                    "He said later that he fell \"a bit in love\" with Leah, one of the dolphins.",
                    "The black US track and field athlete won a string of victories at the 1936 Berli" +
                            "n Olympics in front of Adolf Hitler, who had been hoping for a games that would " +
                            "demonstrate the Aryan superiority he believed existed.",
                    "Owens later struggled financially back home in a country where racism remained r" +
                            "ife and his sport was not professional.",
                    "To make money, he competed against racehorses in front of dazzled crowds.",
                    "He is said to have had the starting gun go off close to the horse, stunning it a" +
                            "nd allowing him to take a strong lead (",
                    "). Though this strategy worked most of the time, he didn't always win.",
                    "Later, more opportunities became available to Jesse Owens and, among other roles" +
                            ", he served as Ambassador of Sports under President Eisenhower.",
                    "NFL wide receiver Dennis Northcutt easily beat an ostrich named Thelma in 2009 f" +
                            "or a TV show called Sport Science.",
                    ", a fence separated the pair and it was obvious the animal wasn't giving it her " +
                            "best.",
                    "In a second race, this time inside the ostrich's enclosure, Dennis was soundly b" +
                            "eaten, as the ostrich leapt away and he was left chasing it through the dust."
                ]
            }
        ]
    };

    const withField = (count = 3, field) => {
        let promise = new Promise((resolve, reject) => {
            window.setTimeout(() => {
                let data = BBC
                    .data
                    .map((d) => {
                        let newData = {};
                        field.forEach((f) => {
                            if (d[f]) 
                                newData[f] = d[f]
                        });
                        return newData;
                    });
                data = checkTitle(data);
                resolve(data);
            }, 1500);
        });
        return promise;
    };

    const withId = (id) => {
        let promise = new Promise((resolve, reject) => {
            window.setTimeout(() => {
                const data = BBC.data;
                id = "5975d9434da41631e7e4caf3";
                resolve(checkTitle(data.find(e => e._id === id)));
            }, 1500);

        });
        return promise;
    };

    return {withField, withId}
};

const data = MockRep().withId("5975d9434da41631e7e4caf3");
export default MockRep();
