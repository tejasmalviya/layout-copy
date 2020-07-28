import React from 'react';
import {Input,InputLabel,InputAdornment,FormControl,FormHelperText,Paper,Link} from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';

function GraphInfoSection() {
    const [values, setValues] = React.useState({
        amount: '30.74',
    });

    const handleChange = (prop) => (event) => {
        setValues({...values,[prop]:event.target.value });
    };

    return (
        <div className="container-fluid pl-4">
            <FormControl className="halfWidth">
            <InputLabel className="text-dark" >Hourly Commitment</InputLabel>
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
                <h6 className="pl-2 pt-2">
                    AWS Recommendations: $37.50
                </h6>
                <p className="infoText pl-2 pb-3">7 day analysis by AWS </p>
            </Paper>
            <div>
                <h6 className="pt-2">Expected Target Coverage </h6>
                <h6>0.99%</h6>
                <AssessmentIcon/>
                <Link className="pl-1 underLine">View your current coverage</Link>
            </div>

            <div className="pt-3">
                <h6>Estimated Net Additional Montly Savings</h6>
                <h6>$5,028.64</h6>
                <p className="infoText">Estimated saving produced by savings plan purchased</p>
            </div>

        </div>
    );
}

export default GraphInfoSection;
