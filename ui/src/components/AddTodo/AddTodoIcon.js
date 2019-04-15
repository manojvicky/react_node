import React from "react";
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

import "../../styles.css";
const AddTodoIcon = () => {
  return (
    <IconButton color="inherit">
        <MoreIcon />
    </IconButton>
  );
};

export default AddTodoIcon;
