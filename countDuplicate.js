function duplicateCount(text){
    let texto = text.toUpperCase().split('');
    let letters = [];
    let duplicate = 0;
    texto.forEach(function(x){
      letters[x] = (letters[x] || 0) + 1;
    });
    for(l in letters){
      if(letters[l]>1)
      {
        duplicate++;
      }
    }
    return duplicate;
  }

  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }