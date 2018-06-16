import React from 'react';
import times from 'lodash/times';

import './_cardsProbability.scss';

class CardsProbability extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="cardsProbability">
                <table className="cardsProbability-table">
                    <thead>
                        <tr>
                            <th>Street</th>
                            <th>Direct Outs</th>
                            <th>Indirect Outs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cardsProbability-tableCell">
                                <select className="cardsProbability-dropdown">
                                    {times(12).map((index) => <option key={index + 1} value={index}>{index + 1}</option>)}
                                </select>
                            </td>
                            <td className="cardsProbability-tableCell">
                                <select className="cardsProbability-dropdown">
                                    {times(15).map((index) => <option key={index + 1} value={index}>{index + 1}</option>)}
                                </select>
                            </td>
                            <td className="cardsProbability-tableCell">
                                <select className="cardsProbability-dropdown">
                                    {times(9).map((index) => 
                                        times(index + 1).map((i) => <option key={i + 1}>{`${index + 1}/${i + 1}`}</option>)
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="cardsProbability-tableAction">
                                <button>Submit</button>
                            </td>
                            <td colSpan="2" className="cardsProbability-tableAction">
                                <div style={{background: 'lightgray'}}>40%</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CardsProbability;