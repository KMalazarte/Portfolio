import React from "react";
import {
  Form,
  Input,
  TextArea,
  Message,
  Button,
  Container,
  Header
} from 'semantic-ui-react'


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container
        style={{
          marginBottom: '1.0em'
        }}>
        <Header
          as="h3"
          size="large"
          style={{
            marginTop: '1.0em'
            }}> Leave Me a Message </Header>
        <Form
          onSubmit={this.submitForm}
          action="https://formspree.io/mlerpebz"
          method="POST"
        >
          <Form.Field
            control={Input}
             label='Your Email:'
             placeholder='YourEmail@email.com'
             name="email"/>
          <Form.Field
            control={TextArea}
             label='Your Email:'
             placeholder='Hey, Kevin I loved your portfolio site!'
             name="message"/>
          <Message
             success
             header='Form Completed'
             content="Got It! I'll respond to you as soon as I can."
           />
         <Message
            error
            header='Something went wrong'
            content='Oops! There was an error.'
          />
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
