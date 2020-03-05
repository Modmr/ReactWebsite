import React, { Component } from 'react';

import { Contact } from './Content/Contact';
import { Locatie } from './Content/Locatie';
import { Acties } from './Content/Acties'; 
import { Intro } from './Content/Intro';
import { Diensten } from './Content/Diensten';
import { Skills } from './Content/Skills';

export class Content extends Component {
    render() {
        return (
            <div id="content">
                <Intro />
                <Acties />
                <Locatie />
                {/* <Skills /> */}
                <Diensten />
                <Contact />
            </div>
        );
    }
}