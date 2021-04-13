import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const axios = require("axios");
const instance = axios.create({
  baseURL: "https://api.sendinblue.com/v3/smtp/email",
  timeout: 1000,
  headers: {
    accept: "application/json",
    "api-key":
      "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",
    "content-type": "application/json",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "75%",
    marginTop: "2%",
    height: "100%",
    backgroundColor: "white",
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "98%",
    },
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      paddingTop: "0.5em",
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2),
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function sendMail(sender, message) {
    console.log(sender.name, sender.email, message);
    instance
      .post("/", {
        sender: {
          name: sender.name,
          email: sender.email,
        },
        to: [
          {
            email: "charles.zoeller1@gmail.com",
            name: "Charles Zoeller",
          },
        ],
        subject: "Website Communication",
        htmlContent:
          "<html><head></head><body><h1>This message was sent from my website contact form</h1><br/><p>" +
          message +
          "</p></body></html>",
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h3">Contact</Typography>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          color="secondary"
          label="Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          color="secondary"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          color="secondary"
          label="Message"
          value={message}
          onChange={handleMessageChange}
          multiline
          rows={6}
          variant="outlined"
        />
      </div>
      <Button
        color="secondary"
        size="large"
        onClick={() => sendMail({ email: email, name: name }, message)}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}

export default Contact;
