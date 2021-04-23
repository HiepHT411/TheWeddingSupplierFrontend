import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';

class AdminFeedback extends Component {
    constructor(props){
        super(props)

        this.state = {
            feedback: []
        }
    }

    componentDidMount(){
        let user = AuthService.getCurrentUser();
        if(user == null){
            this.props.history.push('/account/login');
        }
        else if(!user.roles.includes("ROLE_ADMIN")){
            this.props.history.push('/user/cart');
        }
        TwsService.getFeedback().then((res)=>{
            this.setState({feedback: res.data});
        });
    }

    render() {
        return (
            <div class="main">
                <div class= "container">
                    <h2>User Feedback</h2>
                <div className = "row-table">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr class = "title">
                                <th class = "">Tên</th>
                                <th class = "">Email</th>
                                <th class = "">Số điện thoại</th>
                                <th class = "">Ghi chú</th>
                            </tr>
                        </thead>

                        <tbody className="content">
                            {
                                this.state.feedback.map(
                                    fb =>
                                    <tr key={fb.id}>
                                        <td>{fb.name}</td>
                                        <td>{fb.email}</td>
                                        <td>{fb.phone}</td>
                                        <td>{fb.note}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                </div>
                
            </div>
        );
    }
}

export default AdminFeedback;