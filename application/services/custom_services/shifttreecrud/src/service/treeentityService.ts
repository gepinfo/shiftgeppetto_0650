import { Request, Response } from 'express';
import {treeentityDao} from '../dao/treeentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let treeentity = new treeentityDao();

export class treeentityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpDelete')
     let  treeentityId = req.params.id;
     treeentity.GpDelete(treeentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpSearch')
     let  treeentityData = req.query;
     treeentity.GpSearch(treeentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpSearchForUpdate')
     let  treeentityData = req.body;
     treeentity.GpSearchForUpdate(treeentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpUpdate')
     let  treeentityData = req.body;
     treeentity.GpUpdate(treeentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpGetEntityById')
     let  treeentityId = req.params.id;
     treeentity.GpGetEntityById(treeentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpGetAllValues')
     
     treeentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpCreate')
     let  treeentityData = req.body;
     treeentity.GpCreate(treeentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpGetNounCreatedBy')
     let  treeentityData = { created_by: req.query.createdby };
     treeentity.GpGetNounCreatedBy(treeentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
public  GpGetAllTree(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeentityService.ts: GpGetAllTree')
     
     treeentity.GpGetAllTree((response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeentityService.ts: GpGetAllTree')
         callback(response);
         });
    }
    
    
    
    
}