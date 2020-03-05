import React, { Component } from 'react';
import { element } from 'prop-types';

type NavbarProps = {};
type NavbarState = {
    app: HTMLElement | null,
    acties: HTMLElement | null,
   openingstijden: HTMLElement | null,
    diensten: HTMLElement | null,
    contact: HTMLElement | null
};

export class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
    }

    componentDidMount() {
        this.setState(
            this.state = {
                app: document.getElementById('App'),
                acties: document.getElementById('Acties'),
               openingstijden: document.getElementById('Locatie'),
                diensten: document.getElementById('diensten'),
                contact: document.getElementById('contact')
            }
        );
    }

    handleScrollTo(target: HTMLElement | null) {
        if (target != null) {
            this.state.app!.scrollTo(0, target!.offsetTop);
        }
    }

    render() {
        return (
            <nav id="navbar">
                <ul id="navbar-list">
                    <li id="logo" />
                    <li><button onClick={() => this.handleScrollTo(this.state.app)}>Home</button></li>
                    <li><button onClick={() => this.handleScrollTo(this.state.acties)}>Acties</button></li>
                    <li><button onClick={() => this.handleScrollTo(this.state.openingstijden)}>openingstijden</button></li>
                    <li><button onClick={() => this.handleScrollTo(this.state.diensten)}>Diensten</button></li>
                    <li><button onClick={() => this.handleScrollTo(this.state.contact)}>Contact</button></li>
                </ul>
            </nav>
        );
    }
}