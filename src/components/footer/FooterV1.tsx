import { Link } from "react-router-dom";
import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from '../social/FooterSocial';
import logo from '/assets/img/logo.png'

interface DataType {
    sectionClass?: string;
    lightMode?: boolean;
}

const FooterV1 = ({ sectionClass, lightMode }: DataType) => {
    return (
        <>
            <footer className={`${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15 pr-md-15 pr-xs-15">
                                <div >
                                    {lightMode ?
                                        <img className="footpic" src={logo} alt="Image Not Found" /> :
                                        <img  className="footpic" src={logo} alt="Image Not Found" />
                                    }
                                </div>
                                
                            </div>
                            <div className="col-lg-5 offset-lg-1 footer-item">
                            <ul className="address-list">
                                    <li>
                                        <h4>Contáctanos</h4>
                                        <p>
                                        Antonio Bellet 193 Of. 302, Providencia, RM
                                        </p>
                                    </li>
                                  
                                </ul>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <a href="mailto:unicorn@unicornsolutions.cl">unicorn@unicornsolutions.cl</a>
                                        </li>
                                        <li>
                                            <a href="tel:+56229736962">+56 2 297369621</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                
                            </div>
                            <div className="col-lg-6 text-end">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} Unicorn Solutions. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;