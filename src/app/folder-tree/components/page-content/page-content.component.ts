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
  addFolder() {
    this.treeService.addToRoot();
  }
  removeChild(index: any) {
    let ids = Object.keys(this.treeService.getTreeData());
    console.log(index);
    console.log(ids[index]);
    this.treeService.removeFromRoot(ids[index]);
  }
}
