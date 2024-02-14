import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class FormComponent extends Component {
  state = {
    username: "",
    city: "",
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    alert(this.state.username);
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="txtUsername">UserName</Label>
            <Input
            name="username"
              onChange={this.onChangeHandler}
              type="text"
              id="txtUsername"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="txtCity">City</Label>
            <Input
            name="city"
              onChange={this.onChangeHandler}
              type="text"
              id="txtCity"
            ></Input>
          </FormGroup>
          <Button onClick={this.onSubmitHandler} color="primary">
            Save
          </Button>
        </Form>
        <h1>{this.state.username} </h1>
        <h1>{this.state.city} </h1>
      </div>
    );
  }
}

export default FormComponent;
