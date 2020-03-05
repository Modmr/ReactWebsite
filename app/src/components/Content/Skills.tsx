import React, { Component } from 'react';

type SkillsProps = {};
type SkillsState = {
    skills_background: string,
    progress: { width: string }[]
};

export class Skills extends Component<SkillsProps, SkillsState> {
    constructor(props: SkillsProps) {
        super(props);
        this.state = {
            skills_background: require('../../assets/rotterdam.jpg'),
            progress: [
                { width: '80%' }, // Python
                { width: '75%' }, // C#
                { width: '66%' }, // R
                { width: '66%' }, // Octave
                { width: '40%' }, // Java
                { width: '33%' }, // JavaScript
            ]
        };
    }

    render() {
        return (
            <section id="skills">
                <div id="skills-background" >
                    <img src={this.state.skills_background} />
                </div>

                <div className="container">
                    <h1>Skills</h1>
                    <ul className="skills-list">
                        <li>
                            <p>Python</p>
                            <div className="exp-bar">
                                <div className="exp-bar-progress" style={this.state.progress[0]} />
                            </div>
                        </li>
                        <li>
                            <p>C#</p>
                            <div className="exp-bar">
                                <div className="exp-bar-progress" style={this.state.progress[1]} />
                            </div>
                        </li>
                        <li>
                            <p>R</p>
                            <div className="exp-bar">
                                <div className="exp-bar-progress" style={this.state.progress[2]} />
                            </div>
                        </li>
                        <li>
                            <p>Octave</p>
                            <div className="exp-bar">
                                <div className="exp-bar-progress" style={this.state.progress[3]} />
                            </div>
                        </li>
                        <li>
                            <p>Java</p>
                            <div className="exp-bar">
                                <div className="exp-bar-progress" style={this.state.progress[4]} />
                            </div>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <div className="exp-bar">
                                <div className="exp-bar-progress" style={this.state.progress[5]} />
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}