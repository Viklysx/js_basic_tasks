const ancestry = require('./file_with_db.js');

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function century(person) {
    return Math.ceil(person.died / 100);
}

function ageOfCenturies() {
    let byCenturies = {};
    let ages;
    ancestry.forEach(function(person) {
        let centuryPerson = century(person)
        ages = [];
        // if (centuryPerson in byCenturies) {
        //     byCenturies[centuryPerson].push(person.died - person.born);
        // }
        // else {
        //     byCenturies[centuryPerson] = [person.died - person.born];
        // }
        ancestry.forEach(function(personDetails) {
            let centuryPersonDetails = century(personDetails)       
            if (centuryPerson === centuryPersonDetails) ages.push(personDetails.died - personDetails.born)
        });
        (ages.length !== 1) ? (byCenturies[centuryPerson] = average(ages).toFixed(1)) : (byCenturies[centuryPerson] = average(ages))
    });
    return byCenturies
}

function groupBy(array, groupFunction) {
    let groups = {};
    let ages;
    array.forEach(function(person) {
        let centuryPerson = groupFunction(person)
        ages = [];
        array.forEach(function(personDetails) {
            let centuryPersonDetails = groupFunction(personDetails)       
            if (centuryPerson === centuryPersonDetails) ages.push(personDetails.died - personDetails.born)
        });
        groups[centuryPerson] = ages;
    });
    return groups
}

console.log(ageOfCenturies())

// console.log(groupBy(ancestry, century))

  // → 16: 43.5
  //   17: 51.2
  //   18: 52.8
  //   19: 54.8
  //   20: 84.7
  //   21: 94