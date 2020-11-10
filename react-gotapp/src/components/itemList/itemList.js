import React, {Component} from 'react';
// import styled from 'styled-components';
import './itemList.css';
import { ListGroup, ListGroupItem} from 'reactstrap';



export default class ItemList extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem className=".list-group-item">
                    John Snow
                </ListGroupItem>
                <ListGroupItem className=".list-group-item">
                    Brandon Stark
                </ListGroupItem>
                <ListGroupItem className=".list-group-item">
                    Geremy
                </ListGroupItem>
            </ListGroup>
        );
    }
}