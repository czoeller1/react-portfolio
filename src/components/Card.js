import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import Paper from "@material-ui/core/Paper";
// import circus from "../assets/circus.jpg";
import Typography from "@material-ui/core/Typography";

function Card({ classes, info, type, ...props }) {
  console.log(type, info);
  return (
    <>
      {" "}
      <Grid container spacing={2}>
        <Grid item style={{ width: "100px" }}>
          <img className={classes.img} alt={info.title} src={info.image} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Button
                variant="contained"
                style={{ float: "right" }}
                color="secondary"
                target="_blank"
                href={info.link}
              >
                {type === "book" ? "Goodreads" : "Recipe"}
              </Button>
              <Typography variant="h5">{info.title}</Typography>
              <Typography gutterBottom variant="h6">
                by {info.author}
              </Typography>

              <Typography gutterBottom variant="subtitle1">
                {info.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default Card;
