// JS by Dan Høegh
// UCN MMD 2018

const data = {
    "site": {
        "footer": {
            "address": "Søndre havnegade 74<br>9000 Aalborg",
            "email": "<a href='contact@mysite.com'>contact@mysite.com</a>"
        },
        "titlePrepend": "ツ ",
        "titleAppend": " | The JSON Company"
    },
    "pages": [
        {
            "id": 312,
            "metaData":
            {
                "name": "Home",
                "title": "Home",
                "template": "page",
                "visible": true,
                "rootPage": true
            },
            "content": {
                "header": "Welcome",
                "image": "assets/images/img1.jpg",
                "text":
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<quote>This they said in a sincere tone</quote>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>" +
                    "<p>Nam rhoncus nisl eu ligula pharetra blandit. Phasellus accumsan odio eget scelerisque euismod. Phasellus condimentum dolor ante, ac scelerisque lectus efficitur ornare. In sagittis quis nibh eu euismod. Quisque mattis sodales euismod. Curabitur viverra ipsum eros, in varius lorem pharetra non. Sed nunc nunc, luctus nec sodales non, imperdiet et eros. Nam id ipsum interdum, molestie nisl ut, tristique massa. Sed in vestibulum mauris. Maecenas quis faucibus eros. Nulla porttitor, justo quis molestie sodales, neque magna mattis ex, a mollis velit ipsum sed justo. Maecenas congue orci purus, ut lobortis risus congue at. Integer congue elit ac justo mollis, sed maximus ex maximus. Maecenas sit amet felis a nisl malesuada lobortis.</p>"
            }
        },
        {
            "id": 12,
            "metaData":
            {
                "name": "About us",
                "title": "About us",
                "template": "page",
                "visible": true
            },
            "content": {
                "header": "Info about us",
                "image": "assets/images/img2.jpg",
                "text":
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>"
            }
        },
        {
            "id": 32,
            "metaData":
            {
                "name": "News",
                "title": "Latest news",
                "template": "news",
                "visible": true
            },
            "content": {
                "header": "News",
                "image": "assets/images/img5.jpg",
                "text":
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>"
            }
        }
    ],
    "news": [
        {
            "id": 87,
            "metaData": {
                "date": "March 9 2019",
                "title": "News - New employees",
                "visible": true
            },
            "content": {
                "header": "New employees",
                "image": "assets/images/img3.jpg",
                "teaser": "We've just hired more staff!",
                "text":
                    "<p>Due to a rapid increase in the amount of incoming orders, we are happy to announce that we have hired several new members of staff.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "id": 94,
            "metaData": {
                "date": "March 10 2019",
                "title": "News - More color",
                "visible": true
            },
            "content": {
                "header": "More color on the walls",
                "image": "assets/images/img4.jpg",
                "teaser": "We've been splashing about the place",
                "text":
                    "<p>White walls are boring, let's spice the place up a bit.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        }
    ]
};

// console.log(data);

window.onload = function(){
    // get pageId from URL, if no pageID, then let it be 0
    let pageId = getPageIdFromUrl();
    drawSite(pageId);
}

function drawSite(pageId){
    if (pageId == 0){
        // find the first page with "rootpage" == true and set that id as pageId
        for (let i=0; i<data.pages.length; i++){
            if (data.pages[i].metaData.rootPage === true){
                pageId = data.pages[i].id;
                break; // stops the for loop at the first occurance. No need to loop through the rest of the pages
        }
        }
    }
    drawFooter();
    drawNav(pageId);
    drawPage(pageId);
}

function drawNav(currentPageId){
    let navString = "<ul>";
    for (let i=0; i<data.pages.length; i++){
        let activePage = "";
        if(data.pages[i].id == currentPageId) {
            activePage = "class='active'";
        }
        navString += `<li ${activePage}><a href="index.html?pageId=${data.pages[i].id}">${data.pages[i].metaData.name}</a></li>`;
    }
    navString += "</ul>";
    drawData("navigation", navString);
}

function drawPage(pageId){
    let page = findPageById(pageId);
    drawTitle(page);

    // get template
    const template = page.metaData.template;
    switch (template) {
        case "page":
            drawTemplatePage(page);
            break;
        case "news":
            drawTemplateNews(page);
            break;
    }
}

function drawTitle(page){
    // Set title
    document.title = data.site.titlePrepend + page.metaData.title + data.site.titleAppend;
}

function drawFooter(){
    let footerString = `
        <h4>Contact us:</h4>
        <address id="address">${data.site.footer.address}</address>
        <div id="email">${data.site.footer.email}</div>
    `;
    drawData("footer", footerString);
}

function drawTemplatePage(page){
    let content = `
        <article>
            <h1>${page.content.header}</h1>
            <img class="page-image" src="${page.content.image}" alt="${page.content.header}">
            <div class="text">${page.content.text}</div>
        </article>
    `;

    drawData("root", content);
}

function drawTemplateNews(page){
    let content = `
        <h1>${page.content.header}</h1>
        <img class="news-image" src="${page.content.image}" alt="${page.content.header}">
        <div class="text">${page.content.text}</div>
        ${newsList()}
    `;

    drawData("root", content);
}

function newsList(){
    let newsListString = "<h2>Latest news</h2>";
    for (let i=0;i<data.news.length;i++){
        let item = data.news[i];
        newsListString += `
            <article class="newsItem">
                <h3>${item.content.header}</h3>
                <div class="date">${item.metaData.date}</div>
                <div class="teaser">${item.content.teaser}</div>
                <div class="text-wrapper">
                    <div class="image-wrapper">
                        <img class="image" src="${item.content.image}" alt="${item.content.header}">
                    </div>
                    <div class="text">${item.content.text}</div>
                </div>
            </article>
        `;
    }
    return newsListString;
}

function findPageById(pageId){
    let page;
    for (let i=0;i<data.pages.length;i++){
        if (data.pages[i].id == pageId) {
            page = data.pages[i]
            break; // stops the for loop at the first occurance. No need to loop through the rest of the pages
        }
    }
    return page;
}

function drawData(elementId, newContent){
    // elementId is where we want the data, newContent is the new data
    document.getElementById(elementId).innerHTML = newContent;
}

function getPageIdFromUrl(){
    let pageId = 0;
    let url = window.location.href;
    if(url.indexOf("pageId") > -1){
        let ulrSplit = url.split("?pageId=");
        pageId = ulrSplit[1];
    } 
    return pageId;
}