class Node{
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insertAtHead(data){
    this.head = new Node(data, this.head);
    this.size++;
  }

  insert(data){
    let newNode = new Node(data);
    if(this.head === null){this.head = newNode;}
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  print(){
    let current = this.head;
    while(current){
      console.log(current.value);
      current = current.next;
    }
  }
  
}

let ll = new LinkedList();
ll.insert(12);
ll.insert(9);
ll.insert(7);
ll.insert(3);
ll.print();