module.exports = function toReadable (number) {
  if (number == 0) return "zero";
  
  let numberStr = String(number);
  let numberStrLength  = numberStr.length;
  let result = [];

  numberStr = (numberStrLength == 1) ? `00${numberStr}` : (numberStrLength == 2) ? `0${numberStr}` : numberStr;

  oneNineteen = x => ["zero","one","two","three","four","five","six","seven","eight","nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"][x];
  twentyNinety = x => ["zero", "zero", "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"][x];

  let first = numberStr[0];
  let second = numberStr[1];
  let third = numberStr[2];

  if (first != 0) {
    result.push(`${oneNineteen(+first)} hundred`);
  }

  if (second != 1 && second != 0) {
    result.push(`${twentyNinety(+second)}`);
    if (third != 0 && second != 1) {
      result.push(`${oneNineteen(+third)}`);
    }
  } else if (second == 1) {
    let tenth = second.concat(third);
    result.push(`${oneNineteen(+tenth)}`);
  } else if (second == 0 && third != 0) {
    result.push(`${oneNineteen(+third)}`);
  }

  return result.join(' ');
}
