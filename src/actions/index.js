import { ADD_CHARACTERS, REMOVE_CHARACTER } from '../constant/squadCosntants';

export const addCharactersById = (id) => {
    const action = {
        type: ADD_CHARACTERS,
        id
    };
    return action;
}

export const removeCharacterByID = (id) => {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}