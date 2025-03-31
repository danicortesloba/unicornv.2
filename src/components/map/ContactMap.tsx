const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9099084330783!2d-70.6202385246625!3d-33.42559307339938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf63c7234f59%3A0x554ca7069c7a7ccc!2sAntonio%20Bellet%20193%2C%207500000%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1743425816825!5m2!1ses-419!2scl" width="600" height="450"   loading="lazy" ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;