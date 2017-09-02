
/*
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);

  });
}

getTempPromise('Philadelphia').then(function (temp) {

    console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});
*/

//

function addPromise (a, b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Your entries were not numbers and therefore could not be added');
    }
  });
}

addPromise('a', 10).then(function (result){
  console.log('success', result);
}, function (err) {
  console.log('error', err);
});
