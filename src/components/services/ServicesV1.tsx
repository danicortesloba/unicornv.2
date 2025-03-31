import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json"
import SplitText from "../animation/SplitText.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
    lightMode?: boolean
}

const ServicesV1 = ({ hasTitle, sectionClass, lightMode }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>

                {/* Service Title */}
                {hasTitle &&
                    <div className="service-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                    <div className="site-heading">
                                        <h4 className="sub-title">Nuestros servicios</h4>
                                        <h2 className="title split-text">
                                            <SplitText
                                                delay={40}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                Encuentra lo que necesitas
                                            </SplitText>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="services-style-one-items">
                        <div className="row">
                            {ServicesV1Data.map((service) => (
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 single-item"
                                    key={service.id}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`services-style-one-item service-height ${activeServiceId === service.id ? 'active' : ''}`}>
                                        <div className="icon">
                                            {lightMode ?
                                                <img src={`/assets/img/icon/${service.iconLight}`} alt="Image Not Found" width={75} height={60} /> :
                                                <img src={`/assets/img/icon/${service.icon}`} alt="Image Not Found" width={75} height={60} />
                                            }
                                        </div>
                                        <h4>
                                            <Link to={`/service-details/${service.id}`}>{service.title}</Link>
                                        </h4>
                                        <p>{service.text}</p>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
         <div className="container col-12 ask ">
            <div className="row">
                <h5>Pregunta por las siguientes opciones</h5>
            </div>
            <div className="row">
            
                <div className="col-xl-3 col-lg-3 col-md-12 ">
                    <ul>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Mantenimiento fijo o variable según lo que necesites</li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Cambio de dominio</li>
                        

                    </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 ">
                    <ul>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Actualizamos tu página o te enseñamos a hacerlo</li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Cambio de hosting</li>
                    </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 ">
                    <ul>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Creación de chatbots con personalidad acorde a tu empresa</li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Inteligencia artificial para facilitar experiencia </li>
                    </ul>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 ">
                    <ul>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Análisis de experiencia de usuario</li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /> Agregar opciones de idioma</li>
                    </ul>
                </div>
            </div>
        </div>
            </div>
       
        </>
    );
};

export default ServicesV1;