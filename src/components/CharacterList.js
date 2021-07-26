import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharactersById } from '../actions/index';

class CharacterList extends Component {
    render() {
        return (
            <div>
                <h4>Characters</h4>
                <ul className='list-group'>
                    {this.props.characters.map(character => (
                        <li key={character.id} className='list-group-item'>
                            <div className='list-item'>{character.name}</div>
                            <span className='list-item'
                                onClick={() => this.props.addCharactersById(character.id)}>+</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
function mapStateToProp(state) {
    return {
        characters: state.characters
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addCharactersById }, dispatch)
// }

export default connect(mapStateToProp, { addCharactersById })(CharacterList);