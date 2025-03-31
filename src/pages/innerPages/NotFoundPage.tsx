import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import NotFoundContent from "../../components/notFound/Error404Content";

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Unicorn - 404 Página no encontrada</title>
            </Helmet>

            <LayoutV1>
                <NotFoundContent />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;