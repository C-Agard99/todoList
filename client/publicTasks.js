Template.ourTasks.helpers({
    theTasks(){
        return tasksdb.find({});
    }
});

Template.ourTasks.events({
    'click .js-delete'(event){
        let myID = this._id;
        $('#confirmID').val(myID);
        $('#confirmModal').modal('show');
    },
    'click .js-confirmDel'(event){
        let delID = $('#confirmID').val();
        $('#confirmModal').modal('hide');
            tasksdb.remove({_id: delID});
    }

});