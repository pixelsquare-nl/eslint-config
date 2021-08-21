const msg = 'HAID';

const log = msg => console.log(msg);

log(msg);

const doesItWork = () => {
  if(msg === 'HAID') {
    return true;
  }
  return false;
};

console.log(doesItWork);
