import ContactForm from "../form/ContactForm";
import SocialShareV2 from "../social/SocialShareV2";

interface DataType {
    sectionClass?: string
}

const ContactV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`contact-area overflow-hidden relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="contact-style-one-items">
                        <div className="row">
                            <div className="col-tact-stye-one col-lg-4">
                                <div className="contact-style-one-info">
                                    <ul className="contact-address">
                                        <li>
                                            <a className="phone-link" href="tel:+56 2 29736962"><i className="fas fa-user-headset" /> +56 2 29736962</a>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <h4>Dirección</h4>
                                                <p>
                                                Antonio Bellet 193 Of. 302 <br /> Providencia, RM
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <h4>Correo</h4>
                                                <a href="mailto:unicorn@unicornsolutions.cl">unicorn@unicornsolutions.cl</a>
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-tact-stye-one col-lg-7 offset-lg-1">
                                <div className="contact-form-style-one">
                                    <h4 className="sub-title">¿Tienes preguntas?</h4>
                                    <h2 className="title">Envíanos un mensaje</h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;