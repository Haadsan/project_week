  const PubSub = require('../helpers/pub_sub.js');
  const EducationrantDetailtView = require('./educationrant_detail_view.js');


  const EducationrantListView = function (dropDownSelect) {
  this.dropDownSelect = dropDownSelect;
};


EducationrantListView.prototype.bindEvents = function () {
  PubSub.subscribe('Educationrant:data-loaded', (event) => {
      this.populateDropDown(event.detail.title)

  })
this.dropDownSelect.addEventListener('change', (event)=>{
  const selectedIndex = event.target.value;
  PubSub.publish('EducationrantListView:change', selectedIndex)
})

};

EducationrantListView.prototype.createDropDownItem = function (title, index) {
  console.log(title);
  const option = document.createElement('option')
  option.textContent = title;
  option.value = index;
  return option;
};

EducationrantListView.prototype.populateDropDown = function (titleList) {
  titleList.forEach((title, index) => {
    const titleOption = this.createDropDownItem(title, index);
    const dropDownSelect = document.querySelector('#educationrant-select')
    dropDownSelect.appendChild(titleOption)
  })

};

module.exports = EducationrantListView;
