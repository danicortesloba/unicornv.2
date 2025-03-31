import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import FunFactV1 from "../../components/fact/FunFactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1 from "../../components/services/ServicesV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Unicorn Solutions - Servicios</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Nuestros Servicios' breadCrumb='Servicios' />
                <ServicesV1 sectionClass='default-padding-bottom' />
                <FunFactV1 sectionClass='default-padding-bottom' />
                <TestimonialV2 />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default ServicesPage;