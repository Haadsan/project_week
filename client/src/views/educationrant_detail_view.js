






EducationDetailview.prototype.bindEvents = function (event) {
PubSub.subscribe('EducationRant:individual-rant', event)

};






EducationrantListView.prototype.clearRant = function () {
  this.container.innerHTML = '';
};
















// // module.exports = EducationrantDetailView;
