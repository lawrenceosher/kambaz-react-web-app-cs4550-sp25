/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    }, 

    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: enrollment.user,
        course: enrollment.course,
      };

      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },

    deleteEnrollment: (state, { payload: selectedEnrollment }) => {
      const currentEnrollment = state.enrollments.find(
        (enrollment: any) =>
          enrollment.course === selectedEnrollment.course &&
          enrollment.user === selectedEnrollment.user
      ) as any;

      state.enrollments = state.enrollments.filter(
        (enrollment: any) => enrollment._id !== currentEnrollment?._id
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
