import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Project({ classes, ...props }) {
  return (
    <Grid item xs justify="center" style={{ margin: "2%" }}>
      <Paper className={classes.paper}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            {props.title}
          </Typography>
        </Grid>

        <hr />

        <Grid item>
          <img className={classes.img} alt="complex" src={props.image} />
        </Grid>

        <Grid container>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
              {props.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">{props.details}</Typography>
          </Grid>
        </Grid>

        <Grid container style={{ flexGrow: 1, marginTop: 2 }} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="space-evenly" spacing={3}>
              <Grid item>
                <Button
                  href={props.site}
                  variant="contained"
                  target="blank"
                  color="secondary"
                >
                  View Site
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href={props.repository}
                  target="blank"
                  variant="contained"
                  color="secondary"
                >
                  View Repository
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Project;
