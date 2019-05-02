const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Nav anchor tags
let navAnchors = document.querySelectorAll('a');
navAnchors.forEach(function(anchor, i) {
  return anchor.textContent = siteContent["nav"][`nav-item-${i}`];
});

// cta elements
let mainH1 = document.querySelector('.cta-text h1');
mainH1.textContent = siteContent["cta"]["h1"];

let btn = document.querySelector('.cta-text button');
btn.textContent = siteContent["cta"]["button"];

// main-content 
  // top content
let topContent = document.querySelector('.top-content');

let features = topContent.children[0];
features.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
features.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];

let about = topContent.children[1];
about.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
about.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];

  // bottom content
let botContent = document.querySelector('.bottom-content');

let services = botContent.children[0];
services.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
services.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];

let product = botContent.children[1];
product.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
product.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];

let vision = botContent.children[2];
vision.getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
vision.getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

// contact
let contact = document.querySelector(".contact");
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];

// footer
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];