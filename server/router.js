Router.route('/rest/userList', function () {

    // NodeJS request object
    var request = this.request;

    // NodeJS  response object
    var response = this.response;

    // 디비에서 조회
    var rtn = {userList : Users.find().fetch()};

    this.response.end(JSON.stringify(rtn));

}, {where: 'server'});












