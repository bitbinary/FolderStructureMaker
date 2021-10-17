import { Injectable } from '@angular/core';
import { TreeObject } from '../interfaces/tree-object';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root',
})
export class TreeServiceService {
  treeData: TreeObject = {};
  rootAutoIncrementerId = 0;
  constructor() {}
  addToRoot(): void {
    let node = new NodeModel();
    node.setId(String(this.rootAutoIncrementerId));
    node.setType('folder');
    this.treeData[this.rootAutoIncrementerId] = node;
    ++this.rootAutoIncrementerId;
  }
  getTreeData() {
    return this.treeData;
  }
  getTreeDataArray(treeData: TreeObject | undefined): NodeModel[] {
    var result: NodeModel[] = [];
    var obj = treeData;
    for (var prop in obj) {
      if (!obj.hasOwnProperty(prop)) continue;
      result.push(obj[prop]);
    }
    return result;
  }
  removeFromRoot(id: string) {
    delete this.treeData[id];
  }
}
