import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useState, useRef } from "react";

const Map = () => {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    return
};

export default Map;