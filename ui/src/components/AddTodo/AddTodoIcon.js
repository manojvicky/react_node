import React, { Fragment } from "react";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Picker from "./Picker";
import "../../styles.css";

import { Dialog, DialogTitle, DialogActions, DialogContent, Button } from '@material-ui/core';

import "../../styles.css";
class AddTodoIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      value: "",
      checkBox: false,
      AddDescription: false,
      description: "",
      selectedDate: new Date(new Date().getTime()+86400000 )
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleAddDec = this.handleAddDec.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleClick() {
    this.setState({
      modalOpen: true,
      value: "",
      checkBox: false,
      AddDescription: false,
      description: "",
      selectedDate: new Date(new Date().getTime() + 86400000)
    });
  }
  handleClose() {
    if (this.state.modalOpen) {
      this.setState({
        modalOpen: false,
        value:"",
        checkBox: false,
        AddDescription: false,
        description: "",
        selectedDate: new Date(new Date().getTime()+86400000 )
      });
    }
  }
  handleDateChange(date) {
    this.setState({selectedDate: date});
  }
  handleCheckBox(e) {
    if (!this.state.checkBox) {
      this.setState({
        checkBox: true
      });
    } else {
      this.setState({
        checkBox: false
      });
    }
  }
  handleAddDec() {
    this.setState({ AddDescription: !this.state.AddDescription });
  }
  handleSave(){
    const {value, description, checkBox, selectedDate } = this.state;
    this.setState({
      modalOpen: false,
    });
    const bodyObj = {
      title: value,
      description,
      important: checkBox,
      endDay: selectedDate
    }
    this.props.action(bodyObj);
  }
  render() {
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
          fullWidth
        >
          <div className="TodoTitle">
            <DialogTitle style={{ float: "left" }} id="customized-dialog-title" onClose={this.handleClose}>
              Create Todo
          </DialogTitle>
            <IconButton style={{ float: "right", position: "relative", right: "12px", top: "12px" }} aria-label="Close" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="TodoContent">
            <DialogContent>
              <div className="AllContent">
                  <div className="Srow">
                    <div className="TodoCheckedBox">
                      <label className="TodoLabel">
                        Remind me
                      </label>
                      <Checkbox onChange={this.handleCheckBox} value={this.state.checkBox.toString()} color="default" />
                    </div>
                    <div className="picker">
                      <Picker selectedDate={this.state.selectedDate} handleDateChange={this.handleDateChange}/>
                    </div>
                    <div className="AddDes">
                      <Button onClick={this.handleAddDec} color="default" style={{ textTransform: "initial" }}>
                        {this.state.AddDescription ? "Hide " : "Add "} Description
                    </Button>
                    </div>
                  </div>
                <div className="Frow">
                <div className="addTodoDiv">
                  <TextField
                    label="Add To-do"
                    value={this.state.value}
                    placeholder="Enter..."
                    onChange={(e) => this.setState({ value: e.target.value })}
                    style={{ width: "100%" }}
                  />
                </div>
                  {
                    this.state.AddDescription && <div className="desDiv"><TextField
                      label="Add Description"
                      value={this.state.description}
                      placeholder="Enter..."
                      onChange={(e) => this.setState({ description: e.target.value })}
                      style={{ width: "100%" }}
                    />
                    </div>
                  }
                </div>
              </div>
            </DialogContent>
          </div>
          <div className="TodoFooter">
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                cancel
              </Button>
              <Button onClick={this.handleSave} color="primary">
                save
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
};

export default AddTodoIcon;
