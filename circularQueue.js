// Circular Queue, a queue that writes to the end of a collection then begins to overwrite itself from the beginning
// Can be used for streaming media, where once the queue is full, new media data begins to overwrite old data

class CircularQueue {
    constructor(size) {
 
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
 
      while (size > 0) {
         this.queue.push(null);
         size--;
      }
 
    }
 
    print() {
      return this.queue;
    }
 
 
    enqueue(item) {
    // as you enque an item, write counter + 1 until it hits the end and should come back to beginning
    // write pointer can not go past the read pointer
    // return item enqueue if it is succesfull otherwise return null
    if(this.queue[this.write] === null) {
        this.queue[this.write] = item;
        this.write += 1;
        // note: if the first number in modulos operator is less than the 2nd number, it'll always result in itself
        // ex: 1 % 5 = 1 || 2 % 5 = 2  || 3 % 5 = 3
        this.write %= this.queue.length
        return item;
    }
      

    return null;
    }
 
    dequeue() {
    // as you dequeue an item, read counter + 1 until it hits the end and should come back to the beginning
    // read counter can not advance past unwritten data
    // return item dequeued, otherwise return null
    if (this.queue[this.read] !== null) {
        let item = this.queue[this.read]
        this.queue[this.read] = null;
        this.read += 1;
        // note: if the first number in modulos operator is less than the 2nd number, it'll always result in itself
        // ex: 1 % 5 = 1 || 2 % 5 = 2  || 3 % 5 = 3
        this.read %= this.queue.length
        return item
    }
    return null;
    }
 }
 
 const c = new CircularQueue(5);
 console.log(c.print())
 c.enqueue(1)
 console.log(c.print())
 c.enqueue(2)
 console.log(c.print())
 c.dequeue()
 console.log(c.print())
 c.dequeue()
 console.log(c.print())
 c.enqueue(3)
 console.log(c.print())
 c.enqueue(4)
 console.log(c.print())
 c.enqueue(5)
 console.log(c.print())
 c.enqueue(6)
 console.log(c.print())
 c.enqueue(7)
 console.log(c.print())
