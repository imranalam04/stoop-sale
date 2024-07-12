import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon configuration
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/dist/images/marker-icon-2x.png',
    iconUrl: '/leaflet/dist/images/marker-icon.png',
    shadowUrl: '/leaflet/dist/images/marker-shadow.png',
});

const Location = () => {
    const position = [40.6782, -73.9981]; // Coordinates for 2nd Pl. and Court St, Brooklyn, NY

    return (
        <div className='bg-gray-900'>
            <section className="text-center p-8  xl:mx-auto xl:max-w-7xl xl:px-8">
                <h2 className="text-3xl font-bold mb-8 text-white mt-32 sm:text-5xl">Our Location</h2>
                <div className="flex justify-center mt-20">
                    <div className="aspect-[9/4] w-full xl:rounded-3xl overflow-hidden">
                        <MapContainer  center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    2nd Pl. and Court St, Brooklyn, NY
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Location;
