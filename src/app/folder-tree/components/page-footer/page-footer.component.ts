import { TreeObject } from './../../interfaces/tree-object';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  @Input()
  treeJSON: TreeObject = {};
  constructor() {}

  ngOnInit(): void {}
}
