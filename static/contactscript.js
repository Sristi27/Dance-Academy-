var sub=document.getElementById("cntctform");
var inputs=document.getElementsByClassName("myInput");
sub.addEventListener("submit",function(){

    if (formValidation()) {
      alert("Thank you for your time! Your details have been submitted!");
      
    }
  });

  function formValidation() {
    flag = true;
    
    //name
    if (inputs[0].value == "" || inputs[1].value =="" || inputs[2].value=="" || inputs[3].value=="" ) {
      alert("Please fill in the Details!");
      flag = false;
    }
return flag;
}