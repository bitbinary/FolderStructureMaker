import { NodeItem } from './../interfaces/node-item';
import { Injectable } from '@angular/core';
import { TreeObject } from '../interfaces/tree-object';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  treeData: TreeObject = {};
  rootAutoIncrementerId = 0;
  constructor() {}
  // add the element to the root of the tree
  addToRoot(type: NodeItem['filetype']): void {
    let node = new NodeModel();
    node.setId(String(this.rootAutoIncrementerId));
    node.setType(type);
    this.treeData[this.rootAutoIncrementerId] = node;
    ++this.rootAutoIncrementerId;
  }
  // collects the current tree data as an Object
  getTreeData() {
    return this.treeData;
  }
  // collects the current tree data as an Array: Used for initialising the tree formation
  getTreeDataArray(treeData: TreeObject | undefined): NodeModel[] {
    var result: NodeModel[] = [];
    var obj = treeData;
    for (var prop in obj) {
      if (!obj.hasOwnProperty(prop)) continue;
      result.push(obj[prop]);
    }
    return result;
  }
  // removes element from the root
  removeFromRoot(id: string) {
    delete this.treeData[id];
  }
}
