import React, { ChangeEvent, FormEvent, useState } from 'react'
import Form from 'react-bootstrap/esm/Form';
import { stateType, taskData } from '../../models/home';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, changeScreen } from '../../store/reducers/rootReducer'
import { env } from "../../enviorment";
import './addTodo.css';
import Select from '../../components/select/Select';


const AddTodo = () => {
    const tasksLength: Array<taskData> = useSelector((state: stateType) => state?.root?.tasks);
    const dispatch = useDispatch()
    const [data, setData] = useState({
        "title": "edit this task",
        "project": "Project2",
        "todo_complete": false,
        "todo_assign_to": "Developer1",
        "_id": tasksLength.length + 1,
    })

    let save = (event: FormEvent) => {
        dispatch(addTask(data))
        dispatch(changeScreen({ screen: 'list' }))

    }
    // useEffect(() => {
    //     // console.log(data)
    //     return () => {

    //     }
    // }, [data]);

    return (
        <>
            <div className="sec">
                <p className='todoHeading'>Add To Do</p>
            </div>
            <div className='sec2'>

                <div>
                    <Form.Label htmlFor="inputPassword5">Select Project</Form.Label>
                    <Select disable={data.todo_complete} defaultValue={data.project} options={env.projectOptions} changeEvent={(event: ChangeEvent<HTMLSelectElement>) => {
                        setData((prev) => {
                            return {
                                ...prev,
                                project: event.target.value
                            }
                        })
                    }} />
                </div>
                <div>
                    <Form.Label htmlFor="inputPassword5">Title</Form.Label>
                    <Form.Control
                        type="text"
                        id="title"
                        placeholder={'Enter title'}
                        aria-describedby=""
                        onChange={(event) => {
                            setData((prev) => {
                                return {
                                    ...prev,
                                    title: event.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div>
                    <Form.Label htmlFor="inputPassword5">Assign To</Form.Label>
                    <Select disable={data.todo_complete} defaultValue={data.todo_assign_to} options={env.devOptions} changeEvent={(event: ChangeEvent<HTMLSelectElement>) => {
                        setData((prev) => {
                            return {
                                ...prev,
                                todo_assign_to: event.target.value
                            }
                        })
                    }} />
                </div>
            </div>
            <div className='sec saveBtn'>
                <Button onClick={save}>Save</Button>
            </div>
        </>
    )
}

export default AddTodo