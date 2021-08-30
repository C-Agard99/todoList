Template.addTasks.events({
    'click .js-save'(event){
        //grabs data from the html page
        let pubTask = $('#task').val();
        let pubDate = $('#taskDate').val();

        //reset each input box
        let formGood = true;
        $("#task").removeClass("invalidWarn");
        $("#taskDate").removeClass("invalidWarn");

        if (pubTask == ""){
            $("#task").addClass("invalidWarn");
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
                "pDate":pubDate
            });
        }
    }
});