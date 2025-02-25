import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ['the', 'our', 'his', 'hers'];
  let adjs = ['great', 'big', 'little', 'small'];
  let nouns = ['jogger', 'racoon', 'democrat', 'republican'];
  let domains = ['.com', '.net', '.org', '.gov'];

  // Java program to demonstrates the working "of" for loop
  // for loop to generate domain names
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
        console.log(pronoun+adj+noun+domain);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
