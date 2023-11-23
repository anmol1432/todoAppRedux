import { createSlice } from '@reduxjs/toolkit'

export const root = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    tasks: [
      {
        "title": "random title",
        "project": "Project1",
        "todo_complete": true,
        "todo_assign_to": "Developer1",
        "_id": 1
      },
      {
        "title": "random title2",
        "project": "Project2",
        "todo_complete": false,
        "todo_assign_to": "Developer2",
        "_id": 2
      }
    ],
    screen: 'list'
  },
  reducers: {
    doneTask: (state, action) => {
      let { _id } = action.payload
      state.tasks = state.tasks.map((data) => {
        if (data._id === _id) {
          data.todo_complete = !data.todo_complete
        }
        return data
      })
      // log state change
    },

    changeScreen(state, action) {
      state.screen = action.payload.screen
    },

    addTask(state, action) {
      state.tasks.push(action.payload)
    },

    changeDev(state, action) {
      let { selectedProject, id } = action.payload
      state.tasks = state.tasks.map((data) => {
        if (data._id === id) {
          data.todo_assign_to = selectedProject
        }
        return data
      })
    },

    deleteTask(state, action) {
      let { _id } = action.payload
      const updatedArray = state.tasks.filter(item => item._id !== _id)
      state.tasks = updatedArray
    }
  }
})

// Action creators are generated for each case reducer function
export const { doneTask, changeScreen, addTask, changeDev, deleteTask } = root.actions

export default root.reducer