import React, { ChangeEvent } from 'react'
import './task.css'
import Select from '../select/Select';
import Button from 'react-bootstrap/Button';
import { BsFillTrash3Fill, BsPen } from "react-icons/bs";
import { decrement, increment, doneTask } from '../../store/reducers/rootReducer'
import { taskProps } from '../../models/task';
import { useDispatch } from 'react-redux';



const Task = ({ selectedProject, title, completed, id }: taskProps) => {
    const dispatch = useDispatch()
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(doneTask({ id }))
    };


    return (
        <div className='task my-4'>
            <input type={"checkbox"} onChange={handleCheckboxChange} />
            <div className="project">
                <div className='project' style={{ "textDecoration": completed ? 'line-through' : 'none' }}>
                    {selectedProject}
                </div>
                <div className="title">
                    <span className='text-secondary text-break' style={{ "textDecoration": completed ? 'line-through' : 'none' }} > Title : {title}</span>
                </div>
            </div>
            <span>
                <Select />
            </span>
            <span className='btnSections'>
                <Button variant=""><BsFillTrash3Fill color='red' /></Button>
                <Button variant=""><BsPen color='indigo' /></Button>
            </span>
        </div >
    )
}

export default Task