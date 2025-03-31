import illustration1 from '/assets/img/illustration/1.png';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    lightMode?: boolean;
}

const BannerV8 = ({ lightMode }: DataType) => {
    return (
        <>
            <div className="banner-style-eight-area bg-cover"
                style={{ backgroundImage: `url(${lightMode ? "/assets/img/shape/4.jpg" : "/assets/img/shape/3.jpg"})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="banner-style-eight-heading">
                                <div className="banner-title">

                                    <h2>
                                        <SplitText
                                            className="title-left split-text"
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Unicorn
                                        </SplitText>
                                    </h2>

                                    <h2 className="title-right split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-100px"
                                        >
                                            Solutions
                                        </SplitText>
                                    </h2>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="thumb">
                                <img src={illustration1} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="d-grid">
                                <h4>Agencia digital</h4>
                                <div className="right">
                                    <p>
                                   Somos una agencia de servicios de programación que se propone brindar la máxima calidad al alcance de tu bolsillo. Hemos trabajado en una variedad de industrias y tenemos soluciones para todo tipo de necesidades, ya sea que quieras actualizar un sistema existente o crear uno nuevo.
                                    </p>
                                    <Link className="btn-animation mt-10" to="/conocenos"><i className="fas fa-arrow-right" /> <span>Conoce más</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1">
                            <div className="card-style-one">
                                <div className="bottom">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={5} enableScrollSpy /></div>
    
                                            <div className="operator">años</div>
                                        </div>
                                        <span className="medium">de experiencia</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV8;