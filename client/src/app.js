const Educationrant = require('./models/educationrant.js')
const EducationrantView = require('./views/educationrant_view.js');
const EducationrantListView = require('./views/educationrant_list_view.js');
const EducationrantDetailtView = require('./views/educationrant_detail_view.js')

document.addEventListener('DOMContentLoaded', () => {
// console.log("hi");

const dropDownSelect = document.querySelector('#educationrant-select')
const educationrantView = new EducationrantView(dropDownSelect);
educationrantView.bindEvents();


const listContainer = document.querySelector('#educationrant');
const educationrantListView = new EducationrantListView(listContainer);
educationrantListView.bindEvents();

const educationrant = new Educationrant();
educationrant.getData();
// debugger;
educationrant.bindEvents();
});
