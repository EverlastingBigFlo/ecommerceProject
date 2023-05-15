
    // to use autotyping

    // declaring global variables
let sentence=['Save more with coupons and up to 70% off!']
let sectionNew=document.getElementById('display');
let arrsentence=0;
let arrWords=0;


function autotype() {
    letterword=sentence[arrsentence][arrWords]
    sectionNew.innerHTML+= letterword  
    arrWords++
    setTimeout (function(){
        if (sentence[arrsentence][arrWords]) {
            autotype()   
        } 
        else{
            clear()
        }

    },100);
}
autotype() 
    
  function clear() {
    if (sectionNew.innerHTML=='') {
        if (sentence[arrsentence+1]) {
            arrsentence++
            arrWords=0;
            autotype()
            
        }
        else{
            arrsentence=0
            arrWords=0
            autotype()
        }
        return;
        
    }
    sectionNew.innerHTML=sectionNew.innerHTML.slice(0,-1)
    setTimeout(function() {
        clear()
        
    },100)
   
    
  }
  
//   autotyping end
