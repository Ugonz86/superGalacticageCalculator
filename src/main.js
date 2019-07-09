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
} else if (planet === "venus"){
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
if (planet === "mercury"){
$("#expOutcome").text(newCalculator.ageMercury(age));
$("#lifeExp").text(newCalculator.ageMercury(le));

} else if (planet === "venus"){
$("#expOutcome").text(newCalculator.ageVenus(age));
$("#lifeExp").text(newCalculator.ageVenus(le));

} else if (planet === "mars"){
            $("#expOutcome").text(newCalculator.ageMars(age));
            $("#lifeExp").text(newCalculator.ageMars(le));
} else if (planet === "jupiter"){
            $("#expOutcome").text(newCalculator.ageJupiter(age));
            $("#lifeExp").text(newCalculator.ageJupiter(le));
}
        $("#expPlanetInput").text(planet.toUpperCase());
        $("#yearsLeft").text(newCalculator.expectancy(planet, le, age));
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

// let tempModal = document.getElementById('ageInSecsBox');
// let tempBtn = document.getElementById("modAge");
// let tempSpan = document.getElementByClassName("close")[0];
// tempBtn.onclick = function(){
// tempModal.style.display = "block";
// };
// tempSpan.onclick = function(){
// tempModal.style.display = "none";
// };
// window.onclick = function(){
// if (event.target == tempModal){
// tempModal.style.display = "none";
// };
// };
