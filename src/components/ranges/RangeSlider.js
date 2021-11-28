import Slider, { Range } from 'rc-slider';
import React, {useState} from "react";


const RangeSlider = (props) => {
    const {min, max, step, value, classBlock, title, valueHandler} = props;


    return (
        <div className={classBlock}>
            <p>{title}</p>
            <div className="price">$ {value}</div>
            <Slider
                min={min}
                max={max}
                step={step}
                onChange={valueHandler}/>
        </div>
    )
};

export default RangeSlider;