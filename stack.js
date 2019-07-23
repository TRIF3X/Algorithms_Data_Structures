// Stack - First In Last Out, FILO

function Stack() { 
    // intialize our stack
    let collection = [];
    // prints our current stack
    this.print = () => collection;
    // push an item to the top of the stack
    this.push = (item) => collection.push(item);
    // remove item on top of stack
    this.pop = () => collection.pop();
    // check was item is at the bottom of the stack
    this.peek = () => collection[0];
    // return true if the stack is empty
    this.isEmpty = () => collection.length === 0 ? true:false;
    // clear out the stack
    this.clear = () => collection = [];
}

const stack = new Stack();

stack.push(10)
stack.push(8)
stack.push(5)

console.log(stack.print())

stack.pop()
console.log(stack.peek())
console.log(stack.isEmpty())

console.log(stack.print())
stack.clear()
console.log(stack.isEmpty())