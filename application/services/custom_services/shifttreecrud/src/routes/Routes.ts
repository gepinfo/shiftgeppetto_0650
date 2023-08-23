import { Request, Response, NextFunction } from "express";
import { treeentityController } from '../controller/treeentityController';


export class Routes {
    private treeentity: treeentityController = new treeentityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/treeentity/:id').delete(this.treeentity.GpDelete);
app.route('/treeentity/get/search').get(this.treeentity.GpSearch);
app.route('/treeentity/get/update').put(this.treeentity.GpSearchForUpdate);
app.route('/treeentity').put(this.treeentity.GpUpdate);
app.route('/treeentity/:id').get(this.treeentity.GpGetEntityById);
app.route('/treeentity').get(this.treeentity.GpGetAllValues);
app.route('/treeentity').post(this.treeentity.GpCreate);
app.route('/treeentity/userid/created_by').get(this.treeentity.GpGetNounCreatedBy);
app.route('/treeentity/get/tree').get(this.treeentity.GpGetAllTree);
     }

}