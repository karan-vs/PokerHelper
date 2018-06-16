import Immutable from 'immutable';

//Don't change any order here.

const suits = Immutable.fromJS({
    S: 0,
    H: 1,
    C: 2,
    D: 3
});

const cards = Immutable.fromJS({
    A: 0,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '7': 6,
    '8': 7,
    '9': 8,
    '10': 9,
    J: 10,
    Q: 11,
    K: 12
});

export default { suits, cards };