import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';

class ProductDetail extends Component {

    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        TwsService.getDetailProduct(this.state.id).then(res=>{
            this.setState({product: res.data});
        });
    }
    render() {
        return (
            <div class="main">
                <hr/>
                <section class="container-fluid">
                    <div class="row">
                        <div className="col-md-9">
                        <div class="col-md-7 text-left">
                            <h3>{this.state.product.title}</h3>
                            <p>Giá: {this.state.product.price}</p>
                           
                            <div  dangerouslySetInnerHTML={{ __html: this.state.product.content}}/>

                        </div>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default ProductDetail;