import React from 'react';
import {Select,FormControl,MenuItem,InputLabel,FormControlLabel,Checkbox} from "@material-ui/core";
import './css/App.css';

function AccountSection() {
    const [account, setAccount] = React.useState('');
    const handleChange = (event) => {
        setAccount(event.target.value);
    };
    return (
        <div className="container-fluid" >
            <h6 className="small">Purchase in Account</h6>
            <FormControl className="fullWidth">

                <InputLabel>Select Account</InputLabel>
                <Select
                    value={account}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Account One</MenuItem>
                    <MenuItem value={20}>Account Two</MenuItem>
                    <MenuItem value={30}>Account three</MenuItem>
                </Select>

            </FormControl>
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
