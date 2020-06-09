
 function multiplicarValores(){
    var KWH =  document.getElementById("KWH").value;
    var Valor= document.getElementById("Valor").value;
    var adicional = 0;
    var result = 0;
    KWH=KWH.replace(",", ".");
    Valor= Valor.replace(",", ".");
     
     KWH = Number(KWH);
     Valor = Number(Valor);
   

    if ( KWH >= 100) {
       
        adicional = 0.25; 

    }
    if (KWH >= 200 ) {
         
        adicional = 0.50;        
     }
        console.log((KWH *Valor)*adicional)
   
    var result = KWH * Valor +(KWH *Valor)*adicional;
    alert(result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}   


     

