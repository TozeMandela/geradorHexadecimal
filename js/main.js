((doc, win) => {
    'use strict';
    var $div = doc.querySelector('[data-js="div"]');
    var arr = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    var hexD =[];

    for(var i = 0; i <= 5; i++){
        var aux=Math.floor(Math.random() * (15 - 0)) + 0;
        hexD.push(arr[aux]);
    }
    
    $div.style.backgroundColor = `#${hexD.join('')}`;
    $div.innerHTML = `#${hexD.join('')}`;

})(document, window);