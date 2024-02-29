const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter any number: ', (num) => {
  console.log(`You entered: ${num}`);
  rl.close();
});
