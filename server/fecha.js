
const data = new Date();


console.log(data.toISOString().replace("T"," ").replace("Z","").slice(0,19))

console.log(data.toISOString().replace("T"," ").replace("Z","").indexOf("."));