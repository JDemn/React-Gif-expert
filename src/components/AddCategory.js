import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const hanleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const hanleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories(category=> [inputValue,...category]);
            setInputValue('')
        }
        
    }
    return (
        <form onSubmit = {hanleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={hanleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}