"use strict";

var nameComponent = React.createElement("div", {
  id: "out"
}, React.createElement("h2", {
  id: "name_comp"
}, "PRANEETH BOJJA"));
var pictureComponent = React.createElement("div", {
  id: "picture_out"
}, React.createElement("img", {
  id: "picture_comp",
  src: "./image.jpg"
}));
var introComponent = React.createElement("div", {
  id: "intro_out"
}, React.createElement("p", {
  id: "intro_comp"
}, "Hi, my name is Praneeth. I am currently working as a time traveler at ChronoLogic Inc. since 2050, helping the universe keep it's integrity and saving time ,itself, from falling apart, time-to-time (pun intended). My hobbies include solving crimes with Dr. Watson, professional Unicorn Racing, controlling extreme weather conditions and hanging out with Santa Claus and friends, at the Bermuda Triangle. I also occasionally paint, which sometimes, come into existence (Sorry centipedes, you were a mistake).", React.createElement("br", null), "Other than these, I can walk on water with my socks on (without ever getting them wet), I can plug USB cables in one attempt, I can pull/push doors right everytime, I am undefeated in lightsaber duels (54-0, all against yoda). but more than anything,", React.createElement("br", null), "I never brag. I stay HUMBLE."));
var buttonComponent = React.createElement("div", {
  id: "button_out"
}, React.createElement("a", {
  href: "https://github.com/Praneeth9985"
}, React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));