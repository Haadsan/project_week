const PubSub = require('../helpers/pub_sub.js');

const EducationrantDetailtView = function (container){
this.container = container;
};


EducationrantDetailtView.prototype.renderRantDetails = function (rantTitle) {
  const title = this.createTextElement('h2', rantTitle.title);
  this.container.appendChild(title);


};


module.export = EducationrantDetailtView;
