/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
  function generateExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    let newExcuse =
      who[getRandomInt(who.length)] +
      " " +
      action[getRandomInt(action.length)] +
      " " +
      what[getRandomInt(what.length)] +
      " " +
      when[getRandomInt(when.length)];
    return newExcuse;
  }
};
