function PriorityQueue () {
    let collection = [];
    this.printCollection = function() {
      return collection;
    };
    this.enqueue = (item) => {

      if (this.isEmpty()) {
        collection.push(item) //check if array is empty, if so just push to array
      } else {
        let added = false;
        for (let i = 0; i < collection.length; i++) {
          if(item[1] < collection[i][1]) {
            collection.splice(i, 0, item)
            added = true;
            break;
          }
        }
        if(!added) {
          collection.push(item) //if we go through array and priority isnt greater than what is already in array then just push to the end
        }
      }

    }

    this.dequeue = () => {

      let item = collection.shift()

      return item[0];
      
    };

    this.size = () => collection.length;

    this.front = () => collection[0];

    this.isEmpty = () => {
      if(collection.length === 0) {
        return true;
      } else {
        return false;
      }
    }
}

let pq = new PriorityQueue;

pq.enqueue(['conner', 1])
pq.enqueue(['tim', 1])
pq.enqueue(['kelly', 3])
pq.enqueue(['jimmy', 2])
console.log(pq.size())
console.log(pq.front())

console.log(pq.printCollection())

pq.dequeue()
pq.dequeue()

console.log(pq.printCollection())