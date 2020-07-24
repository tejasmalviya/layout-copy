import React from 'react';
import {RadioGroup,Radio,FormControlLabel} from "@material-ui/core";
import './css/App.css';

function Cards(props) {
    return (
        <div className="cards">
            <h6 className="text-black-50 pt-3 pb-2">{props.name.title} </h6>


            <div className="container-fluid">
                <RadioGroup name={props.name.title}>
                        {
                                props.name.options.map((option)=>
                                        <FormControlLabel
                                            className="cardOptions"
                                            value={option.value}
                                            control={ <Radio color="primary"/> }
                                            label={<div>{option.value}{option.tags}
                                            </div> }> }
                                        </FormControlLabel>
                                )
                        }
                </RadioGroup>
            </div>
        </div>
    );
}

export default Cards;
