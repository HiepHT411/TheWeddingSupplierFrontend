import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './searchBar.css';

export default class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch=(e)=>{
        this.setState({value: e.target.value});
        clearTimeout(this.timeout);

        this.timeout = setTimeout( ()=>{
            this.props.callback(this.state.value);
        }, 500);
    }
    render() {
        return (
            <div class = "tws-searchbar">
                <div class="tws-searchbar-content">
                    <FontAwesome className="tws-fa-search" name = "search" size="1x"/>
                    <input  className="tws-searchbar-input" placeholder="Search..." onChange={this.doSearch} value={this.state.value}/>
                </div>
            </div>
        )
    }
}
