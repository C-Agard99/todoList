tasksdb = new Mongo.Collection('userTasks');

tasksdb.allow({
    insert: function (userId, doc){
        if (userId)
            return true;
        return false;    
    }
});