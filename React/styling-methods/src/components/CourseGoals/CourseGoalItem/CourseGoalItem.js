import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" >
      {props.children}
      <i onClick={deleteHandler} className="gg-close"></i>
    </li>
  );
};

export default CourseGoalItem;
