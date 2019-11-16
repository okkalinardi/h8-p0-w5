function sorting(arrNumber) {
    var temp = 0;
    for (i = 0; i < arrNumber.length; i++) {
        for (j = 0; j < (arrNumber.length - 1) - i; j++) {
            if (arrNumber[j] < arrNumber[j + 1]) {
                temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    var total = 0;
    for (k = 0; k < arrNumber.length; k++) {
        if (sorting(arrNumber)[0] == arrNumber[k]) {
            total += 1
        }
    }
    return total
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if (arrNumber == 0) {
        return "''"
    } else {
        return 'angka paling besar adalah ' + listSort[0] + ' dan jumlah kemunculan sebanyak ' + countHighest + ' kali';
    }
}


console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''