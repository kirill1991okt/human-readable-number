module.exports = function toReadable (number) {
    let topTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  
    let otherNumber = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
    let numberString = number.toString();
  
    if (number === 0){
        return 'zero'
    }
  
    if (number < 0){
        throw new Error('Wrong number')
    }
  
    if (number < 20){
        return topTwenty[number]
    }
  
    if (number < 100){
        if(numberString[1] === '0'){
            return otherNumber[numberString[0]]
        } 
        else
            return otherNumber[numberString[0]] + ' ' + topTwenty[numberString[1]];
    }
  
    if (number > 99){
        if (numberString[1] === '0' && numberString[2] === '0'){
            return topTwenty[numberString[0]] + ' hundred'
        } 
        else if (numberString[1] === '0'){
            return topTwenty[numberString[0]] + ' hundred ' + topTwenty[numberString[2]]
        } 
        else if(numberString[2] === '0'){
            if(numberString[1] === '1'){
                return topTwenty[numberString[0]] + ' hundred ' + 'ten'
            }
          return topTwenty[numberString[0]] + ' hundred ' + otherNumber[numberString[1]]  
        }
        else if(Number(numberString[1]+numberString[2]) < 20){
                return topTwenty[numberString[0]] + ' hundred ' + topTwenty[numberString[1]+numberString[2]]
            }
  
        else {
            return topTwenty[numberString[0]] + ' hundred ' + otherNumber[numberString[1]] + ' ' + topTwenty[numberString[2]]
          }
        }
    }
  
