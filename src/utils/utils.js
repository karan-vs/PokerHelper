import { ofc3players } from '../constants';

const getCardsProbability = (street, directOuts, indirectOuts) => {
    const directOutsProb =  ofc3players.directOuts.getIn([directOuts, street]);
    const indirectOutsProb =  ofc3players.indirectOuts.getIn([indirectOuts, street]);
    
    return {
        directOutsProb,
        indirectOutsProb
    }
}

export {
    getCardsProbability
}