import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './search.less'


class Search extends Component {
    render() {
        return (
            <div className='sear'>
              Search Text
            </div>
        );
    }
}



ReactDOM.render(
    <Search></Search>,
    document.getElementById('root')
)