import React from 'react';
import { addElipsis } from '../utils/CommonUtils';

const Card = ({ note }) => {
    return (
        <>
            <div className="card">
                <h2 className="card-heading">{addElipsis(note.heading, 20)}</h2>
                <p className="card-description">{addElipsis(note.description, 100)}</p>
            </div>
        </>
    )
}
Card.defaultProps = {
    heading: "The heading of Card",
    description: "The description of the card."
}

export default Card
// {addElipsis(props.description, 100)}
// addElipsis(props.heading, 20)}