
const reverseStr = (clothes) => {
  clothes = clothes.split('').reverse().join('')
  return clothes
}
reverseStr('boots')
console.log(reverseStr('boots'))

const isPalindrome = (Palind) => {
  if (Palind === reverseStr(Palind)) {
    return true
  } else {
    return false
  }
}

isPalindrome('umbrella')
console.log(isPalindrome('umbrella'))