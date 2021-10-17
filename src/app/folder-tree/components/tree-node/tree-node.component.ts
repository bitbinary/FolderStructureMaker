import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
  // Set the child type for a new node- "folder", "file"
  setChildType(item: NodeModel, type: string) {
    item.setType(type);
  }
}
