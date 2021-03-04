import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        return (
            <div class="card" style={{width: this.props.width }}>
                {props.children}
                
            </div>
        );
    }
}

export default Card;