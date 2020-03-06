function choice (arr){ 
let randomInd = Math.floor(Math.random() * arr.length)
return arr[randomInd]
}

export {choice};
