import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diametr: null
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
        .getPlanet(id)
        .then((planet) => {
            this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            });
        });
    }
    
    render() {

        const { id, population, name, rotationPeriod, diameter } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image" 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                    alt="planet" />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-gorup-item">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diametr</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};