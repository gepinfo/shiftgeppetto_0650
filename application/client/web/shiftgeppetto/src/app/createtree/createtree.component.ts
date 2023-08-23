import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatetreeService } from './createtree.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-createtree',
  templateUrl: './createtree.component.html',
  styleUrls: ['./createtree.component.scss'],
})

export class CreatetreeComponent implements OnInit {
    public treeentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        parent_id: '',
        id: '',
    }




    constructor (
        private createtreeService: CreatetreeService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.treeentity.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
                this.treeentity.parent_id = params['parent_id']
            });


    
    }
    GpCreate() {
        this.createtreeService.GpCreate(this.treeentity).subscribe((data:any) => {
            this.treeentity.name = ''
 	 	this.treeentity.email = ''
 	 	this.treeentity.parent_id = ''
 	 	this.treeentity.id = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}