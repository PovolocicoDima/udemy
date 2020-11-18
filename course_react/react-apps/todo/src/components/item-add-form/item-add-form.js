import React, {Component} from 'react';
import './item-add-form.css';

export default class itemAddForm extends Component {
    render() {
        // const { addItem } = this.props;

        return (
            <div className="item-add-form d-flex">
                <input
                    type="text" 
                    className="form-control"
                    placeholder="type text and press the button"/>
                <button
                    onClick={ () => this.props.onItemAdded('Hello world')} 
                    type="button"
                    className="btn btn-outline-secondary">Add text</button>
            </div>
        );
    }
};


