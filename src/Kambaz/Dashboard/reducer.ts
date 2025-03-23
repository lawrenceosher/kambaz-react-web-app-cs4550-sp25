import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: enrollment.user,
        course: enrollment.course,
      };

      state.enrollments = [...state.enrollments, newEnrollment];
    },

    deleteEnrollment: (state, { payload: selectedEnrollment }) => {
      const currentEnrollment = state.enrollments.find(
        (enrollment) =>
          enrollment.course === selectedEnrollment.course &&
          enrollment.user === selectedEnrollment.user
      );

      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== currentEnrollment?._id
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
