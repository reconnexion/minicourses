import React from 'react';
import CourseList from "../resources/Course/CourseList";

const HomePage = () => (
  <CourseList
    resource="Course"
    basePath="/Course"
    filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/available' }}
    hasCreate={false}
  />
);

export default HomePage;
