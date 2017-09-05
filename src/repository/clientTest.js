const client = window.client;

client
    .getNewsById('bbc', '599843334da4162d58a23dc3', ['text', 'image_urls'])
    .then(data => console.log(data));
client
    .getNewsById('bbc', '599843334da4162d58a23dc3', ['text', 'image_urls','source'])
    .then(data => console.log(data));


    

