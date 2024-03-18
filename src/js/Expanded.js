import React from 'react';
import './ExpandedFilters.scss';

export default function Expanded({ updatePath }) {

    const updatePathOnClick = (newPath) => {
        updatePath(newPath);
    };

    return (
        <div className='genres-expand'>
            <div className='buttons'>
                <button type="button" className="btn btn-genre" onClick={() => updatePathOnClick('http://localhost:3000/db/genre/rock')}>
                    Rock
                </button>
                <button type="button" className="btn btn-genre"  onClick={() => updatePathOnClick('http://localhost:3000/db/genre/pop')}>
                    Pop
                </button>
                <button type="button" className="btn btn-genre"  onClick={() => updatePathOnClick('http://localhost:3000/db/genre/jazz')}>
                    Jazz
                </button>
                <button type="button" className="btn btn-genre" onClick={() => updatePathOnClick('http://localhost:3000/db/genre/country')}>
                    Country
                </button>
            </div>
            
        </div>
    );
}
