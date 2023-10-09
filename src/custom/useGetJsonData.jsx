import { useEffect, useState } from "react";

const useGetJsonData = () => {
    const [eventsData, setEventsData] = useState()

    useEffect(() => {

        fetch('/data.json')
            .then(res => res.json())
            .then(data => setEventsData(data))

    }, [])


    return [eventsData]
};

export default useGetJsonData;