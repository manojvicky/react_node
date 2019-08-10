import React, {Fragment} from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Modal from '@material-ui/core/Modal';
// import AddTodo from "./AddTodo.container";
// import Button from '@material-ui/core/Button';
import {Dialog, DialogTitle, DialogActions, DialogContent, Button} from '@material-ui/core';

import "../../styles.css";
class AddTodoIcon extends React.Component{
  constructor(){
    super();
    this.state = {
      modalOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClick(){
    this.setState({
      modalOpen: true
    });
  }
  handleClose(){
    if(this.state.modalOpen){
      this.setState({
        modalOpen: false
      });
    }
  }
  render(){
    return (
      <div className="addTodoModal">
          <Icon className="addCircle" onClick={this.handleClick}>
             add_circle
          </Icon>
          <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.modalOpen}
          disableBackdropClick
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Modal title
            <IconButton aria-label="Close" onClick={this.handleClose}>
          <CloseIcon />
        </IconButton>
          </DialogTitle>
          <DialogContent>
            yoo baby
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

export default AddTodoIcon;
