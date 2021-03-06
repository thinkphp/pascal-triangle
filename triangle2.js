/*
 *
 * Adrian Statescu <mergesortv@gmail.com> <http://thinkphp.ro> <http://adrianstatescu.com>
 * Display Pascal's Triangle.
 * MIT License
 * 
 */

DOMhelp = {

       addEvent: function(elem,evType,fn,useCapture){

                 if(elem.addEventListener) {

                         elem.addEventListener(evType,fn,useCapture);

                 } else if(elem.attachEvent) {

                         var r = elem.attachEvent('on'+evType,fn);

                         return r;                          

                 } else {

                        elem['on'+evType] = fn; 
                 }
       }

  };

var solve = function() {

           //step 1  
           //declarations of the vars
           var PascalTriangle = [],
               i, 
               j, 
               x, 
               y, 
               html = '',
               $ = function(id){return document.getElementById(id);},
               rows = parseInt($('input').value)

           //step 2
           //init Matrix Pascal's Triangle
           for(i = 0; i <= rows; i++) {

                   PascalTriangle.push( [] )

                   for(j = 0; j <= rows; j++) {                   
                            
                           PascalTriangle[ i ].push(0)
                   }
           }


          //step 3     
          PascalTriangle[ 0 ][ 0 ] = 1;
 
          for(x = 1; x <= rows; ++x) {

              for(y = 0; y <= x; ++y) {

                  if( 0 == y || x == y ) PascalTriangle[ x ][ y ] = 1

                  else

                  PascalTriangle[ x ][ y ] = PascalTriangle[ x - 1][ y - 1] + PascalTriangle[ x - 1 ][ y ] 
              }
          }

          //step 4 Display the Pascal's Triangle 
          
          for(x = 0; x <= rows; ++x) {

              html += '<div class="row">'

              for(y = 0; y <= x; ++y) {

                      html += '<div class="cell">' + PascalTriangle[ x ][ y ] + '</div>'
              }             

              html += '</div>' 
          }
         

          $('container').innerHTML = html;

}

var init = function() {

        DOMhelp.addEvent(document.getElementById('solve'), 'click', solve, false); 
}; 

DOMhelp.addEvent(window,'load',init,false);