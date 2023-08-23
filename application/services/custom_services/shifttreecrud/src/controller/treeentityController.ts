import { Request, Response } from 'express';
import { treeentityService } from '../service/treeentityService';
import { CustomLogger } from '../config/Logger'
let treeentity = new treeentityService();

export class treeentityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpGetNounCreatedBy');
    })}
public GpGetAllTree(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeentity.GpGetAllTree(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeentityController.ts: GpGetAllTree');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeentityController.ts: GpGetAllTree');
    })}


}