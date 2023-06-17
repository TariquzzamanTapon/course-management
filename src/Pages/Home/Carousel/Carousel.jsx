import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className='mb-10 mt-3'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="https://img.freepik.com/free-vector/red-ball-hitting-wicket-stumps-with-bat-black-abstract-splash-background-cricket-fever-concept_1302-5492.jpg?w=740&t=st=1686978356~exp=1686978956~hmac=18d77859381d8a3c1d95ceaa29cf7b6b91b7a2d37907504b9909491894a8e869" />

                <div data-src="https://img.freepik.com/free-photo/close-up-determined-soccer-player-kicking-ball-generated-by-ai_188544-9042.jpg?w=826&t=st=1687013925~exp=1687014525~hmac=9275a0e04f90dbe78e0a3f492f7e3132df00574717b6b1ee571c3e0be5720eda" />
                
                <div data-src="https://img.freepik.com/free-photo/male-swimmer-swimming-butterfly-stroke_171337-7613.jpg?w=740&t=st=1687016974~exp=1687017574~hmac=53bede328f18f98b0a41f9722f81ff0606dfeac07deb08e8d5cf99937df95ed0" />
                <div data-src="https://img.freepik.com/free-photo/view-golf-sport-equipment_23-2150424607.jpg?w=360&t=st=1687014963~exp=1687015563~hmac=5def06bcc77db0c857986909bfa65593293ce895250983f60dfab7fda68eb068" />
                <div data-src="https://img.freepik.com/free-photo/tennis-match-which-serving-player_1150-6534.jpg?w=740&t=st=1687014422~exp=1687015022~hmac=536d214ed42bd9b968cc224dc00e667ce2208852629947e26935cf3559f5776c" />

            </AutoplaySlider>
        </div>
    );
};

export default Carousel;