import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div class="main">
                <div class="layout-account">
                    <div class="container-fuild">
                        <div class="row">
                            <div class="col-md-6 col-xs-12 wrap-box-heading-account">
                                <div class="header-page">
                                    <h1>Login</h1>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12 wrap-box-content-account">
                                <div id="customer-login">
                                    <div id="login" class="userbox" style={{display: 'block'}}>

                                    </div>
                                    <div id="recover-password" class="userbox" style={{display: 'none'}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="./showHide.js">
	
</script>
                
            </div>
        )
    }
}
