import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div>
                    <p>Hệ thống cưới hỏi trọn gói Trà Xanh - Hà Nội</p>
                </div>
                <header className="main-header">
                    <div>
                        <a>Cưới Hỏi Trà Xanh - Hà Nội</a>
                    </div>        
                </header>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Header);