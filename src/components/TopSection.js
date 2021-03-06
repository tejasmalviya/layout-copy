import React from 'react';
import Cards from "./Cards";
import AccountSection from "./AccountSection";
import {Tooltip} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

const savingPlanType={
    title:"Saving Plan Type",
    options:[
        {
            value:"Compute Savings Plan ",
            tags: <Tooltip title="Info about Compute" placement="top"><InfoIcon/></Tooltip>
        },
        {
            value:"EC2 Instane Saving Plan ",
            tags: <Tooltip title="Info about EC2 instance" placement="top"><InfoIcon/></Tooltip>
        }
    ]
}

const savingPlanTerm={
    title : "Saving Plan Term",
    options : [
        {
            value:"1-Year "
        },
        {
            value : "3-Year"
        }
    ]
}

const paymentOption={
    title: "Payment Option",
    options : [
        {
            value:"All Upfront"
        },
        {
            value : "Partial Upfront"
        },
        {
            value:"No Upfront"
        }
    ]
}


function TopSection() {

    return (
        <div className="container-fluid p-4 mb-5  mainSection">
            <h6>Saving Plan Parameters</h6>
            <div className="flexContainer justify-content-start">
                <div className="flexContainer parameterContainer fullWidth">
                    <Cards name={savingPlanType}/>
                    <Cards name={savingPlanTerm}/>
                    <Cards name={paymentOption}/>
                </div>
                <div className="accountContainer">
                    <AccountSection />
                </div>
            </div>
        </div>
    );
}

export default TopSection;
