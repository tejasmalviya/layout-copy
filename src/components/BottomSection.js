import React from 'react';
import './css/App.css';
import GraphInfoSection from "./GraphInfoSection";
import GraphSection from "./GraphSection";

function BottomSection() {
    return (
        <div className="container-fluid">
            <h6 className="p-3">Montly Savings Vs Hourly Commitment</h6>
            <div className="flex-container container-fluid">
                <GraphSection className="flex-grow-1"/>
                <GraphInfoSection className="flex-grow-1"/>
            </div>

        </div>
    );
}

export default BottomSection;
