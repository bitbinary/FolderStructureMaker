import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../../models/node.model';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {
  @Input()
  treeData: NodeModel[] = [];
  @Output()
  removeChildEvent = new EventEmitter<number>();
  @Output()
  addChildEvent = new EventEmitter<[NodeModel, NodeModel]>();
  name: string = '';
  requiredFileTypes: (string | null)[] = ['folder', 'file'];
  deletableFileTypes: (string | null)[] = ['folder', 'file'];
  subTreeableFileTypes: (string | null)[] = ['folder'];
  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}
  // Set the child type for a new node- "folder", "file"
  setChildType(item: NodeModel, type: string) {
    item.setType(type);
  }
  // Saves the name of the folder/file
  saveName(node: NodeModel) {
    node.name = this.name;
    this.name = '';
  }
  // Removes the child if the user cancels the naming
  removeNode(nodes: NodeModel[], index: number) {
    nodes.splice(index, 1);
    this.removeChildEvent.emit(index);
  }
  // Creates a new child node item and invokes the function to add the new child to the specified parent
  createChild(item: NodeModel) {
    let node = new NodeModel();
    this.addChild([item, node]);
  }

  // Deletes the child node from the parent's children array
  deleteChild(item: NodeModel, index: number) {
    this.removeChildEvent.emit(index);
  }
  // Adds the node to the specified item
  addChild([item, node]: [NodeModel, NodeModel]) {
    item.children.push(node);
  }
  // Removes the node to the specified item based on the index provided
  removeChild(item: NodeModel, index: any) {
    item.children.splice(index, 1);
  }
}
