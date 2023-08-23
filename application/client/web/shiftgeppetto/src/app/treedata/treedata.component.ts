import { Component, OnInit, ViewChild } from '@angular/core';
import { TreedataService } from './treedata.service';
import { Router } from '@angular/router';

        import { UpdeltreeService } from '../updeltree/updeltree.service';
        import { NzTreeComponent, NzTreeNode } from 'ng-zorro-antd/tree';


    
    interface FlatNode {
        expandable: boolean;
        key: string;
        level: number;
        name: string;
    }
   


@Component({
  selector: 'app-treedata',
  templateUrl: './treedata.component.html',
  styleUrls: ['./treedata.component.scss'],
})

export class TreedataComponent implements OnInit {
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


    
    @ViewChild('nzTree') nzTree: NzTreeComponent | any;
    nodes: any = [];
    visible:boolean = false;
    hasChild = (_: number, node: FlatNode): boolean => node.expandable;
    hasNoContent = (_: number, node: FlatNode): boolean => node.name === '';
   


    constructor (
        private updeltreeService: UpdeltreeService,
        private treedataService: TreedataService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.treeentity.created_by = sessionStorage.getItem('email') || ''; 
        

        this.GpGetAllTree();

    
    }
    GpGetAllTree() {
        this.treedataService.GpGetAllTree().subscribe((data:any) => {
            this.nodes = this.hyrdateTree(data, [], this.createNode)
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpTreeRoute(node:any) {
        this.router.navigate(['./createtree'], { queryParams: { 'parent_id': node.origin.key } })
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./updeltree'], { queryParams: { 'id': queryId } })
    }

        
        openFolder(data: any): void {
            if (data instanceof NzTreeNode) {
                data.isExpanded = !data.isExpanded;
                } else {
                const node = data.node;
                if (node) {
                    node.isExpanded = !node.isExpanded;
                }
            }
        }

        nodeClicked(event: any) {
            if (!event.node.isSelectable) return
            console.log(event.node)
        }

        hyrdateTree(orgData: any, savedData: any, createNodeFn: any) {
            const childConvert = (nodes: any) => {
              const nodes1: any = []
              for (const i of nodes) {
                nodes1.push({
                  key: i.id, /** key */
                  title: i.name, /** title */
                  object: i, /** entity object */
                  /** set isLeaft to hide expand arrow if no children */
                  isLeaf: (i.children === undefined || (i.children && i.children.length === 0)),
                  //recursively apply
                  children: (i.children && i.children.length !== 0) ? childConvert(i.children) : null,
                  ...createNodeFn(i, savedData)
                })
              }
              return nodes1
            }
            return childConvert(orgData).map((x: any) => new NzTreeNode(x))
          }
        
        createNode(node: any, savedData: any) {
            return {
                selectable: (node._id !== null),
            }
        }
   
        
                delete(node: any) {
                    if (node.parentNode) {
                        const index = node.getParentNode().children.findIndex((x: any) => x.key === node.key)
                        node.getParentNode().children.splice(index, 1);
                        node.parentNode.isLeaf = (node.parentNode.children === undefined || (node.parentNode.children && node.parentNode.children.length === 0))
                    } else {
                        /** is a root node,find in master nodes and remove */
                        const index = this.nodes.findIndex((x: any) => x.key === node.key)
                        this.nodes.splice(index, 1);
                    }
                    this.updeltreeService.GpDelete(node.origin.object._id).subscribe((data:any)=> {
                        this.ngOnInit();
                    });
                }
            

}