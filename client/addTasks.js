import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
Template.addTasks.events({
    'click .js-save'(event){
        //grabs data from the html page
        let pubTask = $('#taskTitle').val();
        let pubDate = $('#taskDate').val();
        let pubType = $('#taskType').val();
        
        //reset each input box
        let formGood = true;
        let isTaskPrivate = false;

        $("#taskTitle").removeClass("invalidWarn");
        $("#taskDate").removeClass("invalidWarn");

        if (pubTask == ""){
            $("#taskTitle").addClass("invalidWarn");
            formGood = false;
        }
        if (pubDate == ""){
            $("#taskDate").addClass("invalidWarn");
            formGood = false;
        }
        if (pubType == "private"){
            isTaskPrivate = true;
        }
        if (formGood == true){
            
            //save data to the collection 
            tasksdb.insert({
                "pTask":pubTask,
                "pDate":pubDate,
                "pOwn":Meteor.userId(),
                "pName":Meteor.user().username,
                "isPrivate":isTaskPrivate
            });

            //clear input boxes
            $('#taskTitle').val("");
            $('#taskDate').val("");
            FlowRouter.redirect('our_tasks');
        }
    }
        
});