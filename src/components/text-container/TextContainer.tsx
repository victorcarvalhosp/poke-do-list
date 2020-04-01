import React, {useState} from 'react';
import './TextContainer.scss'
import Typing from 'react-typing-animation';

interface IComponentProps {
    message: string;

    onClickContinue(): void;
}

const TextContainer: React.FC<IComponentProps> = ({message, onClickContinue}) => {

    // const [toggleAudio, playAudio] = useAudio("/audio/sounds/sfx_menu_move3.wav");
    const [showContinueButton, setShowContinueButton] = useState(false);

    const finishedTyping = () => {
        setShowContinueButton(true);
        // playAudio();
        console.log('FINISHED');
    }

    const onClick = async () => {
        // await playAudio();
        setShowContinueButton(false);
        onClickContinue();
    }

    return (
        <div className="text-container">
            <div className="nes-container is-rounded">
                <Typing speed={10} onFinishedTyping={finishedTyping}>
                    <p>{message}</p>
                </Typing>
            </div>
            {showContinueButton && (
                    <button autoFocus={true} type="button" className="nes-btn is-primary advance-button" onClick={onClick}>Continue
                    </button>
                )}
        </div>
    );
}

export default TextContainer;
