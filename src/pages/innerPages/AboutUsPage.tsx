import { Helmet } from "react-helmet-async";
import AboutV6 from "../../components/about/AboutV6";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PartnerV2 from "../../components/partner/PartnerV2";


const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Unicorn - Sobre nosotros</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Sobre nosotros' breadCrumb='Nosotros' />
                <AboutV6 sectionClass='bg-gray' />
                <FunFactV1 sectionClass='default-padding-bottom bg-gray' />
                <PartnerV2 />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;