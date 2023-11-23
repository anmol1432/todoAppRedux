import React from 'react'
import { useSelector } from 'react-redux'
import Date from "../../components/date/Date";
import Task from "../../components/task/Task";
// import axios from 'axios';
// import { env } from "../../enviorment";
import { home, stateType, taskData } from "../../models/home";
import './home.css'
import AddBtn from '../../components/addBtn/AddBtn';
// import { JsxElement } from 'typescript';
import AddTodo from '../addTodo/addTodo';



const Home = ({ title }: home) => {
    // const [data, setData] = useState(Array<taskData>)
    const toogleScreen = useSelector((state: stateType) => state?.root?.screen);
    const state = useSelector((state: stateType) => state?.root?.tasks);

    // useEffect(() => {
    //     console.log(state)
    //     // axios.get(env.apiBase).then((response) => setData(response.data)).catch((error) => console.log(error))
    // }, [])

    const renderContent = () => {
        switch (toogleScreen) {
            case 'list':
                return (<>
                    <div className='sec-1'>
                        <Date />
                        <AddBtn />
                    </div><div className='sec-2'>
                        {state.length ? state?.map((data: taskData) => {
                            return <Task
                                project={data.project}
                                selectedProject={data.todo_assign_to}
                                title={data.title}
                                completed={data.todo_complete}
                                id={data._id}
                                key={data._id} />;
                        }) : <><p>please add task</p></>}
                    </div>
                </>)
            case 'add':
                return (<>
                    <AddTodo />
                </>)
            default:
                return (<> <p>loading....</p> </>)
        }
    };

    return (
        <>
            <div className='centerDiv'>
                <h2 className='heading'>{title}</h2>
                <div className='mainBox'>
                    {
                        renderContent()
                    }
                </div>
            </div>
        </>
    )
}


export default Home