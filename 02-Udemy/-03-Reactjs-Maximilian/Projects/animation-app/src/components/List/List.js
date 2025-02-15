import React, { Component } from 'react';
import CssTransition from "react-transition-group/CssTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CssTransition key={index} classNames='fade' timeout={300} >
            <li 
                className="ListItem" 
                onClick={() => this.removeItemHandler(index)}>{item}</li>
                </CssTransition>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup className="List" component='ul'>
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;