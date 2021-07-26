import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterByID } from '../actions/index';

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Your Hero Squad:</h4>
                <ul className='list-group'>
                    {this.props.heroes.map(hero => (
                        <li key={hero.id} className='list-group-item'>
                            <div className='list-item'>{hero.name}</div>
                            <span className='list-item' onClick={() => this.props.removeCharacterByID(hero.id)}>X</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProp, { removeCharacterByID })(HeroList);