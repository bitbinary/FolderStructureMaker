import { TreeService } from './../../services/tree.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {
  constructor(public treeService: TreeService) {}

  ngOnInit(): void {}
  // Adds folder to the root
  // Adding folder since the button is for adding folder
  addFolder() {
    this.treeService.addToRoot('folder');
  }
  removeChild(index: any) {
    let ids = Object.keys(this.treeService.getTreeData());
    console.log(index);
    console.log(ids[index]);
    this.treeService.removeFromRoot(ids[index]);
  }
}
