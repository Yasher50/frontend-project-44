/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default welcome;
