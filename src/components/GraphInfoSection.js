import React from 'react';
import {Input,InputAdornment,FormControl,FormHelperText,Paper,Link} from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';

function GraphInfoSection() {
    const [values, setValues] = React.useState({
        amount: '30.74',
    });

    const handleChange = (prop) => (event) => {
        setValues({...values,[prop]:event.target.value });
    };

    return (
        <div className="container-fluid pl-5 pt-3">
            <p className="p-0 m-0">Hourly Commitment</p>
            <FormControl className="halfWidth">
            <Input
                color="secondary"
                id="standard-adornment-amount"
                value={values.amount}
                onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
            <FormHelperText className="infoText">Default value is the highest value from Graph</FormHelperText>
            </FormControl>

            <Paper elevation={0} id="awsPaper">
                <p className="pl-2 mb-0 pb-0">
                    AWS Recommendations: $37.50
                </p>
                <p className="infoText pl-2 pt-0 mt-0">7 day analysis by AWS </p>
            </Paper>
            <div className="pt-3">
                <p>Expected Target Coverage</p>
                <p>0.99%</p>
                <AssessmentIcon/>
                <Link className="pl-1 underLine">View your current coverage</Link>
            </div>

            <div className="pt-3">
                <p>Estimated Net Additional Montly Savings</p>
                <p>$5,028.64</p>
                <p className="infoText mb-0 pb-0">Estimated saving produced by</p>
                <p className="infoText mt-0 pt-0">savings plan purchased</p>
            </div>

        </div>
    );
}

export default GraphInfoSection;
