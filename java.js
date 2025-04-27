let square1=document.getElementById("square1")
let square2=document.getElementById("square2")
let square3=document.getElementById("square3")
let square4=document.getElementById("square4")
let square5=document.getElementById("square5")
let square6=document.getElementById("square6")
let square7=document.getElementById("square7")
let square8=document.getElementById("square8")
let square9=document.getElementById("square9")

square = document.querySelectorAll(".square");
let ttle=document.getElementById("title")

let mode='o'

function play(id){
    let squrae=document.getElementById(id);
    
    if(mode=="x"){
            squrae.innerHTML="x"
            squrae.style.color="white" 
            ttle.innerHTML=''
            mode="o"
    }
    else{
        squrae.innerHTML="o"
        squrae.style.color="red"
        mode="x"
 
    }
    if(square1.innerHTML===square2.innerHTML && square2.innerHTML===square3.innerHTML 
        
    ){
        square1.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square2.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square3.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square1.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);
         


        

    } else if( square4.innerHTML==square5.innerHTML && square5.innerHTML==square6.innerHTML){
        square4.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square5.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square6.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square4.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);
        

    }else if (square7.innerHTML==square8.innerHTML && square8.innerHTML==square9.innerHTML ){
        square7.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square8.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square9.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square7.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);

    }else if(square1.innerHTML==square5.innerHTML && square5.innerHTML==square9.innerHTML){
        square1.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square5.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square9.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square1.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);


    }else if(square3.innerHTML==square5.innerHTML && square5.innerHTML==square7.innerHTML){

        square3.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square5.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square7.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square3.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);


    }else if(square1.innerHTML==square4.innerHTML && square4.innerHTML==square7.innerHTML){
        square1.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square4.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square7.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square1.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);


    }else if(square2.innerHTML==square5.innerHTML && square5.innerHTML==square8.innerHTML){
        square2.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square5.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square8.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square2.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);


    }else if(square3.innerHTML==square6.innerHTML && square6.innerHTML==square9.innerHTML){
        square3.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square6.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        square9.style.cssText=`
        background-color: black;
        text-decoration:line-through
        
        `
        let squaretext=square3.innerHTML;
        ttle.innerHTML=`
        ${squaretext} wins


        `
        setTimeout(function(){
            window.location.reload();
         }, 3000);



    }
    






}












    