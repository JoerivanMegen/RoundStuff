import React from 'react';
import Categories from './Categories';

export default function CategoryOverview({ types }) {
    return (
        <div className="categflex">
            {types.map((type) => (
                <Categories key={type.id} type={type} />
            ))}
        </div>
    )
}

