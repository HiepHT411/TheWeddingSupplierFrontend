import React, { Component } from 'react';
import TwsService from '../../Services/TwsService';
import AuthService from '../AccountComponent/AuthService';

class AdminProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceProduct: [],
            newProduct: [],
            bestSellerProduct: [],
            currentUser: {}
        }


    }

    componentDidMount() {
        this.state.currentUser = AuthService.getCurrentUser();
        let user = this.state.currentUser;
        if (user == null) {
            this.props.history.push('/account/login');
        }
        else if (!user.roles.includes("ROLE_ADMIN")) {
            this.props.history.push('/user/cart');
        }

        TwsService.getProducts("service").then(res => {
            this.setState({ serviceProduct: res.data });
        });
        TwsService.getProducts("new").then(res => {
            this.setState({ newProduct: res.data });
        });
        TwsService.getProducts("bestSeller").then(res => {
            this.setState({ bestSellerProduct: res.data });
        })
    }
    addProduct(id) {
        this.props.history.push('/adminEditProduct/_add');
    }
    editProduct(id) {
        this.props.history.push(`/adminAddOrEditProduct/${id}`)
    }
    deleteProduct(id) {
        TwsService.deleteProduct(id).then(() => {
            this.setState({
                serviceProduct: this.state.serviceProduct.filter(product => product.id !== id),
                newProduct: this.state.newProduct.filter(product => product.id !== id),
                bestSellerProduct: this.state.bestSellerProduct.filter(product => product.id !== id)
            });
        });
    }

    render() {
        return (
            <div class="main">
                <div class="container">
                    <div>
                        <button onClick={() => this.addProduct()} class="btn btn-success">Thêm mới</button>
                    </div>
                    <h3 class="center">Các dịch vụ</h3>
                    <div className="row-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr class="title-row">
                                    <th class="">Tiêu đề</th>
                                    <th class="">Ngày viết</th>
                                    <th class="content-column">Nội dung</th>
                                    <th class="price-column">Giá</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody className="content">
                                {
                                    this.state.serviceProduct.map(
                                        product =>
                                            <tr key={product.id}>
                                                <td>{product.title}</td>
                                                <td>{product.date}</td>
                                                <td>{product.content.substr(0, 333) + "..."}</td>
                                                <td>{product.price}</td>
                                                <td>

                                                    <button onClick={() => this.editProduct(product.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>Sửa</button>
                                                    <button onClick={() => this.deleteProduct(product.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Xóa</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <h3 class="center">Sản phẩm mới</h3>
                    <div className="row-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr class="title-row">
                                    <th class="">Tiêu đề</th>
                                    <th class="">Ngày viết</th>
                                    <th class="content-column">Nội dung</th>
                                    <th class="price-column">Giá</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody className="content">
                                {
                                    this.state.newProduct.map(
                                        product =>
                                            <tr key={product.id}>
                                                <td>{product.title}</td>
                                                <td>{product.date}</td>
                                                <td>{product.content.substr(0, 333) + "..."}</td>
                                                <td>{product.price}</td>

                                                <td>

                                                    <button onClick={() => this.editProduct(product.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>Sửa</button>
                                                    <button onClick={() => this.deleteProduct(product.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Xóa</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>


                    <h3 class="center">Sản phẩm bán chạy</h3>
                    <div className="row-table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr class="title-row">
                                    <th class="">Tiêu đề</th>
                                    <th class="">Ngày viết</th>
                                    <th class="content-column">Nội dung</th>
                                    <th class="price-column">Giá</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>

                            <tbody className="content">
                                {
                                    this.state.bestSellerProduct.map(
                                        product =>
                                            <tr key={product.id}>
                                                <td>{product.title}</td>
                                                <td>{product.date}</td>
                                                <td>{product.content.substr(0, 333) + "..."}</td>
                                                <td>{product.price}</td>
                                                <td>                                                    
                                                    <button onClick={() => this.editProduct(product.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>Sửa</button>
                                                    <button onClick={() => this.deleteProduct(product.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Xóa</button>
                                                </td>
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

export default AdminProduct;