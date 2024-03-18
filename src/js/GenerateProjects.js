import React, {useEffect, useState} from 'react'
import './GenerateProjects.scss'
function Project({name,date,size,completion}) {
    return (
        <div>
                <p id = 'borders'>
                    <span id = 'projects'>
                        <span id = 'name'>{name}</span>
                        <span id = 'date'>{date}</span>
                        <span id = 'size'>{size}</span>
                        <span id = 'completion'>{completion}</span>
                    </span>
                </p>
            
            
        </div>
    )
}

export default function GenerateProjects({path}) {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let counter = 0;
        fetch(path)
        .then(response => response.json())
        .then(info => {
            setData(info);
            counter = info.length;
            setTotal(counter)
        })
        .catch(error => console.error('Error fetching project', error))
    }, [path])
    return (
        <div className='projectList'>
            <h1 id = 'projectSize'>
                {total} Projects
            </h1>
            <p id='headers'>
                <span id='headersSpan'>
                    <span id='nameHeader'>Name</span>
                    <span id='dateHeader'>Date&nbsp;Created</span>
                    <span id='sizeHeader'>Size</span>
                    <span id='completionHeader'>Completion</span>
                </span>
                
            </p>
            {data && data.map((project, index) => (
                <Project
                key={index}
                name={project.name}
                date={project.date_created}
                size={project.size}
                completion={project.completion}
                />
            ))}
        </div>
    )
}