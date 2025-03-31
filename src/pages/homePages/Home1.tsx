import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import BannerV8 from "../../components/banner/BannerV8";
import DarkClass from "../../components/classes/DarkClass";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";


const Home1 = () => {
    return (
        <>
            <Helmet>
                <title>Unicorn Solutions</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV1 />
                <BannerV8 />
                <AboutV6 />
                <FooterV1 />
                <DarkClass />
            </div>
        </>
    );
};

export default Home1;