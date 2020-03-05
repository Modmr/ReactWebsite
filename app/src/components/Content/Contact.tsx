import React, { Component } from 'react';

type ContactProps = {};
type ContactState = {
    contact_background: string,
    gmail: string,
    call: string,
    location: string,
    whatsapp: string,
};

export class Contact extends Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);
        this.state = {
            contact_background: require('../../assets/contact.jpg'),
            gmail: require('../../assets/gmail.svg'),
            call: require('../../assets/call.svg'),
            location: require('../../assets/location.svg'),
            whatsapp: require('../../assets/whatsapp.svg')
        };
    }

    render() {
        return (
            <section id="contact">
                <div id="contact-background" >
                    <img src={this.state.contact_background} />
                </div>

                <div className="container">
                    <h1>Contact</h1>
                    <ul id="contact-list">
                        <li className="contact-list-li">
                            <a href="mailto:torosbanden@gmail.com" target="_top">
                                <img src={this.state.gmail} alt="" />
                            </a>
                            <p>Mailen</p>
                        </li>
                        <li className="contact-list-li">
                            <a href="tel://0104122080" target="_top">
                                <img src={this.state.call} alt="" />
                            </a>
                            <p>Bellen</p>

                        </li>
                        <li className="contact-list-li">
                            <a href="https://goo.gl/maps/m1BYDDd5tZTdAR2j6" target="_blank">
                                <img src={this.state.location} alt="" />
                            </a>
                            <p>Adres</p>
                            
                        </li>

                        <li className="contact-list-li">
                            <a href="https://api.whatsapp.com/send?phone=31628703328&text=Hallo,%20ik%20had%20een%20vraag%20over">
                                <img src={this.state.whatsapp} alt="" />
                            </a>
                            <p>Whatsapp</p>
                            
                        </li>
                    </ul>

                    
                </div>
                
            </section>
        );
    }
}