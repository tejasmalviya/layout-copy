import React from 'react';
import {FormControlLabel,Checkbox,TextField,InputAdornment,Divider,IconButton} from "@material-ui/core";
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';

function AccountSection() {

    return (
        <div>
            <TextField
                label="Purchase in Account"
                placeholder="Select Account"
                color="secondary"
                className="fullWidth"
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <Divider id="divider" orientation="vertical" />
                            <IconButton>
                                <KeyboardArrowDownTwoToneIcon/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

            <div>
            <FormControlLabel
                value="accountPurchase"
                control={<Checkbox color="primary" />}
                label="Account Scoped Purchase"
                labelPlacement="end"
                className="mt-2"
            />
        </div>

        </div>
    );
}

export default AccountSection;
