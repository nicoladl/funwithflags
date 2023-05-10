import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import {useEffect, useState} from "react";
import {mapContainerStyle, mapOptions} from "@/mapConfig";
import {useAppSelector} from "@/store/hooks";
import {UiState} from "@/store/UiSlice/UiSlice";

// todo: test this component
export const MapContainer = () => {
    const guessedCountryName: string = useAppSelector((state: { ui: UiState }) => state.ui.randomCountry.name)
    const [isMapReady, seIsMapReady] = useState(false)
    const [center, setCenter] = useState({
        lat: 0,
        lng: 0
    })

    const {isLoaded, loadError} = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyAidISZEQMTxM_LKtwUoT1w0IDewL6k_Tg',
        language: 'en'
    })

    useEffect(() => {
        if (isLoaded) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({address: guessedCountryName}, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    const lat = results ? results[0].geometry.location.lat() : 0;
                    const lng = results ? results[0].geometry.location.lng() : 0;
                    setCenter({lat, lng})
                }
            })
        }
    }, [guessedCountryName])

    useEffect(() => {
        if (isLoaded) {
            seIsMapReady(true)
        }
    }, [center])

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isMapReady ? <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        options={mapOptions}
    /> : <p>loading...</p>
}
