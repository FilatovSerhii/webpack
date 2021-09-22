import { printProfile } from './profile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

const data = [1, 2, [3, 4, [5, 6]]];

const result = data.flat(2);
console.log(result);

Promise.resolve().finally();
