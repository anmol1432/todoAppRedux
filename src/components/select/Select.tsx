import React from 'react'
import Form from 'react-bootstrap/Form';
import { select } from '../../models/home';


const Select = ({ defaultValue, changeEvent, options, disable }: select) => {
    return (
        <>
            <Form.Select disabled={disable} aria-label="Default select example" value={defaultValue ? defaultValue : ''} onChange={changeEvent ? changeEvent : () => ''}>
                {
                    options.map(data => {
                        return (<>
                            <option key={data} value={data} >{data}</option>
                        </>)
                    })
                }

            </Form.Select>
        </>
    )
}

export default Select