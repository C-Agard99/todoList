Template.addTasks.events({
    'click .js-save'(event){
        //grabs data from the html page
        let pubTask = $('#taskType').val();
        let pubDate = $('#taskDate').val();

        //reset each input box
        let formGood = true;
        $("#taskType").removeClass("invalidWarn");
        $("#taskDate").removeClass("invalidWarn");

        if (pubTask == ""){
            $("#taskType").addClass("invalidWarn");
            formGood = false;
        }
        if (pubDate == ""){
            $("#taskDate").addClass("invalidWarn");
            formGood = false;
        }
        if (formGood == true){
            
            //save data to the collection 
            tasksdb.insert({
                "pTask":pubTask,
                "pDate":pubDate,
                "pOwn":Meteor.userId(),
                "pName":Meteor.user().username
            });

            //clear input boxes
            $('#taskType').val("");
            $('#taskDate').val("");
        }
    },
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