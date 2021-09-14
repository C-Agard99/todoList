import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');

const normal = FlowRouter.group();
const loggedIn = FlowRouter.group({
    triggersEnter: [
        function(context, redirect){
            if (!Meteor.userId()){
                if (context.route.name != 'index')
                    redirect('index');
            }
        }
    ]
});

// Create index route
normal.route('/', {
    name: 'index',
    action() {
        // Do something here
        // After route is followed
        BlazeLayout.render('app_layout', {nav: 'nav', header: 'signInForm'});
    },
    // waitOn(){
    //     return Meteor.subscribe('noUser');
    // }
});

normal.route('/our_tasks', {
  name: 'tasks',
  action() {
        // Do something here
        // After route is followed
        BlazeLayout.render('app_layout', {nav: 'nav', main: 'ourTasks'});
  },
   waitOn(){
       return Meteor.subscribe('taskData');
   }
});

FlowRouter.route('/add_tasks',{
    action() {
        BlazeLayout.render('app_layout', {nav: 'nav', main: 'addTasks'});
    }
});