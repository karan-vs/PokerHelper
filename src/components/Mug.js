import CardSlot from './CardSlot';

import './_mug.scss';

const Mug = ({ deck }) => {
    return (
        <div className="mug">
            <CardSlot cardIndex={-1} deck={deck} />
            <CardSlot cardIndex={-2} deck={deck} />
            <CardSlot cardIndex={-3} deck={deck} />
            <CardSlot cardIndex={-4} deck={deck} />
        </div>
    )
}

export default Mug;