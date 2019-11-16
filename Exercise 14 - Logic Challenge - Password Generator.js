function changeVocals (str) {
    let cv = ''
    var vok = 'aiueo'
    var vokup = vok.toUpperCase()
    var abjadlow = 'abcdefghijklmnopqrstuvwxyz'
    var abjadup = abjadlow.toUpperCase()
    for(i=0 ; i<str.length ; i++){
      if(str[i] == ' '){
        cv += ' '
      }else if(vok.includes(str[i])){
        cv += abjadlow[abjadlow.indexOf(str[i])+1]
      }else if(vokup.includes(str[i])){
        cv += abjadup[abjadup.indexOf(str[i])+1]
      }else{
        cv += str[i]
      }
    }
    return cv
  }
  
  function reverseWord (str) {
    var reverse = '';
    for(j=str.length-1 ; j>=0 ; j--){
      reverse += str[j]
    }
    return reverse;
  }
  
  function setLowerUpperCase (str) {
    var bk = '';
    for(k=0 ; k<str.length ; k++){
      if(str[k]==str[k].toLowerCase()){
        bk += str[k].toUpperCase();
      }else{
        bk += str[k].toLowerCase();
      }
    }
    return bk
  }
  
  function removeSpaces (str) {
    return str.replace(' ', '')
  }
  
  function passwordGenerator (name) {
    if(name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
    return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'