import React from 'react';
import { Input } from 'semantic-ui-react';
import '../../assets/styles/common.css';

export default function InputComp({ label, value, setterFunction }) {
    return (
        <div className='opt-commonUI-input-container'>
            {label ? <div>{label}</div> : ''}
            <Input value={value} onChange={(e) => setterFunction(e.target.value)} />
        </div>
    )
}