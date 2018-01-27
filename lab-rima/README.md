#### Stack and Queue

## Stack

Stack is implemented with a singly linked list.

* PUSH method: When you add a new value to a stack, it insert a new node to the head of linked list.
* POP method: When you take a data from a stack, it takes the head of linked list and set the head to a node next to the head
* PEEK method: When you want to only see a data on top of the stack, it returns a data only.


## Queue

Queue is implemented with a singly linked list.

* ENQUEUE method: When you add a new value to a queue, it insert a new node to the tail of linked list.
* DEQUEUE method: When you take a data from a queue, it takes the head of linked list and set the head to a node next to the head


## How to install
Clone this repo on your computer
```
git clone <clone ssh of this repo>
```

Run the test
```
npm test
```

Usage
```
const Stack = require('<path_to_repo>/lib/stack');
const Queue = require('<path_to_repo>/lib/queue');

// create each new instance
let s = new Stack();
let q = new Queue();

// call method
s.push(1);
s.push(2);
s.pop(); // this returns 2
s.peek(); // this returns 1

q.enqueue(1);
q.enqueue(2);
q.dequeue(); // this returns 1

