import React from 'react';

import './Toolkit.css';

import { Menu, Icon, Container, Button } from 'semantic-ui-react';

import ToolkitItem from './ToolkitItem';

export default class Toolkit extends React.Component {

    render() {
        return (
            <div className='Toolkit'>
                <Menu.Item as='a' header>Toolkit</Menu.Item>
                <Container fluid text><p>Ihre Unternehmens Bausteine</p></Container>
                <Menu.Item as='a' header>
                    Customers
                </Menu.Item>
                <div className='Toolkit__items Toolkit__items--customers'>
                    <ToolkitItem />
                    <Button icon labelPosition='right'>Erstellen <Icon name='add' /></Button>
                </div>
                <Menu.Item as='a' header>
                    Prozess
                </Menu.Item>
                <div className='Toolkit__items Toolkit__items--customers'>
                    <ToolkitItem />
                    <Button icon labelPosition='right'>Erstellen <Icon name='add' /></Button>
                </div>
                <Menu.Item as='a' header>
                    Channel
                </Menu.Item>
                <div className='Toolkit__items Toolkit__items--customers'>
                    <ToolkitItem />
                    <ToolkitItem />
                    <ToolkitItem />

                    <Button icon labelPosition='right'>Erstellen <Icon name='add' /></Button>
                </div>
            </div>
        );
    }
}
