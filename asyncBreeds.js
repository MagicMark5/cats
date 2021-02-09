// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, handleData) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    error ? handleData(undefined) : handleData(data);
    // if readFile cannot find the "breed" argument as a text file then it will still call the callback with undefined
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const handleData = (data) => {
  console.log('Return Value: ', data); // console.log (do things with data) inside the callback
}


// breedDetailsFromFile('Bombay', handleData); // call the function with the callback instead!
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
// we can try to get the return value but it will be undefined because async functions dont return
module.exports = breedDetailsFromFile;