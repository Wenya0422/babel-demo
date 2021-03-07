let a = "bable"

const test = async () => {
  a = "wenya bable test"
  console.log('a',a)
}

window.getWindowFun = function () {
  return new Promise(resolve => {
    let Symbol = "Hello World";
    alert('window')
    resolve(Symbol);
  })
}