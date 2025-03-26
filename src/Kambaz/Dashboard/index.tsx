/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { addEnrollment, deleteEnrollment, setEnrollments } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as enrollmentsClient from "./Enrollments/client";
import * as coursesClient from "../Courses/client";
import * as userClient from "../Account/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showFilteredCourses, setShowFilteredCourses] = useState(true);
  const toggleFilteredCourses = () => {
    setShowFilteredCourses(!showFilteredCourses);
  };
  const [mappableCourses, setMappableCourses] = useState(courses);

  const enrollIntoCourse = async (courseId: string) => {
    const enrollment = await enrollmentsClient.addEnrollmentIntoCourse(
      courseId
    );
    dispatch(addEnrollment(enrollment));
  };

  const unenrollFromCourse = async (courseId: string) => {
    await enrollmentsClient.removeEnrollmentFromCourse(courseId);
    dispatch(
      deleteEnrollment({
        user: currentUser._id,
        course: courseId,
      })
    );
    const updatedCourses = await userClient.findMyCourses();
    setMappableCourses(updatedCourses);
  };

  useEffect(() => {
    const getAllCourses = async () => {
      const allCourses = await coursesClient.fetchAllCourses();
      if (!showFilteredCourses) {
        setMappableCourses(allCourses);
      } else {
        const updatedCourses = await userClient.findMyCourses();
        setMappableCourses(updatedCourses);
      }
    };

    getAllCourses();
  }, [currentUser._id, showFilteredCourses, courses]);

  useEffect(() => {
    const getAllEnrollmentsForUser = async () => {
      const enrollments =
        await enrollmentsClient.retrieveAllEnrollmentsForUser();
      dispatch(setEnrollments(enrollments));
    };

    getAllEnrollmentsForUser();
  }, [dispatch]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard{" "}
        {currentUser.role === "STUDENT" && (
          <button
            className="btn btn-primary btn-lg float-end"
            id="wd-show-enrollments"
            onClick={toggleFilteredCourses}
          >
            Enrollments
          </button>
        )}{" "}
      </h1>{" "}
      <hr />
      {currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({mappableCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4 mb-4">
          {mappableCourses.map((course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card
                onClick={(event) => {
                  if (
                    currentUser.role === "STUDENT" &&
                    !enrollments.some(
                      (enrollment: any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )
                  ) {
                    event.preventDefault();
                    navigate("/Kambaz/Dashboard");
                  }
                }}
              >
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                    {currentUser.role === "FACULTY" && (
                      <>
                        <Button
                          variant="danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          variant="warning"
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}

                    {currentUser.role === "STUDENT" &&
                      enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      ) && (
                        <Button
                          variant="danger"
                          onClick={(event) => {
                            event.preventDefault();
                            unenrollFromCourse(course._id);
                          }}
                          className="float-end"
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </Button>
                      )}

                    {currentUser.role === "STUDENT" &&
                      !enrollments.some(
                        (enrollment: any) =>
                          enrollment.user === currentUser._id &&
                          enrollment.course === course._id
                      ) && (
                        <Button
                          variant="success"
                          id="wd-enroll-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            enrollIntoCourse(course._id);
                          }}
                          className="me-2 float-end"
                        >
                          Enroll
                        </Button>
                      )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
