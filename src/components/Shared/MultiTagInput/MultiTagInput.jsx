import React, { useState, useRef } from 'react';
import Input from 'antd/es/input';
import Tag from 'antd/es/tag';
import message from 'antd/es/message';

import './index.css'
const MultiTagInput = ({ data, updateData, formKey, validateAddItem, loading }) => {
    const [value, setValue] = useState([...data])
    const [valueInput, setValueInput] = useState('')
    const inputRef = useRef(null);

    async function pressEnter(e) {
        if (e.target.value) {
            let targetValue = e.target.value;
            if (value.find(each => each.toLowerCase() === targetValue.toLowerCase())) {
                message.error(`${targetValue} already exists`);
                setValueInput('')
                return;
            }
            if (await validateAddItem(targetValue)) {
                let clone = [...value, targetValue];
                setValue(clone);
                updateData(clone, formKey)
                setValueInput('')
            }
            else {
                setValueInput('');
                return
            }

        } else {
            message.error('MAT MAAN MAA CHUDA')
        }
    }
    function preventDefault(str, e) {
        e.preventDefault();
        let clone = value.filter(item => item !== str);
        setValue(clone);
        updateData(clone, formKey)
    }
    function focus() {
        inputRef.current && inputRef.current.focus()
    }
    function handleChange(e) {
        let elm = e.target;
        setValueInput(elm.value)
    }
    function keyDown(e) {
        if (e.keyCode === 13) {
            e.preventDefault()
        }
        if (e.keyCode === 8 && !valueInput) {
            let clone = value.filter(function (v, i, ar) {
                return i !== ar.length - 1
            });
            setValue(clone);
            updateData(clone, formKey)
        }
    }
    return (
        <div>
            <div onClick={focus} className='wrap'>
                <ul className='ulClass'>
                    {
                        value && value.map((item, index) => (
                            <li key={index} style={{ float: 'left' }}>
                                <Tag closable onClose={(e) => preventDefault(item, e)}>
                                    {item}
                                </Tag>
                            </li>
                        ))
                    }
                    <li style={{ float: 'left' }}>
                        <Input disabled={loading} onKeyDown={keyDown} ref={inputRef} value={valueInput} className='inputClass' onPressEnter={pressEnter} onChange={handleChange} />
                    </li>
                </ul>
            </div>
        </div>
    );
}



export default MultiTagInput