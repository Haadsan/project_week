const PubSub = require('../helpers/pub_sub.js');


const EducationrantView = function (dropDownSelect) {
this.dropDownSelect = dropDownSelect;
};


EducationrantView.prototype.bindEvents = function () {
PubSub.subscribe('Educationrant:data-loaded', (event) => {
  // console.log(event.detail.title);
    this.populateDropDown(event.detail)


})
this.dropDownSelect.addEventListener('change', (event)=>{
const selectedIndex = event.target.value;
PubSub.publish('EducationrantView:change', selectedIndex)
})

};

EducationrantView.prototype.createDropDownItem = function (title, index) {
// console.log(title);
const option = document.createElement('option')
option.textContent = title;
option.value = index;
return option;
};


EducationrantView.prototype.populateDropDown = function (titleList) {
titleList.forEach((title, index) => {
    // debugger;
  const titleOption = this.createDropDownItem(title, index);
  // debugger;
  const dropDownSelect = document.querySelector('#educationrant-select')
  dropDownSelect.appendChild(titleOption)
})

};



module.exports = EducationrantView;
