let mode="x";
function play(id){
    let squrae=document.getElementById(id);
    if(mode=="x"){
       
            squrae.innerHTML="x"
            squrae.style.color="white"
            
            mode="o"
            
    }
    else{
        squrae.innerHTML="o"
        squrae.style.color="white"
        mode="x"
        
 
    }

    for(i=0;i<square.length;i++){
        let squaretxt= square[i].innerHTML;
        for(;squaretxt!='';){
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
                

        
            }
        
       
            





        }
       






    }
 
   



   
    
 

}