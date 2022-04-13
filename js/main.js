((doc, win) => {
    'use strict';
    var $div = doc.querySelector('[data-js="div"]');
    var $btn = doc.querySelectorAll('button');
    var numerosHex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var hexD =[];

    $btn[0].addEventListener('click',geradorHexadecimal,false);
    $btn[1].addEventListener('click',refresh,false);

    
   function gerarN(arrayGuardar, numerosHex){ 
       for(var i = 0; i <= 5; i++){
            var aux=Math.floor(Math.random() * (16 - 0)) + 0;
            arrayGuardar.push(numerosHex[aux]);
         }
         return arrayGuardar;
    }

    function isBlack(arrayVerificar){ 
        return arrayVerificar.every((value)=>{
            return value===0;
        });
    }
    function exibindo(array){
        $div.innerHTML = '';
        $div.innerHTML = `#${array.join('')}`;
        $div.style.backgroundColor = `#${array.join('')}`;
    }

   function geradorHexadecimal(e){ 
        var aux = gerarN(hexD, numerosHex); 
        if(isBlack(aux))
            $div.style.color = 'white'; 
        exibindo(aux)
    }
    function refresh(){
        win.location.reload();
    }

})(document, window);