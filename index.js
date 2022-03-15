let simple = document.getElementById('simple');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for(item of buttons){
    item.addEventListener('click',(e)=>{
    buttonText = e.target.innerText;
    console.log('button text is ', buttonText);
if(buttonText=='X'){
    buttonText = '*';
    screenValue += buttonText;
    simple.value = screenValue;
}else if(buttonText=='C'){
    screenValue = '';
    simple.value = screenValue;
}
else if(buttonText=='='){
simple.value=eval(screenValue);
}else{
    screenValue += buttonText;
    simple.value = screenValue;
}

})

}
