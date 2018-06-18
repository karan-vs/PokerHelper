import { ofc3players, ofc2players } from '../constants';

const get2playersProb = (street, directOuts, indirectOuts) => {
    const directOutsProb =  ofc2players.directOuts.getIn([directOuts, street]);
    const indirectOutsProb =  ofc2players.indirectOuts.getIn([indirectOuts, street]);
    
    return {
        directOutsProb,
        indirectOutsProb
    }
}

const get3playersProb = (street, directOuts, indirectOuts) => {
    const directOutsProb =  ofc3players.directOuts.getIn([directOuts, street]);
    const indirectOutsProb =  ofc3players.indirectOuts.getIn([indirectOuts, street]);
    
    return {
        directOutsProb,
        indirectOutsProb
    }
}

const getCardsProbability = (street, directOuts, indirectOuts, numPlayer) => {
    
    const result = numPlayer === 3 ? get3playersProb(street, directOuts, indirectOuts) : get2playersProb(street, directOuts, indirectOuts);
    
    return {
        directOutsProb: result.directOutsProb,
        indirectOutsProb: result.indirectOutsProb
    }
}

export {
    getCardsProbability
}