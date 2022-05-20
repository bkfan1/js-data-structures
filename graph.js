class Graph{
  constructor(){
    this.nodes = {};
    this.isDirected = false;
  }

  addNode(value){
    this.nodes[value] = [];
  }

  removeNode(node){
    let neighbors = this.nodes[node];

    for(let neighbor of neighbors){
      let neighborEdges = this.nodes[neighbor];
      this.getIndexAndRemoveItem(node, neighborEdges);
      
    }
    
    delete this.nodes[node];
  }

  addEdge(src, destiny){
    
    if(this.isDirected){
      this.nodes[src].push(destiny);
      return;
    }

    this.nodes[src].push(destiny);
    this.nodes[destiny].push(src);
    
  }

  removeEdge(src, destiny){
    this.getIndexAndRemoveItem(destiny, this.nodes[src]);
    this.getIndexAndRemoveItem(src, this.nodes[destiny]);
  }

  getIndexAndRemoveItem(item, array){
    const index = array.indexOf(item);
    array.splice(index, 1);
  }


  getNodes(){
    return this.nodes;
  }

}

let myGraph = new Graph();
//myGraph.isDirected = true;
myGraph.addNode("A")
myGraph.addNode("B")
myGraph.addNode("C")
myGraph.addNode("D")

myGraph.addEdge('A','C')
myGraph.addEdge('B','D')

myGraph.removeEdge("A","C")

console.log(myGraph.getNodes())


myGraph.removeNode('A')
console.log(myGraph.getNodes())

