import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSeedling} from '@fortawesome/fontawesome-free-solid';
const Header = props => {
    return (
        <header>
            <div className='bck_b_dark'>
                <div className='container'> 
                    <div className='left'>
                        <div className='logo'>
                            <FontAwesomeIcon icon={faSeedling} style = {{color:'green'}} className='icon'/>
                             Seeds
                        </div>
                    </div>
                    <div className='right'>
                        <div className='top'>
                            LINKS
                        </div>
                        <div className='bottom'>
                            LINKS
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;