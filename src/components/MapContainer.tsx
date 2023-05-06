import {GoogleMap, LoadScript} from '@react-google-maps/api';
import Geocode from "react-geocode";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const containerStyle = {
    width: '400px',
    height: '400px'
};

export const MapContainer = () => {
    const guessedCountryName = useSelector(state => state.ui.randomCountry.name)
    const [center, setCenter] = useState({
        lat: 0,
        lng: 0
    })
    Geocode.setApiKey('AIzaSyAidISZEQMTxM_LKtwUoT1w0IDewL6k_Tg');

    useEffect(() => {
        // Get latitude & longitude from address.
        Geocode.fromAddress(guessedCountryName).then(response => {
                const {lat, lng} = response.results[0].geometry.location;
                setCenter({lat, lng})
        }, error => console.error(error));
    }, [guessedCountryName])

    return (
        <LoadScript
            googleMapsApiKey='AIzaSyAidISZEQMTxM_LKtwUoT1w0IDewL6k_Tg'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}
