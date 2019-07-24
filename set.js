// A set is like an array without duplicate values

function Set() {
    // the var collection will hold our set
    const collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = (element) => {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = () => collection;

    // this method will check for the element in our collection, if we already have the element return false else push the element to the collection and return true
    this.add = (element) => {
        if(this.has(element) === true) {
          return false;
        } else {
          collection.push(element)
          return true;
        }
    }
    
}

const set = new Set()

set.add('hello')
set.add('there')
set.add('hello')
console.log(set.values())