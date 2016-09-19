/*
  (c) Copyright AgarJs
  
  @author: Skylar Lennox
  @date: 20-09-2016
*/

if('undefined'==typeof(agarjs)) {
  window.agarjs=initializeAgarjs();
  
};

function initializeAgarjs(window) {
  var agarjs={};
  agarjs.start = function(){
    var a=1; 
    var b=1+1; 
    var c=a*b+1;
    startAgarjs(a,b,c);
    
  };
  return agarjs;
  
}(window);

function startAgarjs(A_a,B_b,C_c) {
  var cnt;
  cnt++;
  if(cnt==2){
    console.error('Agarjs Already Started');
  }else{
  console.warn('Agarjs Started');
  };
};
