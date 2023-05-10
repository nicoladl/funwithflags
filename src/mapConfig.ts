import {CSSProperties} from "react";

export const mapContainerStyle: CSSProperties = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    zIndex: -1,
};

export const mapOptions = {
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    zoom: 7
}