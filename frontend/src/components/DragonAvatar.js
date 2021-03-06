import React, {Component} from 'react';
import {skinny, slender, sporty, stocky, patchy, plain, spotted, striped} from '../assets';

const propertyMap = {
    backgroundColor: {
        black: '#263238', white: '#CFD8dc', green: '#A5D6A7', blue: '#0277BD'
    },
    build: {
        slender, stocky, sporty, skinny
    },
    pattern: {
        plain, striped, spotted, patchy
    },
    size: {
        small: 100, medium: 140, large: 180, enormous: 220
    }
};

class DragonAvatar extends Component{
    get DragonImage(){
        const dragonPropertyMap = {};
        this.props.dragon.traits.forEach(trait => {
            const {traitType, traitValue} = trait;
            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        })
        const {backgroundColor, build, pattern, size} = dragonPropertyMap;

        return(
            <div className='dragon-avatar-image-wrapper'>
                <div className='dragon-avatar-image-background' style={{ backgroundColor: backgroundColor, width: size, height: size }}></div>
                <img src={pattern} className='dragon-avatar-image-pattern' style={{width: size, height: size}}></img>
                <img src={build} className='dragon-avatar-image' style={{width: size, height: size}}></img>
            </div>
        );
    }

    render(){
        const {generationId, dragonId, traits} = this.props.dragon;

        if(!dragonId){
            return <div></div>
        }

        return(
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                {traits.map(trait => trait.traitValue).join(', ')}
                { this.DragonImage }
            </div>
        )
    }
}
export default DragonAvatar;