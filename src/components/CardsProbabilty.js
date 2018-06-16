import './_cardsProbability.scss';

const CardsProbability = () => {
    return (
        <div className="cardsProbability">
            <table className="cardsProbability-table">
                <thead>
                    <th>Street</th>
                    <th>Direct Outs</th>
                    <th>Indirect Outs</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="cardsProbability-tableCell">
                            <select className="cardsProbability-dropdown">
                                <option>1</option>
                            </select>
                        </td>
                        <td className="cardsProbability-tableCell">
                            <select className="cardsProbability-dropdown">
                                <option>1</option>
                            </select>
                        </td>
                        <td className="cardsProbability-tableCell">
                            <select className="cardsProbability-dropdown">
                                <option>1</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CardsProbability;