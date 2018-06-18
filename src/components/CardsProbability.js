import React from 'react';
import times from 'lodash/times';
import { getCardsProbability } from '../utils/utils';

import './_cardsProbability.scss';

let indirectOutsIndex = -1;
const TWO_PLAYERS_STREET = 8;
const THREE_PLAYERS_STREET = 12;

class CardsProbability extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            street: 0,
            directOuts: 0,
            indirectOuts: 0,
            directOutsProb: '0%',
            indirectOutsProb: '0%'
        }

        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleDirectOutsChange = this.handleDirectOutsChange.bind(this);
        this.handleIndirectOutsChange = this.handleIndirectOutsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStreetChange (event) {
        this.setState({street: event.target.value});
    }

    handleDirectOutsChange (event) {
        this.setState({directOuts: event.target.value});
    }

    handleIndirectOutsChange (event) {
        this.setState({indirectOuts: event.target.value});
    }

    handleSubmit () {
        const { street, directOuts, indirectOuts } = this.state;
        const result = getCardsProbability(street, directOuts, indirectOuts, this.props.numPlayer);
        this.setState({
            indirectOutsProb: result.indirectOutsProb,
            directOutsProb: result.directOutsProb
        });
    }

    render () {

        const streetValue = (this.props.numPlayer === 2) ? TWO_PLAYERS_STREET : THREE_PLAYERS_STREET;

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
                                <select className="cardsProbability-dropdown" value={this.state.street} onChange={this.handleStreetChange}>
                                    {times(streetValue).map((index) => <option key={index + 1} value={index}>{index + 1}</option>)}
                                </select>
                            </td>
                            <td className="cardsProbability-tableCell">
                                <select className="cardsProbability-dropdown" value={this.state.directOuts} onChange={this.handleDirectOutsChange}>
                                    {times(15).map((index) => <option key={index + 1} value={index}>{index + 1}</option>)}
                                </select>
                            </td>
                            <td className="cardsProbability-tableCell">
                                <select className="cardsProbability-dropdown" value={this.state.indirectOuts} onChange={this.handleIndirectOutsChange}>
                                    {times(9).map((index) => 
                                        times(index + 1).map((i) => {
                                            indirectOutsIndex ++;
                                            return (
                                                <option value={indirectOutsIndex} key={i + 1}>{`${index + 1}/${i + 1}`}</option>
                                            )
                                        })
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="cardsProbability-tableAction">
                                <button onClick={this.handleSubmit}>Submit</button>
                            </td>
                            <td className="cardsProbability-tableAction">
                                <div style={{background: 'lightgray'}}>{this.state.directOutsProb}</div>
                            </td>
                            <td className="cardsProbability-tableAction">
                                <div style={{background: 'lightgray'}}>{this.state.indirectOutsProb}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CardsProbability;