import React from 'react'
require('../css/Login.css');

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <main className='login_main'>
            <h3>数据质控登录页面</h3>
            <fieldset className='login_fieldset'>                
                <legend>用户身份</legend>
                <select className='login_select'>
                    <option className='login_option'>湘雅1</option>
                    <option className='login_option'>湘雅2</option>
                    <option className='login_option'>湘雅3</option>
                    <option className='login_option'>湘雅4</option>
                </select>
            </fieldset>
            <fieldset className='login_fieldset'>                
                <legend>密码</legend>
                <input className='login_input' type='password'/>
                <button className='login_button'>登录</button>
            </fieldset>
        </main>
        );
    }
}

export default Login