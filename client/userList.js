
Template.userList.helpers({
    listName2 : function(str,str2){
        return str + "사용자목록 " + str2;
    },
    listName : function(){
        return "사용자목록";
    },
    list : function(){

        return Users.find( {} , {sort:{no:1}} );

    }


});

Template.userList.events({

});

Template.userList.rendered = function(){

    Meteor.subscribe("getAllUsers");

};








