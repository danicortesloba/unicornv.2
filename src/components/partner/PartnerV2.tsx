import thumb15 from "/assets/img/programming.jpg";
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    sectionClass?: string
}

const PartnerV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`partner-style-two-area default-padding overflow-hidden blurry-shape-right ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-110 pr-md-15 pr-xs-15">
                            <div className="partner-two-thumb">
                                <img src={thumb15} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="brand-style-two-items">
                                <h4 className="sub-title">Nuestra misión</h4>
                                <h2 className="title">
                                    <SplitText
                                        delay={100}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Nuestra misión.
                                    </SplitText>
                                </h2>
                                <p>
                                Unicorn Solutions nace con el propósito de ayudar a las pequeñas y medianas empresas a tener una presencia en el mundo digital acorde a las tendencias actuales de su industria. También queremos ayudar a que su trabajo sea más eficiente a través de aplicaciones de diversa índole que sean fáciles de usar y personalizadas a cada caso.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV2;