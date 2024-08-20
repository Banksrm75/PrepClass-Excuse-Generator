/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
  function generateExcuse() {
    let who = [
      "The dog",
      "My grandma",
      "The mailman",
      "E.T.",
      "My bird",
      "My husband"
    ];
    let action = ["ate", "peed", "crushed", "broke", "took"];
    let what = ["my homework", "my phone", "the car", "my computer"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying",
      "this morning"
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
