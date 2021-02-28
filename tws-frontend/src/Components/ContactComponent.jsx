import React, { Component } from 'react';
import TwsService from '../Services/TwsService';

class ContactComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            note: ''
        }
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeEmailHandler = (event)=>{
        this.setState({email: event.target.value});
    }
    changePhoneHandler=(event)=>{
        this.setState({phone: event.target.value});
    }
    changeNoteHandler=(event)=>{
        this.setState({note: event.target.value});
    }

    saveToDatabase = (event) => {
        event.preventDefault();
        let feedback = {name: this.state.name, email: this.state.email, phone: this.state.phone, note: this.state.note};
        console.log('feedback => '+ JSON.stringify(feedback));
        TwsService.saveFeedback(feedback).then((res) =>{
            // this.state.name= '',
            // this.state.email= '',
            // this.state.phone= '',
            // this.state.note= ''
            this.props.history.push('/contact');
        } );
    }
    render() {
        return (
            <div class="main">
                <div class="container-fluid row">
                    <div class="col-md-6">
                        <h4>GGoogle map</h4>
                    </div>

                    <div class="col-md-6 ">
                        <h5>Liên hệ với chúng tôi</h5>
                        <p>Địa chỉ:</p>
                        <p>Trụ sở: Hanoi - Vietnam</p>
                        <p>Email:</p>
                        <p>weddingplanner@ftws.com</p>
                        <p>Điện thoại:</p>
                        <p>0912345678</p>
                        <p>Thời gian làm việc:</p>
                        <p>Cả tuần từ 8:00 - 22:00</p>

                        <h5>Gửi thắc mắc</h5>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <input placeholder="Tên của bạn" name="name" class="form-control"
                                    value = {this.state.name} onChange={this.changeNameHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Email của bạn" name="name" class="form-control"
                                    value = {this.state.name} onChange={this.changeEmailHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Số điện thoại của bạn" name="name" class="form-control"
                                    value = {this.state.name} onChange={this.changePhoneHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Nội dung" name="name" class="form-control"
                                    value = {this.state.name} onChange={this.changeNoteHandler}></input>
                                </div>


                                <button className="btn btn-danger" onClick={this.saveToDatabase}>Gửi cho chúng tôi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactComponent;