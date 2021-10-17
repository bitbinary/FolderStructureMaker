import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FolderTreeRoutingModule } from './folder-tree-routing.module';
//Components
import { FolderTreeComponent } from './folder-tree.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageContentComponent } from './components/page-content/page-content.component';
//External components
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PrettyJSONPipe } from './pipes/pretty-json.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FolderTreeComponent,
    PageHeaderComponent,
    PageContentComponent,
    TreeNodeComponent,
    PageFooterComponent,
    PrettyJSONPipe,
  ],
  imports: [
    CommonModule,
    FolderTreeRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [FolderTreeComponent],
})
export class FolderTreeModule {}
