import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import clothes from '../assets/Clothes.png';
import home from '../assets/Home.png';
import shoes from '../assets/Shoes.png';
import stuff from '../assets/Stuff.jpg';

const items = [
    { id: 1, name: 'Clothes', description: 'Quality apparel for all seasons.', image: clothes },
    { id: 2, name: 'Home Goods', description: 'Decorations and kitchen essentials.', image: home },
    { id: 3, name: 'Shoes', description: 'Footwear for every occasion.', image: shoes },
    { id: 4, name: 'Tchotchkes', description: 'Unique knick-knacks and more.', image: stuff },
];

const ItemsForSale = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closePopup = () => {
        setSelectedItem(null);
    };

    return (
        <section className="relative isolate bg-gray-900 min-h-screen">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
                <h1 className='text-white mb-10 text-center font-semibold text-5xl'>Items For Sale</h1>
                <div className="flex flex-col gap-16 bg-white/5 px-6 py-16 rounded-3xl ring-1 ring-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                        {items.map(item => (
                            <AnimatedItem key={item.id} item={item} onClick={handleItemClick} />
                        ))}
                    </div>
                    <div
                        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[1318/752] w-[76.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                </div>

            </div>
            {selectedItem && <Popup item={selectedItem} onClose={closePopup} />}
        </section>
    );
};

const AnimatedItem = ({ item, onClick }) => {
    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
    });

    return (
        <animated.div
            style={props}
            className="w-64 p-4 border rounded-lg shadow-lg cursor-pointer bg-white"
            onClick={() => onClick(item)}
        >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-2xl font-bold mt-4 text-center">{item.name}</h3>
            <p className="text-lg mt-2 text-center">{item.description}</p>
        </animated.div>
    );
};

const Popup = ({ item, onClose }) => {
    const props = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
    });

    return (
        <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <animated.div
                style={props}
                className="bg-white p-8 rounded-lg shadow-lg max-w-sm relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-2xl font-bold mt-4">{item.name}</h3>
                <p className="text-lg mt-2">{item.description}</p>
            </animated.div>
        </div>
    );
};

export default ItemsForSale;
