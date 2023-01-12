module.exports = function toReadable (number) {
  let vocabulary = {
    "00" : "",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
    "10" : "ten",
    "11" : "eleven",
    "12" : "twelve",
    "13" : "thirteen",
    "14" : "fourteen",
    "15" : "fifteen",
    "16" : "sixteen",
    "17" : "seventeen",
    "18" : "eighteen",
    "19" : "nineteen",
    "20" : "twenty",
    "30" : "thirty",
    "40" : "forty",
    "50" : "fifty",
    "60" : "sixty",
    "70" : "seventy",
    "80" : "eighty",
    "90" : "ninety",
    hundred : "hundred"
  }
  let numberStr = number.toString();
  let arr = numberStr.split('');
  if (number < 21){
    return vocabulary.numberStr;
  } else {
    if (arr.length == 2){
        let dozen = arr[0] + '0';
        let units = arr[1];
        return vocabulary[dozen] + " " + vocabulary[units];
    } else {
        if (arr[2] == '0'){
            let hundreds = arr[0];
            let dozen = arr[1] + '0';
            let units = arr[2];
            return vocabulary[hundreds] + " " + vocabulary.hundred + " " + vocabulary[dozen];
        } else if (arr[1] == '1'){
            let hundreds = arr[0];
            let dozen = arr[1] + arr[2];
            return vocabulary[hundreds] + " " + vocabulary.hundred + " " + vocabulary[dozen];
        } else {
        let hundreds = arr[0];
        let dozen = arr[1] + '0';
        let units = arr[2];
        return (vocabulary[hundreds] + " " + vocabulary.hundred + " " + vocabulary[dozen] + " " + vocabulary[units]).split('  ').join(' ');
        }
    }
  }
}
