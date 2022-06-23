function toReadable (number) {
  let numberStr = String(number);
  let numberStrLength  = numberStr.length;
  let result = '';

  if (numberStrLength === 3) {
    let first = numberStr[0];
    let second = numberStr[1];
    let third = numberStr[2];

    oneNine = x => ["zero","one","two","three","four","five","six","seven","eight","nine"][x];

    result = oneNine(+first);


  }
}

console.log(toReadable(967));