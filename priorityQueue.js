// Priority Queue, a queue with additional information that determines the priority of the item

function PriorityQueue () {
  // init our queue
  this.collection = [];

  // print queue
  this.printCollection = () => this.collection;

  // enqueue method for prioritiy given an array with the first index being the item and second being the priority
  // ex. ['conner', 2]
  this.enqueue = (item) => {
    // if queue is empty, push to the end
    if (this.isEmpty()) {
      this.collection.push(item);
    } else {
      // if not find where item priority is less than priority already in queue
      let added = false;
      for(let i = 0; i < this.collection.length; i++) {
        if (item[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, item)
          added = true;
          break;
        }
      }
      if(!added) {
        // if item is of lowest priority, push to the end
        this.collection.push(item)
      }
    }
  }

  // remove first item in queue, return the item without the priority
  this.dequeue = () => {
    const item = this.collection.shift();
    return item[0]
  }

  // return the size of the queue
  this.size = () => this.collection.length;

  // return the first item in the queue
  this.front = () => this.collection[0];

  // return wether the queue is empty or not
  this.isEmpty = () => this.collection.length === 0 ? true:false;
}

const pq = new PriorityQueue;

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