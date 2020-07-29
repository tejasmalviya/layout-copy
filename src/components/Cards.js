import React from 'react';
import {RadioGroup,Radio,FormControlLabel} from "@material-ui/core";

function Cards(props) {
    return (
        <div className="cards flex-grow-1 fullWidth">
            <h6 className="text-black-50 pt-2 pb-2">{props.name.title} </h6>

            <div className="pl-1" style={{marginTop:"-1%"}}>
                <RadioGroup name={props.name.title}>
                        {
                                props.name.options.map((option)=>
                                        <FormControlLabel
                                            className="cardOptions"
                                            value={option.value}
                                            control={ <Radio color="primary"/> }
                                            label={<div style={{fontSize:"15px"}}>{option.value}{option.tags}
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
