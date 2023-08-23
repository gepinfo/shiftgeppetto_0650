import * as mongoose from 'mongoose';
import { treeentitySchema } from './models/daomodels/treeentity';
import { seedTree } from './assets/seedTree';

const treeentityModel = mongoose.model('treeentity', treeentitySchema);

export class Seed {

    constructor() {

    }

    
    public createTree() {
    seedTree.forEach((objData) => {
    treeentityModel.findOneAndUpdate({id: objData['id']}, objData, { new: true }).then((data) => {
    if(data === null || data === undefined) {
    new treeentityModel(objData).save();
    }
    })
    })
    }
        

}
