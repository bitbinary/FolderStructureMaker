import { TreeObject } from './interfaces/tree-object';
import { TreeService } from './services/tree.service';
import { IconService } from './services/icon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss'],
})
export class FolderTreeComponent implements OnInit {
  constructor(public treeService: TreeService) {}

  ngOnInit(): void {}
}
