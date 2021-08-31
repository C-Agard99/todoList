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
            $('#addModal').modal('hide');
        }
    }
        
});