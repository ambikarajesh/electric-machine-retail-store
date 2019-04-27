import React, { Component } from 'react';
import Header from '../../components/Header-Footer/Header';
import Footer from '../../components/Header-Footer/Footer';
class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='page_container'>
                    {this.props.children}
                </div> 
                <Footer/>              
            </div>
        );
    }
}

export default Layout;