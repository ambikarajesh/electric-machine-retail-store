import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass, faPhone, faEnvelope, faClock, faSeedling} from '@fortawesome/fontawesome-free-solid';
const Footer = () => {
    return (
        <footer>
           <div className='bck_b_dark'>
               <div className='container'>
                    <div className='logo'>
                        <FontAwesomeIcon icon={faSeedling} style = {{color:'green'}} className='icon'/>
                        Seeds
                    </div>
                    <div className='wrapper'>
                        <div className='left'>
                            <h1>Contact Information</h1>
                            <div className='business_nfo'>
                                <div className='tag'>
                                    <FontAwesomeIcon icon={faCompass} className='icon' />
                                    <div className='nfo'>
                                        <div>Address</div>
                                        <div>Los Angeles-91360</div>
                                    </div>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon icon={faPhone} className='icon' />
                                    <div className='nfo'>
                                        <div>Phone</div>
                                        <div>(890)384-3454</div>
                                    </div>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                                    <div className='nfo'>
                                        <div>Email</div>
                                        <div>seeds@gmail.com</div>
                                    </div>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon icon={faClock} className='icon' />
                                    <div className='nfo'>
                                        <div>Time</div>
                                        <div>mon-sun:9am to 8pm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='left'>
                            <h1>Be The First To Know</h1>
                            <div>
                                <p>
                                    Get the all the latest information on events, sales and offers. you miss out all.
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </footer>
    );
};

export default Footer;