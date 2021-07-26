import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
    calculateStrength() {
        let strength = 0;
        this.props.heroes.forEach(stren => strength += stren.strength);
        return strength;
    }

    calculateIntelligence() {
        let intelligence = 0;
        this.props.heroes.forEach(int => intelligence += int.intelligence);
        return intelligence;
    }

    calculateSpeed() {
        let speed = 0;
        this.props.heroes.forEach(sp => speed += sp.speed);
        return speed;
    }

    render() {
        return (
            <div>
                <h4>Squad Statistic</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <b className='list-item'>Overall Strength: {this.calculateStrength()}</b>
                    </li>
                    <li className='list-group-item'>
                        <b className='list-item'>Overall Intelligence: {this.calculateIntelligence()}</b>
                    </li>
                    <li className='list-group-item'>
                        <b className='list-item'>Overall Speed: {this.calculateSpeed()}</b>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, null)(SquadStats);