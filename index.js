function getName(node) {
  return node.name;
}

function headNode(head, list) {
  return list[`${head}`];
}

function next(node, list) {
  return list[`${node.next}`];
}

function nodeAt(index, head, list) {
  let node = list[head];
  for (let i = 0; i < index; i++) {
    node = next(node, list);
  }
  return node;
}

function addressAt(index, head, list) {
  if (index === 0) {
    return head;
  }
  let node = list[head];
  for (let i = 0; i < index - 1; i++) {
    node = next(node, list);
  }
  return node.next;
}

function indexAt(targetNode, list, head) {
  let index = 0;
  let node = list[head];
  while (node !== targetNode) {
    node = next(node, list);
    index++;
  }
  return index;
}

function insertNodeAt(index, newAddress, head, list) {
  let lastNode = nodeAt(index - 1, head, list);
  let nextNode = nodeAt(index, head, list);
  let nextNodeAddress = addressAt(index, head, list)

  lastNode.next = newAddress;
  let newNode = list[newAddress];
  newNode.next = nextNodeAddress;
}

function deleteNodeAt(index, head, list) {
  let lastNode;
  let node = list[head];
  for(let i = 0; i < index; i++) {
    lastNode = node;
    node = next(node, list)
  }
  lastNode.next = node.next
}
