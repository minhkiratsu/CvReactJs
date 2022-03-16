import React, { Component } from 'react';
import avt from '../../assets/images/avt-images.jpg';

class Header extends Component {
    render() {
        return (
            <div className="con-header">
                <div className="header-content">
                    <h1>Cáp Minh</h1>
                    <h2>Lập trình viên Front End</h2> 
                </div>                
                <div className="avt-image">
                    <img src={avt}/>
                </div> 
                <div className="header-row"></div>                 
            </div>
        );
    }
}

export default Header;