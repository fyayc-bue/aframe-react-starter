import React from 'react';

import './Inspector.css';
import { Menu, Icon, Container } from 'semantic-ui-react';

export default class Inspector extends React.Component {

    render() {
        return (
            <div className='Inspector'>
                <Menu.Item as='a' header>Inspektor</Menu.Item>
                <Container text fluid><p>Kein Item ausgewählt!</p></Container>
                <Menu.Item as='a'>Customer Layer</Menu.Item>
                <Container text fluid><p>leer</p></Container>
                <Menu.Item as='a'>Experience Layer</Menu.Item>
                <Container text fluid><p>leer</p></Container>
                <Menu.Item as='a'>Organisation Layer</Menu.Item>
                <Container text fluid><p>leer</p></Container>
                <Menu.Item as='a'>Performance Layer</Menu.Item>
                <Container text fluid><p>leer</p></Container>
                <Menu.Item as='a'>Asset Layer</Menu.Item>
                <Container text fluid><p>leer</p></Container>
                <Menu.Item as='a'>Data Layer</Menu.Item>
                <Container text fluid><p>leer</p></Container> 
            </div>
        );
    }
}
