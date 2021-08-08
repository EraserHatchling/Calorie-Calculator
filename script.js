/*PART 1*/
//STEP 1: 
//make a variable named button
//access the Result button using DOM 
var button = document.querySelector(".btn");
//STEP 2:
//call out the button variable and attach .addEventListener("click", function(){})
button.addEventListener("click", function () {
    //in the function(), create:
    //=> a variable named weight and access the <input> id for weight to get the value using DOM  (text input)
    var weight = document.querySelector("#weight").value;
    //=> a variable named heightinCM and access the <input> id for height to get the value using DOM (text input)
    var heightinCM = document.querySelector("#height").value;

    //=> a variable named male and access the <input> id for male using DOM (radio button)
    var male = document.querySelector("#male");
    //=> a variable named female and access the <input> id for female using DOM (radio button)
    var female = document.querySelector("#female");
    //=> a variable named teenager and access the <input> id for the teenager using DOM (radio button)
    var teenager = document.querySelector("#teenager");
    //=> a variable named youngAdult and access the <input> id for the young adult using DOM (radio button)
    var youngAdult = document.querySelector("#youngAdult");
    //=> a variable named adult and access the <input> id for the adult using DOM (radio button)
    var adult = document.querySelector("#adult");
    //=> a variable named elderly and access the <input> id for the elderly using DOM (radio button)
    var elderly = document.querySelector("#elderly");
    //=> a variable named basal and do not declare any value for it (we will use it for the BMR formula later on)
    var basal;
    //=> a variable named heightinMeter and make the value to be heightinCM divided by 100
    var heightinMeter = heightinCM / 100;
    //=> a variable named kJtoKcal and make the value to be 4.184 
    var kJtoKcal = 4.184;
    //=> calculate BMR (refer to the project guideline at Part 1)

    if (male.checked && teenager.checked) {
        basal = Math.round(((69.4 * weight) + (322.2 * (heightinMeter)) + 2392) / kJtoKcal);
        console.log(basal);
    }
    else if (male.checked && youngAdult.checked) {
        basal = Math.round(((64.4 * weight) - (113.0 * heightinMeter)) + 3000 / kJtoKcal);
        console.log(basal);
    }
    else if (male.checked && adult.checked) {
        basal = Math.round(((47.2 * weight) + (66.9 * heightinMeter)) + 3769 / kJtoKcal);
        console.log(basal);
    }
    else if (male.checked && elderly.checked) {
        basal = Math.round(((36.8 * weight) + (4719.5 * heightinMeter)) - 4481 / kJtoKcal);
        console.log(basal);
    }
    else if (female.checked && teenager.checked) {
        basal = Math.round(((30.9 * weight) + (2016.6 * (heightinMeter)) + 907) / kJtoKcal);
        console.log(basal);
    }
    else if (female.checked && youngAdult.checked) {
        basal = Math.round(((55.6 * weight) + (1397.4 * heightinMeter)) + 146 / kJtoKcal);
        console.log(basal);
    }
    else if (female.checked && adult.checked) {
        basal = Math.round(((36.4 * weight) - (104.6 * heightinMeter)) + 3619 / kJtoKcal);
        console.log(basal);
    }
    else {
        basal = Math.round(((38.5 * weight) + (2665.2 * heightinMeter)) - 1264 / kJtoKcal);
        console.log(basal);
    }
    /*PART 2*/
    //STEP 1:
    //After the conditional statement that can get the result of the basal, create:
    //=> a variable named choice and access the <option> class for choice using DOM
    //=> a variable named sedentary and access the <option> class for sedentary using DOM
    //=> a variable named light and access the <option> class for light using DOM
    //=> a variable named moderate and access the <option> class for moderate  using DOM
    //=> a variable named active and access the <option> class for active using DOM
    //=> a variable named dailyIntake and do not declare any value for it (we will use it for the formula later on)
    //=> a variable named resultMessage and access the <div> id for the result message using DOM
    //=> a variable named calorie and access the <div> id for calorie using DOM
    //=> a variable named final and make the value to be document.querySelector("#Final");
    var choice = document.querySelector(".choice");
    var sedentary = document.querySelector(".sedentary");
    var light = document.querySelector(".light");
    var moderate = document.querySelector(".moderate");
    var active = document.querySelector(".active");
    var dailyIntake;
    var resultMessage = document.querySelector("#resultMessage")
   
    var calorie = document.querySelector("#calorie")
    var final = document.querySelector("#Final")
    //STEP 2:
    //=> calculate Activity :Sedentary, Lightly Active, Moderately Active, Very Active
if (choice.selected || weight == 0 || heightinMeter == 0) {
        dailyIntake = 0
        console.log(dailyIntake);
        resultMessage.style.display = "block"
    }
    else if (sedentary.selected) {
        dailyIntake = basal * 1.2;
        console.log(dailyIntake);
        resultMessage.style.display= "none"
    }
    else if (light.selected) {
        dailyIntake = basal * 1.375;
        console.log(dailyIntake);
        resultMessage.style.display= "none"
    }
    else if (moderate.selected) {
        dailyIntake = basal * 1.55;
        console.log(dailyIntake);
        resultMessage.style.display= "none"
    }
    else {
        dailyIntake = basal * 1.75;
        console.log(dailyIntake);
        resultMessage.style.display= "none"
    }

    var h_error = document.querySelector(".h_error")
    var w_error = document.querySelector(".w_error")

    if (weight == 0 && heightinMeter == 0) {
        h_error.style.display = "block";
        h_error.style.color = "red"
        w_error.style.display = "block";
        w_error.style.color = "red"
    }
    else if (weight == 0){
        w_error.style.display = "block";
        w_error.style.color = "red"
        h_error.style.display = "none";
        
    }
    else if (heightinCM == 0){
        h_error.style.display = "block";
        h_error.style.color = "red"
        w_error.style.display = "none";
    }
    else{
        h_error.style.display="none";
        w_error.style.display="none";
    }

    var gain = document.querySelector("#gain")
    var loss = document.querySelector("#loss")
    var hideloss = document.querySelector(".hideLoss")

    var lossweight = Math.round(dailyIntake-500);
    var gainweight = Math.round(dailyIntake+750);

    if(lossweight<1600 && male.checked){
        gain.textContent = gainweight;
        hideloss.style.display="none";
    }
    else if (lossweight<1200 && female.checked)
    {
        gain.textContent = gainweight;
        hideloss.style.display="none";
    }
    else if (lossweight<1600 && male.checked && teenager.checked)
    {
        gain.textContent = gainweight;
        hideloss.style.display="none";
    }
    else if(lossweight<1400 && female.checked && teenager.checked){
        gain.textContent = gainweight;
        hideLoss.style.display="none";
    }
    else{
        loss.textContent = lossweight;
        gain.textContent= gainweight;
        hideloss.style.display="block";
    }

    //STEP 3:
    //=> round off the daily intake calorie
calorie.textContent = Math.round(dailyIntake);
    //STEP 4:
    //=> customize the output style of the daily intake result
    final.style = "max-width: 25rem; margin: auto; border: 6px solid pink; width: 50%; margin-top: 45px; background-color:#F0D9E7; border-radius: 20px; color:#FF94CC; margin-bottom: 30px";

});