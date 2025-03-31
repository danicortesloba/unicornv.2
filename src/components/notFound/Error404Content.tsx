import { Link } from "react-router-dom";

const NotFoundContent = () => {
    return (
        <>
            <div className="error-page-area default-padding text-center">
                <div className="shape-left" style={{ background: 'url(/assets/img/shape/44-left.png)' }} />
                <div className="shape-right" style={{ background: 'url(/assets/img/shape/44-right.png)' }} />
                <div className="container">
                    <div className="error-box">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>404</h1>
                                <h2>¡Oops! Parece que te perdiste en el camino.</h2>
                                <p>
                                    No te preocupes, nos pasa a todos. Te invitamos a recorrer el menú o
                                </p>
                                <Link className="btn mt-20 btn-md btn-theme" to="/">volver al inicio.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default NotFoundContent;