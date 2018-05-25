import React from 'react'
import Row from './Row'

export default function Board({ boardMatrix, updateStore }) {
    return(
        <div className="Board">
            {boardMatrix.map((row, index) => {
                return (
                    <Row
                        key={index}
                        rowIndex={index}
                        rows={row}
                        updateStore={updateStore}
                    />
                )
            })}
        </div>
    )
}