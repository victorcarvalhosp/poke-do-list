import {useEffect, useState} from "react";

export default function useAudio(url: string) {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggleAudio = () => {
        console.log('CALL SOUND' + playing);
            setPlaying(!playing);
    }

    const playAudio = async () => {
            setPlaying(true);
    }

    const stopAudio = async () => {
        setPlaying(false);
    }

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [toggleAudio, playAudio, stopAudio];
};

