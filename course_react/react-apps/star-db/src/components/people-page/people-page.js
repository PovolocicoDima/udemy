import React, {Component} from 'react';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import Errorindicator from '../error-indicator';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3
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
                getData={ this.swapiService.getAllPeople }>
                
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );

        const ItemDetails = (
            <ErrorBoundry>
                <ItemDetails personId={ this.state.selectedPerson }/>
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={ItemDetails} />
        )
    }
}