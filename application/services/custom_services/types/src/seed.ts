import * as mongoose from 'mongoose';
import { treeentitySchema } from './models/daomodels/treeentity';
import { seedTree } from './assets/seedTree';
import * as mongoose from 'mongoose';
import { typesSchema } from './models/daomodels/types';

const typesModel = mongoose.model('types', typesSchema);

export class Seed {

    constructor() {

    }

    
    public createTree() {
    seedTree.forEach((objData) => {
    typesModel.findOneAndUpdate({id: objData['id']}, objData, { new: true }).then((data) => {
    if(data === null || data === undefined) {
    new typesModel(objData).save();
    }
    })
    })
    }
        

}
