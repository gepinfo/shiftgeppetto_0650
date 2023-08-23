
export interface treeentity 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   email: { type: String },
   isExpanded: { type: Boolean },
   isSelected: { type: Boolean },
   isLeaf: { type: Boolean },
   parent_id: { type: String },
   id: { type: String },
   category: { type: String }
}



