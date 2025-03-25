/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        availableFromDate: assignment.availableFromDate,
        availableUntilDate: assignment.availableUntilDate,
        dueDate: assignment.dueDate,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === updatedAssignment._id
          ? updatedAssignment
          : assignment
      ) as any;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
