import React, {Component} from 'react';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import Errorindicator from '../error-indicator';
import Row from '../row';

import './people-page.css';


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

        const itemList = (
            <ItemList 
            OnItemSelected={ this.onPersoneSelected }
            getData={ this.swapiService.getAllPeople }
            renderItems={ ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }/>
        );

        const personDetails = (
            <PersonDetails personId={ this.state.selectedPerson }/>
        );

        return (
            <Row left={itemList} right={personDetails} />
        )
    }
}