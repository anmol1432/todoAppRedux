import React from 'react'
import Form from 'react-bootstrap/Form';


const Select = () => {
    return (
        <>
            <Form.Select aria-label="Default select example">
                <Form.Label> Select developer</Form.Label>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </>
    )
}

export default Select