import React, {Component} from 'react';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';

import './people-page.css';
import Errorindicator from '../error-indicator';


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger;
        this.setState({
            hasError: true
        });
    }

    onPersoneSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    }

    render() {

        if (this.state.hasError) {
            return <Errorindicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        OnItemSelected={ this.onPersoneSelected }
                        getData={ this.swapiService.getAllPeople }/>
                </div>
            <div className="col-md-6">
                <PersonDetails personId={ this.state.selectedPerson }/>
                </div>
            </div>
        )
    }
}