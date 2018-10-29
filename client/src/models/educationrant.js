const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Educationrant = function (url) {
  this.url = 'https://www.reddit.com/r/education.json';
  this.request = new Request(this.url);
  this.stories = [];
};

Educationrant.prototype.bindEvents = function () {
  PubSub.subscribe('EducationrantView:change', (event) =>{
    selectedIndex = event.detail;
    // debugger;
    const selectedRant = this.stories[selectedIndex];
    this.getRant(selectedRant)
    // debugger;
    PubSub.publish('Educationrant:rant_ready',selectedRant);
  })

};

Educationrant.prototype.getData = function () {
  this.request.get()
  .then((response) => {
    // debugger;
    this.stories = response.data.children;
    // debugger;
    const rantTitle = this.publishTitle(response);
    PubSub.publish('Educationrant:data-loaded', rantTitle);


  })
  .catch(console.error);
};

Educationrant.prototype.publishTitle = function (educationrant) {
const titleList = educationrant.data.children.map(rant => rant.data.title)
// debugger;
return titleList
};

Educationrant.prototype.getRant = function (rants) {

  const rant = {
    author: rants.data["author"],
    selftext: rants.data["selftext"]

  }
//Publish rant
PubSub.publish('EducationRant:individual-rant', rant)
  // console.log(rant);

};



module.exports = Educationrant;
