


function divisors(integer) {
    const numbers = [];
    if(integer>1){
      for(let i=0 ; i<=integer; i++){
        if(i!==1 && i!== integer && integer%i===0){
          numbers.push(i);
        }
      }
    }
    console.log((numbers.length===0) ? `${integer} is prime` : numbers);
    return (numbers.length===0) ? `${integer} is prime` : numbers;
};

function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };

  str = 'Hello World'

  function trString(str){
    return (str.length < 140 ) ? false : '#'+str  
  }