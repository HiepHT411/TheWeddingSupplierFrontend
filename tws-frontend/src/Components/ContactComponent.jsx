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
        this.changeNameHandler = this.changeNameHandler.bind(this);
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
        TwsService.saveFeedback(feedback).then((res)=>{
            this.setState({
                name: '',
                email: '',
                phone: '',
                note: ''
            });
            
        });
    }
    render() {
        return (
            <div class="main contact">
                <div class="container-fluid row">
                    <div class="col-md-6">
                        <h4>GGoogle map</h4>
                        {/* <iframe 
                        src="https://www.google.com/maps/embed/v1/place?key=&q=" 
                        width="100%" height="80%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">

                        </iframe> */}
                    </div>

                    <div class="col-md-6 ">
                        <h3>Liên hệ với chúng tôi</h3>
                        <br/>
                        <div class="box-info-contact text-left">
                        <p>Địa chỉ:</p>
                        <strong>Trụ sở: Hanoi - Vietnam</strong>
                        <p>Email:</p>
                        <strong>weddingplanner@ftws.com</strong>
                        <p>Điện thoại:</p>
                        <strong>0912345678</strong>
                        <p>Thời gian làm việc:</p>
                        <strong>Cả tuần từ 8:00 - 22:00</strong>
                        </div>
                        <br/><br/>
                        <div class="box-send-contact">
                        <div class="card-body">
                            <h3>Gửi thắc mắc</h3>
                            <form>
                                <div class="form-group">
                                    <input placeholder="Tên của bạn" name="name" class="form-control"
                                    value = {this.state.name} onChange={this.changeNameHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Email của bạn" name="email" class="form-control"
                                    value = {this.state.email} onChange={this.changeEmailHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Số điện thoại của bạn" name="phone" class="form-control"
                                    value = {this.state.phone} onChange={this.changePhoneHandler}></input>
                                </div>
                                <div class="form-group">
                                    <input placeholder="Nội dung" name="note" class="form-control"
                                    value = {this.state.note} onChange={this.changeNoteHandler}></input>
                                </div>


                                <button className="btn btn-danger" onClick={this.saveToDatabase}>Gửi cho chúng tôi</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default ContactComponent;