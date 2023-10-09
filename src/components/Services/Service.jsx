import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetJsonData from "../../custom/useGetJsonData";
import ServiceDetails from './ServiceDetails';


const Service = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const [dataload] = useGetJsonData();

    useEffect(() => {
        const findService = dataload?.find(services => services.id == id);
        setService(findService);
    }, [id, dataload]);

    return (
        <div>
            <ServiceDetails key={id} service={service}></ServiceDetails>
        </div>
    );
};

export default Service;