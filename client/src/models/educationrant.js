const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Educationrant = function (url) {
  this.url = 'https://www.reddit.com/r/education.json';
  this.request = new Request(this.url);
};

Educationrant.prototype.bindEvents = function () {
  PubSub.subscribe('EducationrantListView:change', (event) =>{
    selectedIndex = event.detail;
    // debugger;
    const selectedRant = this.request[selectedIndex];
    PubSub.publish('Educationrant:rant_detail_ready',selectedRant);
  })

};

Educationrant.prototype.getData = function () {
  this.request.get()
  .then((educationrant) => {
    // debugger;
    const rantTitle = this.publishTitle(educationrant);
    PubSub.publish('Educationrant:data-loaded', rantTitle);


  })
  .catch(console.error);
};

Educationrant.prototype.publishTitle = function (educationrant) {
const titleList = educationrant.data.children.map(rant => rant.data.title)
debugger;
return titleList
};

module.exports = Educationrant;
