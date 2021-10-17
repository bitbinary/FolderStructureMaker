import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderTreeRoutingModule } from './folder-tree-routing.module';
import { FolderTreeComponent } from './folder-tree/folder-tree.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [FolderTreeComponent, PageHeaderComponent],
  imports: [CommonModule, FolderTreeRoutingModule],
  exports: [FolderTreeComponent],
})
export class FolderTreeModule {}
