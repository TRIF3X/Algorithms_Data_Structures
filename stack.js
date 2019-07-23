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