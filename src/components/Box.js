import React from 'react'

export default function Box({ value, updateStore, rowIndex, colIndex }) {
    const clickEd = () => {
        console.log(value)
        if (!value) {
            updateStore({
                type: "CLICK_MOVE", rowIndex, colIndex 
            })
        }
    }
    return (
        <div className="Box" onClick={clickEd}>
            <p>{value}</p>
        </div>
    )
}