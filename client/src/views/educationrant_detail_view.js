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
// debugger;
rant.textContent = rant.title;
rantDetail.appendChild(title)
this.container.appendChild(rantDetail)

const rantDetailList = document.createElement('ul');
// debugger;
if(rant.selftext != ""){


const selftext = this.createRantDetailItem('Text', rant.selftext);
rantDetailList.appendChild(selftext);
this.container.appendChild(rantDetailList)
}

const author = this.createRantDetailItem('Author', rant.author);
// debugger;
rantDetailList.appendChild(author);

const urlLink = this.createUrlLink('URL', rant.url);
rantDetailList.appendChild(urlLink);

if(rant.thumbnail != "self" && rant.thumbnail != "default"){
const thumbnailLink = this.createRantThumbnail('Thumbnail', rant.thumbnail);
rantDetailList.appendChild(thumbnailLink);
}

this.container.appendChild(rantDetailList);
return rantDetail;

};

EducationrantDetailView.prototype.createRantDetailItem = function (label, property) {
const element = document.createElement('li');
element.textContent = `${label}: ${property}`;
return element;

};

EducationrantDetailView.prototype.createRantThumbnail = function (label, property) {

  const element = document.createElement('li');
  thumbnail = document.createElement('img');
  thumbnail.src = property;
  element.appendChild(thumbnail);
  return element;

};

EducationrantDetailView.prototype.createUrlLink = function (label, property) {
  const element = document.createElement('li');
  url = document.createElement('a');
  url.href = property;
  url.textContent = property;
  element.appendChild(url)
  return element;

};
EducationrantDetailView.prototype.clearRant = function () {
  this.container.innerHTML = '';
}

module.exports = EducationrantDetailView;
