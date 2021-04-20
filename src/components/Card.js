import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import Paper from "@material-ui/core/Paper";
// import circus from "../assets/circus.jpg";
import Typography from "@material-ui/core/Typography";

function Card({ classes, book, ...props }) {
  console.log(book);
  return (
    <>
      {" "}
      <Grid container spacing={2}>
        <Grid item style={{ width: "100px" }}>
          <img className={classes.img} alt={book.title} src={book.image} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Button
                variant="contained"
                style={{ float: "right" }}
                color="secondary"
                target="_blank"
                href={book.link}
              >
                Goodreads
              </Button>
              <Typography variant="h5">{book.title}</Typography>
              <Typography gutterBottom variant="h6">
                by {book.author}
              </Typography>

              <Typography gutterBottom variant="subtitle1">
                {book.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default Card;
