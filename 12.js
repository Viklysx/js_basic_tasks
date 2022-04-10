const ancestry = require('./file_with_db.js');

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}
  
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

function ageDifference(db) {
    let ages = [];
    db.forEach(key => {
        if (key.mother in byName) {
            ages.push(key.born - byName[key.mother].born)
        }
    })
    return average(ages).toFixed(1)
}

console.log(ageDifference(ancestry))
  
  // → 31.2