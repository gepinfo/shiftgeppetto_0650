import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreedataComponent } from './treedata.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        NzTreeModule,
        NzIconModule,
        RouterModule.forChild([
            { path: '', component: TreedataComponent },
        ])
    ],
    declarations: [
        TreedataComponent,
    ]
})
export class TreedataModule { }