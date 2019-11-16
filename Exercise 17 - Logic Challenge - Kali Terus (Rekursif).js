function kaliTerusRekursif(angka) {
    var str = angka.toString();
    var result = 1;
    for(i=0 ; i<str.length ; i++){
      result *= parseInt(str[i])
    }
    if(result < 10){
      return result
    }else{
      return kaliTerusRekursif(result)
    }  
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6