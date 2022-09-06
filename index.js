function getCodeBoxElement(index) {
    return document.getElementById("codeBoxTwo" + index);
    }
    function onKeyUpEvent(index, event) {
    try {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 6) {
        getCodeBoxElement(index + 1).focus();
      } else {
        getCodeBoxElement(index).blur();
      }
    }
    if (eventCode === 8 && index !== 1) {
      getCodeBoxElement(index - 1).focus();
    }
    } catch (error) {
    console.log(error);
    }
    }
    function onFocusEvent(index) {
    try {
    for (item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (!currentElement.value) {
        currentElement.focus();
        break;
      }
    }
    } catch (error) {
    console.log(error);
    }
    }
    
 
 function myfirstform(){
     let name =  document.myform.name.value;
     let password =  document.myform.password.value;
     if(name == null || name == ""){
         let nameError =  document.querySelector('.nameerror');
         nameError.style.display = "block";
         return false;
     }else if(password.length<6){
         let passwordError =  document.querySelector('.passwordError');
         passwordError.style.display = "block";
         return false;
     }
    }
 
    let showPassWord = document.getElementsByClassName('eyes_')[0];
    let password =  document.querySelector('input[type="password"]');
    showPassWord.addEventListener('click', (show)=> {
     showPassWord.classList.toggle('show')
     let eye = document.querySelector('.fa-eye');
     if(password.type === "password"){
         password.type = "text";
         
     }else{
         password.type = "password";
     }
    })
 
 
 // animated Heading 
 
 // let Animated = document.getElementsByClassName('animated_heading');
 // let i;
 // for(i=0; i < Animated.length; i++){
     
 // 	Animated[i].addEventListener('click', function(){
 // 		var current = document.getElementsByClassName('animated');
 // 		current[0].className = current[0].className.replace(" animated", "");
 // 		this.className += " animated";
 // 	})
 // }
 onload = function startAnimation() {
     var frames = document.getElementsByClassName("animated_heading");
     var frameCount = frames.length;
     var i = 0;
     setInterval(function () {
         frames[i % frameCount].classList.remove('animated');
         frames[++i % frameCount].classList.add('animated')
     }, 3000);
 }
 

//  Array fandamental Type 



// let ArrayF =  ["Array One", "Array Two", "Array Three", "Array Five", "Array Six"];
// let ArrayCount = ArrayF.length
// let i = 0;
// setInterval(function(){
// //let d = ArrayF[i % ArrayCount];
// let total = ArrayF[i++ % ArrayCount]
// //console.log(d)
// console.log(total)
// }, 2000)


//add input tag here 


let inputTagContainer = document.getElementsByClassName('inputTag')[0];
let inputTag = document.getElementById('input_Tag');
let valI = inputTag.value
let span = document.createElement("span");
span.innerHTML = valI;
span.style.cssText = "padding:10px; background:red;border-radius:2px;";
inputTagContainer.prepend(span);