import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';

class AdminFeedback extends Component {
    constructor(props){
        super(props)

        this.state = {
            feedback: []
        }
    }

    componentDidMount(){
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
                                <th class = "">Name</th>
                                <th class = "">Email</th>
                                <th class = "">Phone</th>
                                <th class = "">Note</th>
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