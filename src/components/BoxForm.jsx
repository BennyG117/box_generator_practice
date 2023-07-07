import React, { useState } from 'react'

const BoxForm = props => {

    // const {color} = props
    const {addFunction} = props

    const [boxData, setBoxData] = useState({
        bColor: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target


        setBoxData(currentData => ({ ...currentData, [name]: value }))
    }


    const formSubmit = (e) => {
        e.preventDefault()
        addFunction(boxData)


        setBoxData({
            bColor: ""
        })
    }

    return (

        <form onSubmit={formSubmit}>
            <h2>Color: </h2>
            <input onChange={handleChange} value={boxData.bColor} name="bColor" type="text" />
            <button>Add</button>
        </form>
    )



}

export default BoxForm;