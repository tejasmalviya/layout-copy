import React from "react";
import {ButtonGroup , Button} from "@material-ui/core";

export class FilterByDay extends React.Component{
    state={
        activeIndex:2,
    }
    handleClick=(id)=>{
        console.log(id);
        this.setState({
            activeIndex:id
        })
    }
    render()
    {
        return(
            <div className="container-fluid flexContainer filterSection">
                <p>Filter by recent days: </p>
                <ButtonGroup  className="pl-3" size="small">

                <Button
                    id="1"
                    onClick={() => this.handleClick(1)}
                    className={ this.state.activeIndex===1 ? 'activeTab':'' }
                >
                    3 days
                </Button>
                <Button
                    id="2"
                    onClick={() => this.handleClick(2)}
                    className={ this.state.activeIndex===2 ? 'activeTab':'' }
                >
                    7 Days
                </Button>
                <Button
                    id="2"
                    onClick={() => this.handleClick(3)}
                    className={ this.state.activeIndex===3 ? 'activeTab':'' }
                >
                    1 Month
                </Button>
            </ButtonGroup>

        </div>

    ) }
}

export default FilterByDay;