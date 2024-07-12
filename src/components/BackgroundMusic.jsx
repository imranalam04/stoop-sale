import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import backgroundMusic from '../assets/backmusic.mp3';

let sound; // Declare sound globally to reuse

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playMusic = () => {
        if (!sound) {
            sound = new Howl({
                src: [backgroundMusic],
                html5: true, // Use HTML5 Audio
                loop: true,  // Loop the music
                volume: 1.0, // Set volume to max
            });
        }
        sound.play();
        setIsPlaying(true);
    };

    const stopMusic = () => {
        if (sound) {
            sound.stop();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        return () => {
            // Cleanup: Stop the music if the component unmounts
            if (sound) {
                sound.stop();
            }
        };
    }, []);

    return (
        <div>
            {!isPlaying ? (
                <button onClick={playMusic} className="bg-gray-800 border-2 border-blue-800 text-white px-4 py-2 rounded-md mx-2">
                    Play Music
                </button>
            ) : (
                <button onClick={stopMusic} className="bg-gray-800 border-2 border-blue-800 text-white px-4 py-2 rounded-md mx-2">
                    Stop Music
                </button>
            )}
        </div>
    );
};

export default BackgroundMusic;
