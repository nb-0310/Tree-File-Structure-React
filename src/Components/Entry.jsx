import React, { useState } from 'react'
import '../App.css'

const Entry = ({ name, children, depth }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div>
            {children ? (
            <button onClick={() => { setIsExpanded(!isExpanded) }} className='folder'>
                {isExpanded ? '-' : '+'} {name}
            </button>) : <div className='file'>{name}</div>
            }
            
            {isExpanded &&
                <div style={{ paddingLeft: `${depth * 20}px` }}>
                    {children && children.map(entry => (
                        <Entry name={entry.name} children={entry.children} depth={depth + 1} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Entry