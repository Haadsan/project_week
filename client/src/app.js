const Educationrant = require('./models/educationrant.js')
const EducationrantView = require('./views/educationrant_view.js');
const EducationrantDetailtView = require('./views/educationrant_detail_view.js')

document.addEventListener('DOMContentLoaded', () => {
// console.log("hi");

const dropDownSelect = document.querySelector('#educationrant-select')
const educationrantView = new EducationrantView(dropDownSelect);
educationrantView.bindEvents();


const div = document.querySelector('#educationrant');
const educationrantDetailView = new EducationrantDetailView(div);
educationrantDetailView.bindEvents();

const educationrant = new Educationrant();
educationrant.getData();
// debugger;
educationrant.bindEvents();
});
