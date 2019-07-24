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

    // this method will check for the element in our collection, if we have the element it will remove it and return true, otherwise it will return false
    this.remove = (element) => {
        if(this.has(element) === true) {
         let index = collection.indexOf(element)  
         collection.splice(index, 1)
         return true;
        } else {
            return false;
        }
    }

    // returns the size of the collection
    this.size = () => collection.length;

    // combines the two sets
    this.union = (new_set) => {
        for(let i = 0; i < new_set.length; i++) {
            if(this.has(new_set[i]) === false) {
                collection.push(new_set[i])
            }
        }
     } 
    
}

const set = new Set()

set.add('a')
set.add('b')
set.add('c')
console.log(set.values())
set.remove('b')
console.log(set.values())
set.union(['a', 'b', 'd', 'e'])
console.log(set.values())

