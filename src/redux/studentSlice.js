import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  nextId: 1, // To keep track of the next student ID
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      // Create a new student with a unique ID
      const newStudent = { ...action.payload, id: state.nextId };
      state.students.push(newStudent);
      state.nextId += 1; // Increment the nextId for the next student
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    editStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = action.payload; // Replace the student data with updated data
      }
    },
  },
});

export const { addStudent, deleteStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
