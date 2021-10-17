import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { IconSelectPipe } from './pipes/icon-select.pipe';
@NgModule({
  declarations: [
    FolderTreeComponent,
    PageHeaderComponent,
    PageContentComponent,
    TreeNodeComponent,
    PageFooterComponent,
    PrettyJSONPipe,
    IconSelectPipe,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [FolderTreeComponent],
})
export class FolderTreeModule {}
