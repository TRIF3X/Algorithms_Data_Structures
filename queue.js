// Queue - First In First Out, FIFO

function Queue () { 
    // init the array to hold our queue
    let collection = [];
    // prints the queue
    this.print = () => collection;
    // push an item to the end of the queue
    this.enqueue = (item) => collection.push(item);
    // remove first item in queue
    this.dequeue = () => collection.shift();
    // shows first item in the queue
    this.front = () => collection[0];
    // return the size of the queue
    this.size = () => collection.length;
    // return true/false if the array is empty
    this.isEmpty = () => collection.length === 0 ? true:false;
}

const q = new Queue;

console.log(q.print());

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.print())

console.log(q.front())
console.log(q.size())
console.log(q.isEmpty())

q.dequeue();

console.log(q.print())