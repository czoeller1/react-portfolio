import React from "react";
import portrait from "../assets/portrait.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "75%",
  },
  image: {
    width: 200,
    //height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Box ms={3} my={5} p={3}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h3" gutterBottom>
                About Me
              </Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid container spacing={2}>
            <Grid item className={classes.image}>
              <img className={classes.img} alt="complex" src={portrait} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    My name is Charles Zoeller and I'm a born native of
                    Colorado. I have skiied for as long as I can remember, and
                    enjoy hitting the slopes with family and friends. I really
                    enjoy reading science fiction and fantasy novels. My
                    favorite authors are Erin Morgenstern, Maddeline Miller, and
                    Brandon Sanderson. I have also became interested in cooking
                    and baking. I've made Beef Wellington, Cheesecake, and Soft
                    Pretzels.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </main>
  );
}

export default About;
