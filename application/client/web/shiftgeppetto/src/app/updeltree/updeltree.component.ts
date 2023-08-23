import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdeltreeService } from './updeltree.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-updeltree',
  templateUrl: './updeltree.component.html',
  styleUrls: ['./updeltree.component.scss'],
})

export class UpdeltreeComponent implements OnInit {
    queryId: any;
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
        private updeltreeService: UpdeltreeService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.treeentity.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GpGetEntityById();
    
    }
    GpUpdate() {
        this.updeltreeService.GpUpdate(this.treeentity).subscribe((data:any) => {
            this.treeentity.name = ''
 	 	this.treeentity.email = ''
 	 	this.treeentity.parent_id = ''
 	 	this.treeentity.id = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updeltreeService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetEntityById() {
        this.updeltreeService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.treeentity = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}