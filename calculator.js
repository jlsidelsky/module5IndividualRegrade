let operator = -1;
let firstVal;
let secondVal;
window.onload = function() {
    document.getElementById("result").innerHTML = "<h3> Result: </h3>";

    let radio = document.getElementsByName("operator");
    for(let i =0; i < radio.length; i++){
        radio[i].addEventListener("change", checkRadio);
    }
    document.getElementById("firstValInput").addEventListener("keyup", checkInput1, false);
    document.getElementById("secondValInput").addEventListener("keyup", checkInput2, false);
  };
function checkInput1(){
    firstVal = parseFloat(document.getElementById("firstValInput").value);
    displayVal();

}
function checkInput2(){
    secondVal = parseFloat(document.getElementById("secondValInput").value);
    displayVal();
}
function displayVal(){  
    if(isNaN(firstVal) || isNaN(secondVal)){
      return;
    }
    let result = 0;
    if(operator != -1){
        switch(operator){
            case 1:
                result = firstVal + secondVal;
                break;
            case 2:
                result = firstVal - secondVal;
                break;
            case 3:
                result = firstVal * secondVal;
                break;
            case 4:
                result = firstVal / secondVal;
                break;
            default:
                result = 0;                    
        }
        document.getElementById("result").innerHTML = "<h3> Result: " + result + "</h3>";
        // alert("Result: " + result);

    }
}

function checkRadio(){

    let radio = document.getElementsByName("operator");
    let selected = null;
    for(let i=0; i<radio.length; i++){
        if(radio[i].checked){
            selected = radio[i].value;  
            break;            
        }    
    }
    if(selected == null) selected = -1;
    operator = parseInt(selected);
    displayVal();

}
        
