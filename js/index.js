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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// ## Task 1: Create selectors to point your data into elements
//* [Ok] Create selectors by using any of the DOM element's methods
//* [Done] Note that IDs have been used on all images.  Use the IDs to update src path content

const snippet = document.getElementById("middle-img");
snippet.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const iAmRotundNotBallShapedYouBigot = document.getElementById("cta-img");
iAmRotundNotBallShapedYouBigot.setAttribute("src", siteContent["cta"]["img-src"]); 

//## Task 2: Update the HTML with the JSON data
//* [Yeah sure] Remember, NO direct updating of the HTML source is allowed.
//* [Can do] Using your selectors, update the content to match the example file.
//* [Done and done my good man] Remember to update the src attributes on images

const awesome = document.getElementsByTagName("h1");
awesome[0].textContent = "DOM IS AWESOME";

const navLinks = document.getElementsByTagName("a");
navLinks[0].textContent = "Service";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Content";


const button = document.getElementsByTagName("button");
button[0].textContent = "Get Started";

const midPageStuff = document.getElementsByTagName("h4");
midPageStuff[0].textContent = "Features";
midPageStuff[1].textContent = "About";
midPageStuff[2].textContent = "Services";
midPageStuff[3].textContent = "Product";
midPageStuff[4].textContent = "Vision";
midPageStuff[5].textContent = "Contact"

const midPageText = document.getElementsByTagName("p");
midPageText[0].textContent = "blah blooh blah blah blah words words words so many words ok here are just a few more words and now we're done";
midPageText[1].textContent = "ok here are some more words oh man so many words it's like the words never end but now they end ok bye";
midPageText[2].textContent = "I will quote from the eminent genius of a man I greatly respect: Bawitdaba, da bang, da dang diggy diggy, diggy, said the boogie, said up jump the boogie"; 
midPageText[3].textContent = "Honestly I'm only writing this out instead of copy/pasting from the original.html file because I wanna be the very best typeosipher"
midPageText[4].textContent = "I mean where's the fun in just copying some old dead latin book everywhere you go? I'll tell you where. Nowhere. That's where the fun is. Nowhere."
midPageText[5].textContent = "The corner of 4th and Broadmoore";
midPageText[6].textContent = "(806) 867-5309";
midPageText[7].textContent = "PM me dawg";

//## Task 3: Add new content
//* [Yep] Change the color of the navigation text to be green.
//* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
//* [ ] Check your work by looking at the [original html](original.html) in the browser

const navColors = document.querySelectorAll("a");
navColors.forEach(function(a) {
  a.style.color = "green";
});

// var parent = document.createElement("div");
// var p = document.createElement("p");
// var span = document.createElement("span");
// parent.append(p);
// parent.prepend(span);

const firstAnchor = document.createElement("a");
const secondAnchor = document.createElement("a");
const nav = document.querySelector("nav")

nav.prepend(firstAnchor);
nav.appendChild(secondAnchor);
firstAnchor.href = "#";
firstAnchor.innerHTML = "Entre";
secondAnchor.href = "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjE0NjQ2My9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1NzQwMjE0OH0.60NI2zybyoMvEQHfTaatIOqjWVKG29EmxlumqOwADMI/img.jpg?width=1200&coordinates=0%2C234%2C0%2C166&height=800"
secondAnchor.innerHTML = "Le Fin";


//## Stretch Goals
//* [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
//* [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

//## Stretch Project: Digital Timer
//This project is heavier on logic but employs some DOM manipulation to achieve it's goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get. 