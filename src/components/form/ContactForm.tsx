/* eslint-disable no-unused-vars */

import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactForm = () => {

    const handleForm: FormEventHandler = async (event)  => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        try {
            const send = await emailjs
            .sendForm(
              import.meta.env.VITE_MAIL_SERVICE_ID,
              import.meta.env.VITE_FORM_ID,
              form,
              import.meta.env.VITE_REACT_APP_PUBLIC_KEY
            )
            if(send.status == 200) {
              emailjs
              .sendForm(
                import.meta.env.VITE_MAIL_SERVICE_ID,
                import.meta.env.VITE_AUTOREPLY_ID,
                form,
                import.meta.env.VITE_REACT_APP_PUBLIC_KEY
              )
        form.reset()
        toast.success("¡Gracias por tu mensaje!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="contact-form contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Nombre" type="text" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control no-arrows" id="phone" name="phone" placeholder="Teléfono" type="number" required autoComplete="off" />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tu mensaje" required autoComplete="off" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                            <i className="fa fa-paper-plane" /> Ponte en contacto
                        </button>
                    </div>
                </div>

                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>
            </form>
        </>
    );
};

export default ContactForm;