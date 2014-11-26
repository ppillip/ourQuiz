

Template.userList.helpers({
    listName2 : function(str,str2){
        return str + "사용자목록 " + str2;
    },
    listName : function(){
        return "사용자목록";
    },
    list : function(){

        var arr = [
             {no:4,name:"박승현",email:"ppillip@gmail.com"}
            ,{no:3,name:"전지현",email:"jjh@gmail.com"}
            ,{no:1,name:"김완선",email:"kws@gmail.com"}
            ,{no:2,name:"카라",email:"kara@gmail.com"}
        ];
        arr = _.sortBy(arr,function(obj){ return obj.no;});
        return arr;
    }
});

Template.userList.events({

});

Template.userList.rendered = function(){

};


Template.userListItem.helpers({

});

Template.userListItem.events({
    'click button' : function(evt,tmpl){

        // this 는 each 에서 밀어 넣어준 item 이 됩니다.
        alert(this.no + this.name + this.email);

        // evt 는 현재 이벤트를 받은 object 입니다.
        // 클릭후 숨김니다.
        $(evt.target).hide();

        // tmpl 은 each 에 의해 생성된 현재 tmplate html 오브젝트 입니다.
        // findAll 함수로 tmpl안에 오브젝트를 검색 할수 있습니다.
        var tdArr = tmpl.findAll("td");
        console.log('td들',tdArr);

    }
});

Template.userListItem.rendered = function(){

};







