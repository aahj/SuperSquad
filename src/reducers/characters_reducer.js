import characterJSON from '../data/characters.json';
import { ADD_CHARACTERS, REMOVE_CHARACTER } from '../constant/squadCosntants';
import { createHeroes } from './heroes_reducer';
const characters = (state = characterJSON, action) => {
    switch (action.type) {
        case ADD_CHARACTERS:
            var character = state.filter(item => item.id !== action.id);
            return character;
        case REMOVE_CHARACTER:
            character = [...state, createHeroes(action.id)];
            return character;
        default:
            return state;
    }
}
export default characters;