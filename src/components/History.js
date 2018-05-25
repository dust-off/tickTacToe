import React from 'react';

export default function History({ history, timeTravel }) {
    return (
        <div>
            {history.map((state, index) => {
                return (
                    <div className="History" key={index} onClick={() => { timeTravel(index) }}>
                        {`Game State ${index}`}
                    </div>
                )
            })}
        </div>
    )
}