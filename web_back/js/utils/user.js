var user = {
    login:function(userName, password,callback){
        $.post(
            'http://localhost:8000/admin/login', {
                user_name: userName,
                password: password
            },
            function (res) {
                res就是响应体
                callback(res);
            })
    },

    logout:function(callback){
        $.post('http://localhost:8000/admin/logout',function(res){
            callback(res)
        })
    }
};