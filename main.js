const calculator = document.querySelector('.calculator');
const keys = calsulator.querySlector('.calculator__keys');

keys.addEventListener('click', e => {
  if(e.target.matches('button')) {
    // do something
  }
})