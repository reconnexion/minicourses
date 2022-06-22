import React from 'react';
import { useGetList } from "react-admin";

const CourseRegistrantsField = ({ record, resource, basePath, ...rest }) => {
  const { ids, loading, error } = useGetList(
    'Registration',
    { page: 1, perPage: 1000 },
    {},
    { 'tutor:course': record?.id },
    { enabled: !!(record?.id) }
  );

  if( loading || error ) return null;

  return <span {...rest}>{ids.length} participants</span>
};

export default CourseRegistrantsField;
