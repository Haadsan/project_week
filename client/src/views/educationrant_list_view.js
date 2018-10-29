const PubSub = require('../helpers/pub_sub.js');
const EducationrantListView = require('./educationrant_list_view.js')

const EducationrantDetailtView = function (container){
this.container = container;
};

EducationrantDetailtView.prototype.bindEvents = function () {
  PubSub.subscribe('EducationrantView:change', (event) => {
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
