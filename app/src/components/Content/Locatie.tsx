import React, { Component } from 'react';

type LocatieProps = {};
type LocatieState = {
    Locatie_background: string,
    logo: string
};

export class Locatie extends Component<LocatieProps, LocatieState> {
    constructor(props: LocatieProps) {
        super(props);
        this.state = {
            Locatie_background: require('../../assets/toros.png'),
            logo: require('../../assets/logo.png'),
        };
    }

    render() {
        return (
            <section id="Locatie">
                <div id="Locatie-background" >
                    <img src={this.state.Locatie_background} />
                </div>

                <div className="multi-container">
                

                <div className="container">
                    <h1>Openingstijden</h1>
                    <div className="Locatie-item">
                        <div className="Locatie-info">
                            <ul>
                            <li>Maandag </li><p>08:15–18:00</p>
                            <li>Dinsdag</li><p>08:15–18:00</p>
                            <li>Woensdag</li><p>08:15–18:00</p>
                            <li>Donderdag</li><p>08:15–18:00</p>
                            <li>Vrijdag</li><p>08:15–18:00</p>
                            <li>Zaterdag</li><p>08:15–17:00</p>
                            <li>Zondag</li><p>Gesloten</p>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h1>Locatie</h1>
                    <div className="Locatie-item">
                        <a className="Locatie-logo" href="https://goo.gl/maps/m1BYDDd5tZTdAR2j6" target="_blank">
                            <img src={this.state.logo} />
                        </a>

                        <div className="Locatie-info">
                            <a href="https://goo.gl/maps/m1BYDDd5tZTdAR2j6" target="_blank">
                                Boezemstraat 352-354
                            </a>
                            <h3>3034 EM Rotterdam</h3>
                        </div>
                    </div>
                </div>



            </div>

                
            </section>
        );
    }
}