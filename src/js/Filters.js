import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Filters.scss';
import arrow from '/public/images/arrow.svg';
import GenresExpand from './Expanded';

export default function Filters({ updatePath }) {
    const [genresExpanded, setGenresExpanded] = useState(false);

    const toggleGenres = () => {
        setGenresExpanded(!genresExpanded);
    };

    return (
        <div className='filters'>
            <button type="button" className="btn" onClick={toggleGenres}>
                Genres
                <img src={arrow} className="arrow-icon" />
            </button>
            {genresExpanded && <GenresExpand updatePath={updatePath} />}
            <button type="button" className="btn" id='all'>
                Key
                <img src={arrow} className="arrow-icon" />
            </button>
            <button type="button" className="btn" id='all'>
                Last Modified
                <img src={arrow} className="arrow-icon" />
            </button>
            <button type="button" className="btn" id='all'>
                BPM
                <img src={arrow} className="arrow-icon" />
            </button>
            <button type="button" className="btn" id='all'>
                Custom Attributes
                <img src={arrow} className="arrow-icon" />
            </button>
        </div>
    );
}
