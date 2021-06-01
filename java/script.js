// contare da 1 a 100


for( var x = 1 ; x <=100; x++){
    if (x % 3 === 0 && x % 5 === 0) {
        document.write("<br/> FizzBuzz") ;
        
    } else if(x % 5 === 0) {
        document.write("<br/> Buzz") ;
    } else if (x % 3 === 0) {
        document.write("<br/>  FIZZ" )   ; 
    } else {
        document.write("<br/>"+ x) ;
    }
          
    
}

