var prev_disp="";
var ans;
$(function(){
$("#display").html(0);
 call_onclick(num0,dispno);
 call_onclick(num1,dispno);
 call_onclick(num2,dispno);
 call_onclick(num3,dispno);
 call_onclick(num4,dispno);
 call_onclick(num5,dispno);
 call_onclick(num6,dispno);
 call_onclick(num7,dispno);
 call_onclick(num8,dispno);
 call_onclick(num9,dispno);
 call_onclick(point,dispno);
 call_onclick(add,dispno);
 call_onclick(sub,dispno);
 call_onclick(into,dispno);
 call_onclick(div,dispno);
 call_onclick(percent,dispno);
 call_onclick(del,delno);
 call_onclick(reset,resetno);
 call_onclick(equals,evaluate);
 call_onclick(equals,evaluate);
 call_onclick(lft_brac,dispno);
 call_onclick(rgt_brac,dispno);
 call_onclick(answer,dispans);
});

//displays the button clicked
function dispno(){
  prev_disp=prev_disp+this.innerHTML;
  $("#display").html(prev_disp);
if(ans!=undefined){
  $("#disp_ans").html("Ans="+ans);
}
if(prev_disp==""){
    $("#display").html(0);
  }
}

//backspace function
function delno(){
  if(isNaN(prev_disp)==true){
  var end=prev_disp.length-1;
  prev_disp=prev_disp.slice(0,end);
  $("#display").html(prev_disp);
}
 if((prev_disp=="")||(isNaN(prev_disp)==false)){
   resetno();
  }
}

//resets the calci display to zero
function resetno(){
  prev_disp="";
  $("#display").html(0);
  $("#disp_ans").html("");
}

//evaluates arithmetic
function evaluate(){
  $("#disp_ans").html(prev_disp+"=");
  prev_disp=prev_disp.replace("%","*0.01*");
  ans=eval(prev_disp);
  $("#display").html(ans);
  prev_disp="";
}

//displays answer
function dispans(){
  prev_disp=ans;
  $("#disp_ans").html(ans);
  $("#display").html("Ans");
}

//calls required functions on clicking of buttons
function call_onclick(div,func){
  div.addEventListener("click",func);
}
