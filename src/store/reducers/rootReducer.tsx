import { createSlice } from '@reduxjs/toolkit'
import { taskData } from '../../models/home'

export const root = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    tasks: [
      {
        "title": "random title",
        "project": "Project y",
        "todo_complete": true,
        "todo_assign_to": "Developer1",
        "_id": 1
      },
      {
        "title": "random title2",
        "project": "Project x",
        "todo_complete": false,
        "todo_assign_to": "Developer1",
        "_id": 2
      }
    ]
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    doneTask: (state, action) => {
      console.log(state.tasks)
      let { _id } = action.payload
      state.tasks = state.tasks.map((data) => {
        if (data._id == _id) {
          data.todo_complete = !data.todo_complete
        }
        return data
      })
      // log state change
      console.log(state.tasks)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, doneTask } = root.actions

export default root.reducer