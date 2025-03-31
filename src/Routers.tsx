import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";


// Home Light
import Home1Light from "./pages/homePages/Home1Light";


// Inner Pages 
import AboutUsPage from "./pages/innerPages/AboutUsPage";

import ContactUsPage from "./pages/innerPages/ContactUsPage";


// Inner Light
import AboutUsLightPage from "./pages/innerPages/AboutUsLightPage";

import ContactUsLightPage from "./pages/innerPages/ContactUsLightPage";


// Services Page
import ServicesPage from "./pages/servicesPages/ServicesPage";

import ServiceDetailsPage from "./pages/servicesPages/ServiceDetailsPage";

// Services Light
import ServicesLightPage from "./pages/servicesPages/ServicesLightPage";

import ServiceDetailsLightPage from "./pages/servicesPages/ServiceDetailsLightPage";




import NotFoundPage from "./pages/innerPages/NotFoundPage";

const Routers = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home1 />}></Route>


                {/* Home Light  */}
                <Route path='/home-1-light' element={<Home1Light />}></Route>


                {/* Inner Pages */}
                <Route path='/conocenos' element={<AboutUsPage />}></Route>


                <Route path='/contacto' element={<ContactUsPage />}></Route>


                {/* Inner Light  */}
                <Route path='/about-us-light' element={<AboutUsLightPage />}></Route>

                <Route path='/contact-us-light' element={<ContactUsLightPage />}></Route>


                {/* Services Page */}
                <Route path='/servicios' element={<ServicesPage />}></Route>

                <Route path='/service-details/:id' element={<ServiceDetailsPage />}></Route>

                {/* Services Light */}
                <Route path='/services-light' element={<ServicesLightPage />}></Route>

                <Route path='/service-details-light/:id' element={<ServiceDetailsLightPage />}></Route>


                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;