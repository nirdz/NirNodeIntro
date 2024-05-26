const fs = require('fs');

// The third parameter is a callback function that will be called with the file data (and the error)
fs.readFile('./myFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("This will be logged first");

/**
Alternatively, you can use the synchronous version:

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
*/

/*
You can also use the promise-based method offered by the fs/promises module:
const fs = require('fs/promises');

async function example() {
    try {
      const data = await fs.readFile('./myFile.txt', { encoding: 'utf8' });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
example();
*/
