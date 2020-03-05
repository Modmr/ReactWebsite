import React, { Component } from 'react';

type ActiesProps = {};
type ActiesState = {
    actie: string
};

export class Acties extends Component<ActiesProps, ActiesState> {
    constructor(props: ActiesProps) {
        super(props);
        this.state = {
            actie: require('../../assets/18banden.png'),
        };
    }

    render() {
        return (
            <section id="Acties">
                <div className="container">
                    <h1>Acties</h1>
                    <h2>AANBIEDINGEN NIEUWE BANDEN!</h2>
                    <br></br>

                    <div className="Acties-item">
                        <h3>18 INCH BANDEN</h3>
                        <h2 className="Acties-logo" >
                            € 75
                        </h2>
                    </div>

                    <div className="Acties-item">
                        <h3>17 INCH BANDEN</h3>
                        <h2 className="Acties-logo" >
                            € 70
                        </h2>
                    </div>

                    <div className="Acties-item">
                        <h3>16 INCH BANDEN</h3>
                        <h2 className="Acties-logo" >
                            € 65
                        </h2>
                    </div>

                    <div className="Acties-item">
                        <h3>15 INCH BANDEN</h3>
                        <h2 className="Acties-logo" >
                            € 55
                        </h2>
                    </div>

                    <div className="Acties-item">
                        <h3>14 INCH BANDEN</h3>
                        <h2 className="Acties-logo" >
                            € 50
                        </h2>
                    </div>

                </div>
            </section>
        );
    }
}