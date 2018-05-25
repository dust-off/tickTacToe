import React from 'react'
import Box from './Box'


export default function Row({ rows, updateStore, rowIndex }) {
    return (
        <div className="Row">
            {rows.map((row, index) => {
                return (
                    <Box
                        key={index}
                        colIndex={index}
                        rowIndex={rowIndex}
                        value={row}
                        updateStore={updateStore}
                    />
                )
            })}
        </div>
    )
}