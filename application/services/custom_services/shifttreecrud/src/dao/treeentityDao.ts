import * as mongoose from 'mongoose';
import treeentityModel from '../models/daomodels/treeentity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class treeentityDao {
    private treeentity = treeentityModel;
    constructor() { }
    
    public async GpDelete(treeentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpDelete');

    

    
    
    
    this.treeentity.findByIdAndRemove(treeentityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(treeentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(treeentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.treeentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(treeentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.treeentity.findOneAndUpdate({ _id: treeentityData._id }, treeentityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(treeentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpUpdate');

    

    
    
    
    this.treeentity.findOneAndUpdate({ _id: treeentityData._id }, treeentityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(treeentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpGetEntityById');

    

    
    
    
    this.treeentity.findById(treeentityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpGetAllValues');

    

    
    
    
    this.treeentity.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(treeentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpCreate');

    
                        if(treeentityData.id == null || treeentityData.id == undefined || treeentityData.id == ''){
                            treeentityData['id'] = Math.random().toString(36).slice(-6);
                        }let temp = new treeentityModel(treeentityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(treeentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.treeentity.aggregate(([
                        { $match: { $and: [{ created_by: treeentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllTree(callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeentityDao.ts: GpGetAllTree');

    

    
    
    
    this.treeentity.aggregate(([ 
                    {
                        $match: {
                            parent_id: null
                        }
                    },
                    {
                        $graphLookup: {
                            from: "treeentity",
                            startWith: "$id",
                            connectFromField: "id",
                            connectToField: "parent_id",
                            depthField: "level",
                            as: "children"
                        }
                    },
                    {
                        $unwind: {
                            path: "$children",
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $sort: {
                            "children.level": -1
                        }
                    },
                    {
                        $group: {"_id":"$_id","parent_id":{"$first":"$parent_id"},"category":{"$first":"$category"},"children":{"$push":"$children"},"name":{"$first":"$name"},"email":{"$first":"$email"},"isExpanded":{"$first":"$isExpanded"},"isSelected":{"$first":"$isSelected"},"isLeaf":{"$first":"$isLeaf"},"id":{"$first":"$id"}}
                    },
                    {
                        $addFields: {
                            children: {
                                $reduce: {
                                    input: "$children",
                                    initialValue: {
                                        level: -1,
                                        presentChild: [],
                                        prevChild: []
                                    },
                                    in: {
                                        $let: {
                                            vars: {
                                                prev: {
                                                    $cond: [
                                                        {
                                                            $eq: [
                                                                "$$value.level",
                                                                "$$this.level"
                                                            ]
                                                        },
                                                        "$$value.prevChild",
                                                        "$$value.presentChild"
                                                    ]
                                                },
                                                current: {
                                                    $cond: [
                                                        {
                                                            $eq: [
                                                                "$$value.level",
                                                                "$$this.level"
                                                            ]
                                                        },
                                                        "$$value.presentChild",
                                                        []
                                                    ]
                                                }
                                            },
                                            in: {
                                                level: "$$this.level",
                                                prevChild: "$$prev",
                                                presentChild: {
                                                    $concatArrays: [
                                                        "$$current",
                                                        [
                                                            {
                                                                $mergeObjects: [
                                                                    "$$this",
                                                                    {
                                                                        children: {
                                                                            $filter: {
                                                                                input: "$$prev",
                                                                                as: "e",
                                                                                cond: {
                                                                                    $eq: [
                                                                                        "$$e.parent_id",
                                                                                        "$$this.id"
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            children: "$children.presentChild"
                        }
                    }
                ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeentityDao.ts: GpGetAllTree');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}