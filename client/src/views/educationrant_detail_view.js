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
rant.text = rant.title;
rantDetail.appendChild(title)
this.container.appendChild(rantDetail)



};




EducationrantDetailView.prototype.clearRant = function () {
  this.container.innerHTML = '';
};






module.exports = EducationrantDetailView;
