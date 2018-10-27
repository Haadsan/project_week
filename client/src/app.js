const Educationrant = require('./models/educationrant.js')
const EducationrantListView = require('./views/educationrant_list_view.js');
const EducationrantDetailtView = require('./views/educationrant_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
// console.log("hi");

const dropDownSelect = document.querySelector('#educationrant-select')
const educationrantListView = new EducationrantListView(dropDownSelect);
educationrantListView.bindEvents();


const educationrant = new Educationrant();
educationrant.getData();
// debugger;
educationrant.bindEvents();
});
