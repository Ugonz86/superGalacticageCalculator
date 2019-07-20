import $ from 'jquery';
import {Calculator} from './calculator.js';
// import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var newCalculator;

$(document).ready(function(){
$(".container").hide();
$("#intro").show();
});

$("#start").click(function(){
$("#intro").hide("ease");
$("#options").show("ease");
});

$("#ageBtn").click(function(){
  $("#options").hide("ease");
  $("#ageCal").show("ease");
});
$("#expBtn").click(function(){
  $("#options").hide("ease");
  $("#expect").show("ease");
});
$("#diffBtn").click(function(){
$("#options").hide("ease");
$("#dateBox").show("ease");
});
$("#retAge").click(function(){
$("#ageOutcomeBox").hide("ease");
$("#ageCal").show("ease");
});
$("#returnExp").click(function(){
$("#expOutcomeBox").hide("ease");
$("#expect").show("ease");
});
$("#returnDate").click(function(){
$("#dateOutcomeBox").hide("ease");
$("#dateBox").show("ease");
});
$(".goBack").click(function(){
$("#ageCal").hide("ease");
$("#expect").hide("ease");
$("#dateBox").hide("ease");
$("#options").show("ease");
});
$("#retHome").click(function(){
$("#ageInSecsBox").hide("ease");
$("#options").show("ease");
});
$("#retHome2").click(function(){
$("#dateOutcomeBox").hide("ease");
$("#options").show("ease");
});


$("#ageCalForm").submit(function(event){
var ageInput = $("#ageNum").val();
newCalculator = new Calculator(ageInput);
event.preventDefault();
$("#ageCal").hide("ease");
$("#ageOutcomeBox").show("ease");
let age = $("#ageNum").val();
let planet = $("#planet").val();
if (planet === "mercury"){
$("#ageOutcome").text(newCalculator.ageMercury(age));
$("#planetInput").text("Mercury");
} else if (planet === "venus"){
$("#ageOutcome").text(newCalculator.ageVenus(age));
$("#planetInput").text("Venus");
} else if (planet === "mars"){
$("#ageOutcome").text(newCalculator.ageMars(age));
$("#planetInput").text("Mars");
} else if (planet === "jupiter"){
$("#ageOutcome").text(newCalculator.ageJupiter(age));
$("#planetInput").text("Jupiter");
}
});

$("#expectForm").submit(function(event){
    newCalculator = new Calculator($("#ageNumExp").val());
    event.preventDefault();
    $("#expect").hide("ease");
    $("#expOutcomeBox").show("ease");
    let age = $("#ageNumExp").val();
    let le = $("#expNum").val();
    let planet = $("#planetExp").val();
    let ageInPlanet;
    let expectancyInPlanet;
    if (planet === "mercury"){
          ageInPlanet = newCalculator.ageMercury(age);
          expectancyInPlanet = newCalculator.ageMercury(le);
          $("#expOutcome").text(ageInPlanet);
          $("#lifeExp").text(expectancyInPlanet);
    } else if (planet === "venus"){
          ageInPlanet = newCalculator.ageVenus(age);
          expectancyInPlanet = newCalculator.ageVenus(le);
          $("#expOutcome").text(ageInPlanet);
          $("#lifeExp").text(expectancyInPlanet);
    } else if (planet === "mars"){
          ageInPlanet = newCalculator.ageMars(age);
          expectancyInPlanet = newCalculator.ageMars(le);
          $("#expOutcome").text(ageInPlanet);
          $("#lifeExp").text(expectancyInPlanet);
    } else if (planet === "jupiter"){
          ageInPlanet = newCalculator.ageJupiter(age);
          expectancyInPlanet = newCalculator.ageJupiter(le);
          $("#expOutcome").text(ageInPlanet);
          $("#lifeExp").text(expectancyInPlanet);
    }
    $("#expPlanetInput").text(planet.toUpperCase());
    if (ageInPlanet > expectancyInPlanet){
      $("#results").text("You have surpassed your life expectancy on this planet by "+ Math.round((ageInPlanet - expectancyInPlanet)*100)/100 + " years!");
    }
    else{
      $("#results").text("You have "+ newCalculator.expectancy(planet,le,age) +" years left to live in that planet!");
    }
});

$("#returnHome").click(function(){
  $("#expOutcomeBox").hide("ease");
  $("#options").show("ease");
});

$("#dateForm").submit(function(event){
  event.preventDefault();
$("#dateBox").hide("ease");
  let y1 = $("#year1").val();
  let m1 = $("#month1").val();
  let d1 = $("#day1").val();
  let y2 = $("#year2").val();
  let m2 = $("#month2").val();
  let d2 = $("#day2").val();
$("#dateOutcomeBox").show("ease");
$("#dateOutcome").text(newCalculator.dateDifference(y1, m1, d1, y2, m2, d2));
});

$("#modAge").click(function(){
  event.preventDefault();
$("#ageOutcomeBox").hide("ease");
$("#ageInSecsBox").show("ease");
let age = $("#ageNum").val();
$("#ageInSecs").text(newCalculator.ageSeconds(age));
});
