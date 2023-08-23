
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const treeentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String },
   isExpanded: { type: Boolean },
   isSelected: { type: Boolean },
   isLeaf: { type: Boolean },
   parent_id: { type: String },
   id: { type: String },
   category: { type: String }
})

const treeentityModel = mongoose.model('treeentity', treeentitySchema, 'treeentity');
export default treeentityModel;
