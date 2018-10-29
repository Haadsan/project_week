const PubSub = require('../helpers/pub_sub.js');

const EducationrantDetailView = function (container){

  this.container = container;
}

EducationrantDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('EducationRant:individual-rant', (event) => {

console.log(event);
    this.clearRant();
    this.render(event.detail)

  });
};

EducationrantDetailView.prototype.render = function (rant) {
const rantDetail = document.createElement('div');
// debugger;
rantDetail.classList.add('educationrant');


const title = document.createElement('h3');
debugger;
rant.textContent = rant.title;
rantDetail.appendChild(title)
this.container.appendChild(rantDetail)

const rantDetailList = document.createElement('ul');
// debugger;
const selftext = this.createRantDetailItem('Selftext', rant.selftext);
rantDetailList.appendChild(selftext);
this.container.appendChild(rantDetailList)

const author = this.createRantDetailItem('Author', rant.author);
// debugger;
rantDetailList.appendChild(author);

const urlLink = this.createRantDetailItem('URL', rant.url);
rantDetailList.appendChild(urlLink);

const thumbnailLink = this.createRantDetailItem('Thumbnail', rant.thumbnail);
rantDetailList.appendChild(thumbnailLink);

const imagePreview = document.createElement('img');
imagePreview.src = rant.image
this.container.appendChild(imagePreview);

this.container.appendChild(rantDetailList);
return rantDetail;

};

EducationrantDetailView.prototype.createRantDetailItem = function (label, property) {
const element = document.createElement('li');
element.textContent = `${label}: ${property}`;
return element;

};

EducationrantDetailView.prototype.clearRant = function () {
  this.container.innerHTML = '';
}

module.exports = EducationrantDetailView;
