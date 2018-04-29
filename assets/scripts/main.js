
$(document).ready(function(){

  $(".input_option_2").hide().removeClass('hidden');//preserve class to stop flicker hack

  $(".option_1").on("click","input", e =>{
    $(e.delegateTarget).parent().siblings(".input_option_1").show();
    $(e.delegateTarget).parent().siblings(".input_option_2").hide();
  });

  $(".option_2").on("click","input", e =>{
    $(e.delegateTarget).parent().siblings(".input_option_2").show();
    $(e.delegateTarget).parent().siblings(".input_option_1").hide();
  });

  $("#only_pounds").on("input", ()=>{
    let pounds = parseFloat($("#only_pounds").val());
    $("#pounds").val(poundsToStoneAndPounds(pounds)[1]);
    $("#stones").val(poundsToStoneAndPounds(pounds)[0]);
    $("#kilograms").val(poundsToKg(pounds));
  });

  $("#stones, #pounds").on("input", ()=>{
    let pounds = stoneAndPoundsToPounds(parseFloat($("#stones").val()), parseFloat($("#pounds").val()));
    $("#only_pounds").val(pounds);
    $("#kilograms").val(poundsToKg(pounds));
  });

  $("#kilograms").on("input", ()=>{
    let pounds = kgToPounds(parseFloat($("#kilograms").val()));
    $("#only_pounds").val(pounds);
    $("#pounds").val(poundsToStoneAndPounds(pounds)[1]);
    $("#stones").val(poundsToStoneAndPounds(pounds)[0]);
  });



  $("#only_inches").on("input", ()=>{
    let inches = parseFloat($("#only_inches").val());
    $("#inches").val(inchesToFeetAndInches(inches)[1]);
    $("#feet").val(inchesToFeetAndInches(inches)[0]);
    $("#cm").val(inchesToCm(inches));
  });

  $("#feet, #inches").on("input", ()=>{
    let inches = feetAndInchesToInches(parseFloat($("#feet").val()), parseFloat($("#inches").val()));
    $("#only_inches").val(inches);
    $("#cm").val(inchesToCm(inches));
  });

  $("#cm").on("input", ()=>{
    let inches = cmToInches(parseFloat($("#cm").val()));
    $("#only_inches").val(inches);
    $("#inches").val(inchesToFeetAndInches(inches)[1]);
    $("#feet").val(inchesToFeetAndInches(inches)[0]);
  });
});


function round(num, precision){
  return parseFloat(num.toFixed(precision));
}
/*Weight*/
function poundsToStoneAndPounds(num){
  let stone = ~~(num / 14); //double bitwize is dropping remainer
  let pounds = num % 14;
  return [stone, round(pounds,2)];
}
function stoneAndPoundsToPounds(stone, pounds){
  return stone * 14 + pounds;
}
function poundsToKg(num){
  return round(0.4539237 * num, 2);
}
function kgToPounds(num){
  return round(2.20462262185 * num, 2);
}
/*heights*/
function round(num, precision){
  return parseFloat(num.toFixed(precision));
}
/*Weight*/
function inchesToFeetAndInches(num){
  let feet = ~~(num / 12); //double bitwize is dropping remainer
  let inches = num % 12;
  return [feet, round(inches,2)];
}
function feetAndInchesToInches(feet, inches){
  return feet * 12 + inches;
}
function inchesToCm(num){
  return round(2.54 * num, 2);
}
function cmToInches(num){
  return round(0.393701 * num, 2);
}

