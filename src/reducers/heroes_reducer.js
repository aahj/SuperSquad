import characterJSON from '../data/characters.json';
import { ADD_CHARACTERS, REMOVE_CHARACTER } from '../constant/squadCosntants';

export const heroes = (state = [], action) => {
    switch (action.type) {
        case ADD_CHARACTERS:
            var heroes = [...state, createHeroes(action.id)]
            return heroes;
        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

export function createHeroes(id) {
    let character = characterJSON.find(item => item.id === id);
    return character;
}
