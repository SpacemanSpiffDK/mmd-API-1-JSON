// JS by Dan Høegh
// UCN MMD 2022

// This code is for educational purposes
// All code decision are based on the current level of the students

const data = {
    "site": {
        "footer": {
            "address": "Søndre havnegade 74<br>9000 Aalborg",
            "email": "<a href='contact@mysite.com'>contact@mysite.com</a>"
        },
        "titlePrepend": "ツ ",
        "titleAppend": " | The JSON Company"
    },
    "pages": [{
            "id": 1,
            "metaData": {
                "name": "Home",
                "title": "Home",
                "template": "page",
                "visible": true,
                "rootPage": true
            },
            "content": {
                "header": "Welcome",
                "image": "assets/images/img1.jpg",
                "text": "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<quote>This they said in a sincere tone</quote>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>" +
                    "<p>Nam rhoncus nisl eu ligula pharetra blandit. Phasellus accumsan odio eget scelerisque euismod. Phasellus condimentum dolor ante, ac scelerisque lectus efficitur ornare. In sagittis quis nibh eu euismod. Quisque mattis sodales euismod. Curabitur viverra ipsum eros, in varius lorem pharetra non. Sed nunc nunc, luctus nec sodales non, imperdiet et eros. Nam id ipsum interdum, molestie nisl ut, tristique massa. Sed in vestibulum mauris. Maecenas quis faucibus eros. Nulla porttitor, justo quis molestie sodales, neque magna mattis ex, a mollis velit ipsum sed justo. Maecenas congue orci purus, ut lobortis risus congue at. Integer congue elit ac justo mollis, sed maximus ex maximus. Maecenas sit amet felis a nisl malesuada lobortis.</p>"
            }
        },
        {
            "id": 3,
            "metaData": {
                "name": "About you",
                "title": "About you",
                "template": "page",
                "visible": false
            },
            "content": {
                "header": "Info about you",
                "image": "assets/images/img2.jpg",
                "text": "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>"
            }
        },
        {
            "id": 9,
            "metaData": {
                "name": "Another page",
                "title": "Another page",
                "template": "page",
                "visible": true
            },
            "content": {
                "header": "Another page",
                "image": "assets/images/img1.jpg",
                "text": "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>"
            }
        },
        {
            "id": 4,
            "metaData": {
                "name": "News",
                "title": "Latest news",
                "template": "news",
                "visible": true
            },
            "content": {
                "header": "News",
                "image": "assets/images/img5.jpg",
                "text": "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>"
            }
        },
        {
            "id": 2,
            "metaData": {
                "name": "About us",
                "title": "About us",
                "template": "page",
                "visible": true
            },
            "content": {
                "header": "Info about us",
                "image": "assets/images/img2.jpg",
                "text": "<p>Morbi porta maximus faucibus. Nulla mollis mollis ultricies. Nunc vel lectus mollis, faucibus tellus non, consequat nulla. Donec et rhoncus velit. Nam commodo placerat mauris, ut sagittis ipsum consectetur vestibulum. Duis quis turpis vel nisi venenatis imperdiet. Cras pretium semper scelerisque. Morbi lobortis fermentum massa, ac ultricies ex interdum sed. Mauris sit amet nulla venenatis, tincidunt dolor non, feugiat elit. Integer pellentesque ut diam at suscipit. Phasellus eget dolor euismod, varius orci nec, porta ligula. Sed convallis turpis mauris, at pellentesque nisl dictum sed.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>" +
                    "<p>Suspendisse nec fermentum ligula. Cras sagittis tristique neque, ut sollicitudin nunc lacinia vel. Proin volutpat consequat accumsan. Etiam vel justo turpis. Nullam finibus, erat eget cursus tempus, risus libero hendrerit sem, sed aliquam erat mi in elit. Vestibulum aliquam mi eros, eu tempus sem sagittis a. Nullam aliquam libero a sem placerat, eget rutrum nisl feugiat. Quisque in maximus sem, vel rhoncus orci. Donec condimentum leo erat, at rutrum nunc egestas non. Nullam consectetur dictum ante nec euismod. In nibh dui, euismod a rhoncus sed, congue vitae libero.</p>" +
                    "<p>Phasellus facilisis dignissim enim, pharetra facilisis lectus luctus ac. Phasellus at porttitor orci. Ut ultricies massa risus, eu feugiat arcu bibendum ut. Etiam eu semper orci. Ut at accumsan sem. Praesent ut dui volutpat orci interdum tincidunt. Quisque tincidunt, nulla facilisis gravida varius, velit urna pretium tortor, eu viverra eros arcu vel ex. Duis lobortis scelerisque tellus, vitae dignissim erat eleifend sed.</p>"
            }
        }
    ],
    "news": [{
            "id": 5,
            "metaData": {
                "date": "March 9 2019",
                "title": "News - New employees",
                "visible": true
            },
            "content": {
                "header": "New employees",
                "image": "assets/images/img3.jpg",
                "teaser": "We've just hired more staff!",
                "text": "<p>Due to a rapid increase in the amount of incoming orders, we are happy to announce that we have hired several new members of staff.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "id": 6,
            "metaData": {
                "date": "March 10 2019",
                "title": "News - More color",
                "visible": true
            },
            "content": {
                "header": "More color on the walls",
                "image": "assets/images/img4.jpg",
                "teaser": "We've been splashing about the place",
                "text": "<p>White walls are boring, let's spice the place up a bit.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "id": 7,
            "metaData": {
                "date": "March 11 2019",
                "title": "News - New stairs",
                "visible": true
            },
            "content": {
                "header": "New stairs",
                "image": "assets/images/img3.jpg",
                "teaser": "We've just added more stairs!",
                "text": "<p>Due to a rapid increase in the amount of incoming orders, we are happy to announce that we have added several new stairs.</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "id": 8,
            "metaData": {
                "date": "March 12 2019",
                "title": "News - More cups",
                "visible": true
            },
            "content": {
                "header": "New mugs in the tea kitchen",
                "image": "assets/images/img4.jpg",
                "teaser": "Out with the old mugs!",
                "text": "<p>The old mugs were boring, we've bought some new ones!</p>" +
                    "<p>Aliquam sit amet sem ac ligula sodales suscipit vel in nulla. Vivamus sit amet faucibus justo, dictum vehicula urna. Cras dui orci, consectetur non risus nec, tincidunt rhoncus metus. Morbi et tempus elit. Fusce venenatis quam et metus malesuada, porttitor congue metus posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet venenatis massa. Fusce nec odio porttitor, eleifend erat eget, scelerisque purus. Nulla facilisi. Integer viverra vulputate consectetur. Duis sit amet luctus quam. Mauris bibendum, metus sed lobortis imperdiet, nisi sapien aliquam lacus, ac elementum sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        }
    ]
};

// output the JSON data object to console. 
// This is only done so that we can click through it in the developer console. 
// Not needed to make stuff work!
console.log(data);

// get our current page id from the URL
let pageId = getPageIdFromUrl();

// call on the drawSite function, use pageId to specify which page we want to draw
drawSite(pageId);

function getPageIdFromUrl() {
    // get pageId from URL, if no pageId, then let it be 0
    let pageId = 0;
    const url = window.location.href;

    // first we check to see if there is a "pageId" in the url
    if (url.indexOf("pageId") != -1) {
        const urlSplit = url.split("?"); // there's never more than one "?" in a URL, so we can split it in two here
        // check for more than one parameter (if there's one or more "&" then there's more parameters)
        if (urlSplit[1].indexOf("&") == -1) {
            const parameterSplit = urlSplit[1].split("="); // only one parameter, let's split it by the "=" sign
            pageId = parameterSplit[1]; // let pageId be the item with index 1 (the last of the two)
        } else {
            // several parameters, let's find pageId among them
            // first let's split it up by the "&"s that must be there
            const urlParameters = urlSplit[1].split("&"); // loop through the items in the array we got from splitting by "&"
            urlParameters.forEach(urlParameter => {
                // if this item's first six characters are "pageId" we got the right one
                if (urlParameter.substring(0, 6) == "pageId") {
                    const pageIdSplit = urlParameter.split("="); // get the pageId from this item
                    pageId = pageIdSplit[1]; // let pageId be the item with index 1 (the last of the two)
                }
            });
        }
    }
    return pageId;
}

function drawSite(pageId) {
    // in case there is no pageId in the URL, pageId will be 0.
    // when pageId is 0 we should loop through the pages and get the Id of the first one which has rootPage: true
    if (pageId == 0) {
        const rootPage = data.pages.find(page => page.metaData.rootPage === true); // Find the first page with rootPage == true (should only be ONE)
        pageId = rootPage.id; // grab the id from rootPage and store it in pageId so that we display data from this page
    }
    drawFooter(); // call the drawFooter function to draw the footer content
    drawNav(pageId); // call the drawNav function to draw the navigation. Give (pageId) as a parameter to tell which page is the current page
    drawPage(pageId); // call the drawPage function to draw the page. Give (pageId) as a parameter to tell which page to draw
}

function drawFooter() {
    // draw the footer
    const footerString = `
        <h4>Contact us:</h4>
        <address id="address">${data.site.footer.address}</address>
        <div id="email">${data.site.footer.email}</div>
    `;
    drawHtml("#footer", footerString);
}

function drawNav(currentPageId) {
    // draw navigation items as links in an ul-li list
    let navString = "<ul>";
    data.pages
        .filter(page => page.metaData.visible) // only include pages where metaData.visible == true
        .forEach(page => {
            let activePage = "";
            if (page.id == currentPageId) {
                activePage = "class='active'"; // set value in activePage if the current page item in the loop is the current page we want to show
            }
            // link is now only "?pageId=[id]" instead of "index.html?pageId=[id]"
            // Site still reloads on click, but just using the parameter is cleaner
            navString += `
            <li ${activePage}>
                <a href="?pageId=${page.id}">${page.metaData.name}</a>
            </li>
        `;
        });
    navString += "</ul>";
    drawHtml("#navigation", navString);
}

function drawPage(pageId) {
    // get a page object that fits pageId
    const page = findPageById(pageId);

    // draw the title, draw the content
    drawTitle(page);

    // figure out which template to use for this page, using switch since you can easily create more templates this way
    const template = page.metaData.template;
    switch (template) {
        case "page":
            drawTemplatePage(page);
            break;
        case "news":
            drawTemplateNews(page);
            break;
    }

    // add template type to body as css class
    const templateClass = `template-${template}`;
    document.querySelector('body').classList.add(templateClass); // add templateClass to the class-list of the first (and only) body-element in the DOM
}

function findPageById(pageId) {
    // find the page that matches the pageId and return the page object
    const pageObject = data.pages.find(page => page.id == pageId);
    return pageObject; // return the first (and only) page that matches the filter
}

function drawTitle(page) {
    // Set the title tag
    // putting the text strings together and storing them in document.title (the title element in head)
    document.title = data.site.titlePrepend + page.metaData.title + data.site.titleAppend; 
}

function drawTemplatePage(page) {
    // draw a normal page
    const content = `
        <article>
            <h1>${page.content.header}</h1>
            <img class="page-image" src="${page.content.image}" alt="${page.content.header}">
            <div class="text">${page.content.text}</div>
        </article>
    `;

    drawHtml("#root", content);
}

function drawTemplateNews(page) {
    // draw a news page
    const content = `
        <h1>${page.content.header}</h1>
        <img class="news-image" src="${page.content.image}" alt="${page.content.header}">
        <div class="text">${page.content.text}</div>
        ${newsList()}
    `;

    drawHtml("#root", content);
}

function newsList() {
    // return all news objects as articles in a html string
    let newsListString = "<h2>Latest news</h2>";
    data.news
        .filter(item => item.metaData.visible) // only return those items that have "metaData.visible == true"
        .forEach(item => {
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
        });
    return newsListString;
}

function drawHtml(selector, newContent) {
    // elementId is where we want the data, newContent is the new data
    document.querySelector(selector).innerHTML = newContent;
}