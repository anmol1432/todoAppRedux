import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/reducers/rootReducer'
import Date from "../../components/date/Date";
import Task from "../../components/task/Task";
import axios from 'axios';
import { env } from "../../enviorment";
import { home, stateType, taskData } from "../../models/home";
import './home.css'



const Home = ({ title }: home) => {
    const [data, setData] = useState(Array<taskData>)
    const state = useSelector((state: stateType) => state?.root?.tasks);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(state)
        // axios.get(env.apiBase).then((response) => setData(response.data)).catch((error) => console.log(error))
    }, [])
    return (
        <>
            <div className='centerDiv'>
                <h2 className='heading'>{title}</h2>
                <div className='mainBox'>
                    <div className='sec-1'>
                        <Date />
                        <span className='svg'>
                            <svg viewBox="0 -0.5 25 25" fill="#ff5961" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.0002C5.50024 8.66068 7.85944 5.78639 11.1348 5.1351C14.4102 4.48382 17.6895 6.23693 18.9673 9.32231C20.2451 12.4077 19.1655 15.966 16.3887 17.8212C13.6119 19.6764 9.91127 19.3117 7.55 16.9502C6.23728 15.6373 5.49987 13.8568 5.5 12.0002Z" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.875 11.2502C9.46079 11.2502 9.125 11.586 9.125 12.0002C9.125 12.4145 9.46079 12.7502 9.875 12.7502V11.2502ZM12.5 12.7502C12.9142 12.7502 13.25 12.4145 13.25 12.0002C13.25 11.586 12.9142 11.2502 12.5 11.2502V12.7502ZM12.5 11.2502C12.0858 11.2502 11.75 11.586 11.75 12.0002C11.75 12.4145 12.0858 12.7502 12.5 12.7502V11.2502ZM15.125 12.7502C15.5392 12.7502 15.875 12.4145 15.875 12.0002C15.875 11.586 15.5392 11.2502 15.125 11.2502V12.7502ZM13.25 12.0002C13.25 11.586 12.9142 11.2502 12.5 11.2502C12.0858 11.2502 11.75 11.586 11.75 12.0002H13.25ZM11.75 14.6252C11.75 15.0395 12.0858 15.3752 12.5 15.3752C12.9142 15.3752 13.25 15.0395 13.25 14.6252H11.75ZM11.75 12.0002C11.75 12.4145 12.0858 12.7502 12.5 12.7502C12.9142 12.7502 13.25 12.4145 13.25 12.0002H11.75ZM13.25 9.37524C13.25 8.96103 12.9142 8.62524 12.5 8.62524C12.0858 8.62524 11.75 8.96103 11.75 9.37524H13.25ZM9.875 12.7502H12.5V11.2502H9.875V12.7502ZM12.5 12.7502H15.125V11.2502H12.5V12.7502ZM11.75 12.0002V14.6252H13.25V12.0002H11.75ZM13.25 12.0002V9.37524H11.75V12.0002H13.25Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                    <div className='sec-2'>
                        {
                            state.map((data: taskData) => {
                                return <Task
                                    selectedProject={data.project}
                                    title={data.title}
                                    completed={data.todo_complete}
                                    id={data._id}
                                    key={data._id}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home