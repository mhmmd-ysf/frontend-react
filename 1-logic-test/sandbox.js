// map, sort, reduce, find, filter

function isEqual(str1, str2) {
  str1 = str1.split('')//.sort().join('')
  str2 = str2.split('')//.sort().join('')
  for(let i = 0; i < str1.length; i++) {
    for(let j = i + 1; j < str1.length; j++) {
      if(str1[i] > str1[j]) {
        [ str1[i], str1[j] ] = [ str1[j], str1[i] ]
      }
    }
  }
  for(let i = 0; i < str2.length; i++) {
    for(let j = i + 1; j < str2.length; j++) {
      if(str2[i] > str2[j]) {
        [ str2[i], str2[j] ] = [ str2[j], str2[i] ]
      }
    }
  }
  return str1.join('') === str2.join('')
}

function anagram(arr) {
  let result = [ [arr[0]] ]
  arr.shift()

  for (let i = 0; i < arr.length; i++) {
    let added = false
    for(let j = 0; j < result.length; j++) {
      if(result[j].some(item => isEqual(item, arr[i]))) {
        result[j].push(arr[i])
        added = true
      }
    }
    if(!added) {
      result.push([arr[i]])
    }
  }
  return result
}

let ana1 = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
// mau memastikan test case soal kata 'kia' muncul lebih dulu dari 'makan'
// tapi expected resultnya harus 'makan' dulu dari 'kia'?
console.log(anagram(ana1))