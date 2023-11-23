import React, { ChangeEvent } from 'react'
import './task.css'
import Select from '../select/Select';
import Button from 'react-bootstrap/Button';
import { BsFillTrash3Fill, BsPen } from "react-icons/bs";
import { doneTask, changeDev, deleteTask } from '../../store/reducers/rootReducer'
import { taskProps } from '../../models/task';
import { useDispatch } from 'react-redux';
import { env } from '../../enviorment';



const Task = ({ project, selectedProject, title, completed, id }: taskProps) => {
    const dispatch = useDispatch()
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(doneTask({ _id: id }))
        event.stopPropagation()
    };


    return (
        <div className='task my-4'>
            <input type={"checkbox"} checked={completed} onChange={handleCheckboxChange} />
            <div className="project">
                <div className='project' style={{ "textDecoration": completed ? 'line-through' : 'none' }}>
                    {project}
                </div>
                <div className="title">
                    <span className='text-secondary text-break' style={{ "textDecoration": completed ? 'line-through' : 'none' }} > Title : {title}</span>
                </div>
            </div>
            <span>
                <Select disable={completed} defaultValue={selectedProject} options={env.devOptions}
                    changeEvent={(event: any) => dispatch(changeDev({ selectedProject: event.target.value, id }))} />
            </span>
            <span className='btnSections'>
                <Button variant=""><BsFillTrash3Fill color='red' onClick={() => dispatch(deleteTask({ _id: id }))} /></Button>
                <Button variant=""><BsPen color='indigo' /></Button>
            </span>
        </div >
    )
}

export default Task