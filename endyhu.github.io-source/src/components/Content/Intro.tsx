import React, { Component } from 'react';

type IntroProps = {};
type IntroState = {
    intro_background: string,
};

export class Intro extends Component<IntroProps, IntroState> {
    constructor(props: IntroProps) {
        super(props);
        this.state = {
            intro_background: require('../../assets/IntroBackground.jpg'),
        };
    }

    render() {
        return (
            <section id="intro">
                <div id="intro-background" >
                    <img src={this.state.intro_background} />
                </div>

                <div className="container">
                    <h1>Toros</h1>
                    <h1>Bandenservice</h1>
                    <h2>Welkom</h2>
                    <p>
                    Kijk hier naar onze <mark>diensten</mark>,
                        <br />
                         of neem <mark>contact</mark> op voor overige vragen.
                    </p>
                </div>
            </section>
        );
    }
}