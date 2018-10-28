const PubSub = require('../helpers/pub_sub.js');

const EducationrantDetailtView = function (container){
this.container = container;
};

EducationrantDetailtView.prototype.bindEvents = function () {
  PubSub.subscribe('EducationrantListView:change', (event) => {
    this.clearRant();
    this.renderRantDetails(event.detail);
  });
};

EducationrantDetailtView.prototype.clearRant = function () {
  this.container.innerHTML = '';
};


EducationrantDetailtView.prototype.renderRantDetails = function (rantTitle) {
  const title = this.createTextElement('h2', rantTitle.title);
  this.container.appendChild(title);


};




module.export = EducationrantDetailtView;
