import React, { Component } from 'react';

type DienstenProps = {};
type DienstenState = {
    bandenmonteren: string
    nieuwebanden: string
    gebruiktebanden: string
    bandenreparatie: string
    velgenrichten: string
    stoepschade:string
    uitlijnen:string
    kleinebeurt:string
};

export class Diensten extends Component<DienstenProps, DienstenState> {
    constructor(props: DienstenProps) {
        super(props);
        this.state = {
            bandenmonteren: require('../../assets/bandenmonteren.jpg'),
            nieuwebanden: require('../../assets/nieuwebanden.jpg'),
            gebruiktebanden: require('../../assets/gebruiktebanden.png'),
            bandenreparatie: require('../../assets/bandenreparatie.jpg'),
            velgenrichten: require('../../assets/velgenrichten.jpg'),
            stoepschade:require('../../assets/stoepschade.jpg'),
            uitlijnen:require('../../assets/uitlijnen.jpg'),
            kleinebeurt:require('../../assets/kleinebeurt.jpg'),

        };
    }

    render() {
        return (
            <section id="diensten">
                <div className="container">
                    <h1>Diensten</h1>
                    <div className="project-list">
                        <div className="project-item">
                            <div className="project-info">
                                <h2>Banden monteren</h2>
                                <h3>Monteren van ventielen en banden</h3>
                                <p>
                                    Montage van losse banden (inclusief een nieuwe ventiel en balanceren) € 15 per band
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.bandenmonteren} />
                            </div>
                        </div>

                        <div className="project-item">
                            <div className="project-info">
                                <h2>Nieuwe banden</h2>
                                <h3>Alle soorten merken</h3>
                                <p>
                                    Bij Toros bandenservice kunt u elke soort nieuwe band bestellen en laten monteren.
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.nieuwebanden} />
                            </div>
                        </div>

                        <div className="project-item">
                            <div className="project-info">
                                <h2>Gebruikte banden</h2>
                                <h3>Gebruikte banden vanaf € 25</h3>
                                <p>
                                    Bij Toros bandenservice kunt u gebruikte/tweedehandse banden kopen vanaf € 25.
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.gebruiktebanden} />
                            </div>
                        </div>

                        <div className="project-item">
                            <div className="project-info">
                                <h2>Banden reparatie</h2>
                                <h3>Lekke band reparatie</h3>
                                <p>
                                    Bij Toros banden service kunt u uw band laten proppen voor € 10 en laten vulkaniseren voor € 25 (inclusief montage)
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.bandenreparatie} />
                            </div>
                        </div>

                        <div className="project-item">
                            <div className="project-info">
                                <h2>Velgen richten</h2>
                                <h3>Velgen richten vanaf € 35</h3>
                                <p>
                                Bij Toros bandenservice kunt u uw velgen richten vanaf € 35 (inclusief montage) 
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.velgenrichten} />
                            </div>
                        </div>

                        <div className="project-item">
                            <div className="project-info">
                                <h2>Stoepschade wegwerken</h2>
                                <h3>Stoepschade herstellen € 30 per velg</h3>
                                <p>
                                Bij stoepschade wordt de velg gepolijst en op lak gebracht.
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.stoepschade} />
                            </div>
                        </div>


                        <div className="project-item">
                            <div className="project-info">
                                <h2>Uitlijnen</h2>
                                <h3>Uitlijnen € 40</h3>
                                <p>
                                    Uitlijnen is benodigd bij auto's die lijden aan bandenslijtage aan de binnenkant of buitenkant van de band. Ook als een stuur naar links of rechts trekt, is uitlijnen aangeraden.
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.uitlijnen} />
                            </div>
                        </div>


                        <div className="project-item">
                            <div className="project-info">
                                <h2>Kleine beurt</h2>
                                <h3>Reparatie</h3>
                                <p>
                                    Bij Toros bandenservice kunt u de volgende onderdelen laten vervangen: "Remblokken, fuseekogel, schokdempers" 
                                </p>
                                
                            </div>
                            <div className="project-image">
                                <img src={this.state.kleinebeurt} />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}