class Node{
  constructor(value){
    this.value=value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);

    if(this.root === null){this.root=newNode;}
    else{this.insertNode(this.root, newNode);}
    
  }

  insertNode(node, newNode){

    if(newNode.value < node.value){
      if(node.left === null){node.left = newNode;}
      else{this.insertNode(node.left, newNode)}
    }

    if(newNode.value > node.value){
      if(node.right === null){node.right = newNode;}
      else{this.insertNode(node.right, newNode)}
    }
    
  }

  findMinNode(node = this.root){
    if(node.left === null){return node;}
    else{return this.findMinNode(node.left)}
  }

  findMaxNode(node = this.root){
    if(node.right === null){return node;}
    else{return this.findMaxNode(node.right);}
  }

  inOrder(node = this.root){

    if(node !== null){
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }

  }

  preOrder(node = this.root){
    if(node !== null){
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root){
    if(node !== null){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value)
    }
  }
  
}


let myBst = new BST();

myBst.insert(12)
myBst.insert(8)
myBst.insert(5)
myBst.insert(3)
console.log(myBst)
console.log(myBst.findMaxNode());
console.log(myBst.findMinNode());
console.log(myBst.inOrder())
console.log(myBst.preOrder())
console.log(myBst.postOrder())



