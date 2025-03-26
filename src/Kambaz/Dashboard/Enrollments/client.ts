import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const addEnrollmentIntoCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/current/courses/${courseId}`
  );
  return response.data;
};

export const removeEnrollmentFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/current/courses/${courseId}`
  );
  return response.data;
};

export const retrieveAllEnrollmentsForUser = async () => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/current/enrollments`
  );
  return response.data;
};
