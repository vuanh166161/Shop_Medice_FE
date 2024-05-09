import React from 'react'
import { WrapperInputStyle } from './InputForm'

const InputForm = (props) => {
    const { placeholder = 'Enter', ...rests } = props
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnchangeInput} />
    )
}

export default InputForm