tasksdb = new Mongo.Collection('userTasks');

tasksdb.allow({
    insert: function (userId, doc){
        if (userId)
            return true;
        return false;    
    },
    remove: function (userId, doc){
       // if (userId == doc.pOwn)
            return true;
       // return false; 
    },
    update: function (userId, doc){
        //if (userId == doc.pOwn)
            return true;
        //return false;
    },
});