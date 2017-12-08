// import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './signup.html';

// Template.info.onCreated(function () {
//   Meteor.subscribe('links.all');
// });
//
// Template.info.helpers({
//   links() {
//     return Links.find({});
//   },
// });
//
// Template.signup.events({
//   'submit .add-student'(event) {
//     event.preventDefault();
//
//     const target = event.target;
//     const firstname = target.firetname;
//     const lastname = target.lastname;
//
//     Meteor.call('links.insert', firstname.value, lastname.value, class.value (error) => {
//       if (error) {
//         alert(error.error);
//       } else {
//         firstname.value = '';
//         lastname.value = '';
//       }
//     });
//   },
// });
