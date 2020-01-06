import { TextActionTypes } from './text.types';

export const setTexts = texts => ({
    type: TextActionTypes.SET_TEXTS,
    payload: texts
});