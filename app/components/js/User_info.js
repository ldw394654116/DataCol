/**
 * 用户信息类
 */

var User = {

    users : function(){
        return [
            {
                'org_id': 43,
                'hosp_code': 1,
                'name': '湘雅1',
                'login_name': 'xy1',
                'password': 123
            },
            {
                'org_id': 43,
                'hosp_code': 1,
                'name': '湘雅2',
                'login_name': 'xy2',
                'password': 123
            },{
                'org_id': 43,
                'hosp_code': 1,
                'name': '湘雅3',
                'login_name': 'xy3',
                'password': 123
            },
        ]
    },

    getInfo : function(login_name){
        var info = '';
        User.users().forEach(us => {
            if(us.login_name === login_name){
              info = {
                'login_name': us.login_name,
                'password': us.password,
                'org_id': us.org_id,
                'hosp_code': us.hosp_code,
                'name': us.name
              }              
            }
        });

        return info;
    }

}

export default User.getInfo