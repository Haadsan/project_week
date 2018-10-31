const Educationrant = require('./models/educationrant.js');
const EducationrantView = require('./views/educationrant_view.js');
const EducationrantDetailView = require('./views/educationrant_detail_view.js');
// const EducationrantSaveView = require('./views/educationrant_save_view.js');
// const EducationrantFav = require('./models/educationrant_fav.js');



document.addEventListener('DOMContentLoaded', () => {
// console.log("hi");

const dropDownSelect = document.querySelector('#educationrant-select')
const educationrantView = new EducationrantView(dropDownSelect);
educationrantView.bindEvents();


const div = document.querySelector('#educationrant');
const educationrantDetailView = new EducationrantDetailView(div);
educationrantDetailView.bindEvents();


// const saveView = document.querySelector("#Favourites");
// const educationrantSaveView = new EducationrantSaveView(saveView);
// educationrantSaveView.bindEvents();



// const educationrantFav = new EducationrantFav();
// educationrantFav.getFavData();

const educationrant = new Educationrant();
educationrant.getData();
// debugger;
educationrant.bindEvents();
});
