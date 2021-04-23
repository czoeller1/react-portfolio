import React from "react";
import portrait from "../assets/portrait.jpg";
import circus from "../assets/circus.jpg";
import circe from "../assets/circe.jpg";
import martian from "../assets/martian.jpg";
import mistborn from "../assets/mistborn.jpg";
import dune from "../assets/dune.jpg";
import ender from "../assets/ender.jpg";
import cheesecake from "../assets/cheesecake.jpg";
import pretzel from "../assets/pretzel.jpg";
import toffee from "../assets/toffee.jpg";
import butterChicken from "../assets/butterChicken.jpg";
import biscuits from "../assets/biscuits.jpg";
import honeyChicken from "../assets/honeyChicken.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "../components/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "60%",
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

const books = [
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    image: circus,
    link: "https://www.goodreads.com/book/show/9361589-the-night-circus",
    description: `The circus arrives without warning. No announcements precede it.
    It is simply there, when yesterday it was not. Within the
    black-and-white striped canvas tents is an utterly unique
    experience full of breathtaking amazements. It is called Le
    Cirque des Rêves, and it is only open at night...`,
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    image: circe,
    link: "https://www.goodreads.com/book/show/35959740-circe",
    description: `In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child - not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power - the power of witchcraft, which can transform rivals into monsters and menace the gods themselves...`,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    image: martian,
    link: "https://www.goodreads.com/book/show/18007564-the-martian",
    description: `Six days ago, astronaut Mark Watney became one of the first people to walk on Mars.

    Now, he’s sure he’ll be the first person to die there.
    
    After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive...`,
  },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    image: mistborn,
    link: "https://www.goodreads.com/book/show/68428.Mistborn",
    description: `For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible.Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler's most hellish prison...`,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    image: dune,
    link: "https://www.goodreads.com/book/show/44767458-dune",
    description: `Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...`,
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    image: ender,
    link: "https://www.goodreads.com/book/show/375802.Ender_s_Game",
    description: `Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. The only way to find out is to throw Ender into ever harsher training, to chip away and find the diamond inside, or destroy him utterly. Ender Wiggin is six years old when it begins. He will grow up fast...`,
  },
];

const recipes = [
  {
    title: "The Best Cheesecake Recipe",
    author: "Sugar Spun Run",
    image: cheesecake,
    link: "https://sugarspunrun.com/best-cheesecake-recipe/",
    description: `An easy to follow recipe for a creamy cheesecake with a graham cracker crust. Takes about 20 minutes to prepare, and the hardest part is waiting 6 hours for it to cool in the fridge.`,
  },
  {
    title: "Lina Kulchinsky's Soft Pretzels",
    author: "Martha Stuart Living",
    image: pretzel,
    link: "https://www.marthastewart.com/1140962/soft-pretzels",
    description: `A simple recipe for homemade soft pretzels, best eaten fresh out of the oven. If you're feeling fancy, I recommend using truffle salt instead of regular coarse salt.`,
  },
  {
    title: "Grandma Nash’s Best Butter Almond English Toffee",
    author: "House of Nash Eats",
    image: toffee,
    link: "https://houseofnasheats.com/best-butter-almond-english-toffee/",
    description: `A delicious almond toffee recipe that only takes about 25 minutes. This recipe does use a candy thermometer, but it's worth the investment.`,
  },
  {
    title: "Butter Chicken",
    author: "Amandeep Sharma",
    image: butterChicken,
    link: "https://cooking.nytimes.com/recipes/1016754-butter-chicken",
    description: `'In its purest form, it is yogurt-and-spice-marinated chicken dressed in a velvety red bath comprising butter, onions, ginger and tomatoes scented with garam masala, cumin and turmeric, with a cinnamon tang.' 
       Note: you will probably have leftover cinnamon sticks for a while.`,
  },
  {
    title: "Easy Homemade Biscuits",
    author: "Sugar Spun Run",
    image: biscuits,
    link:
      "https://sugarspunrun.com/easy-homemade-biscuits/#wprm-recipe-container-13245",
    description: `Quick and Easy recipe for buttery biscuits, great for breakfast or as a side.`,
  },
  {
    title: "15-Minute Honey Garlic Chicken",
    author: "Kathryn Doherty",
    image: honeyChicken,
    link:
      "https://www.familyfoodonthetable.com/15-minute-honey-garlic-chicken/",
    description: `A perfect meal that only takes 15 minutes to complete. Tastes delicious and is easy to clean up.`,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function getProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <img className={classes.img} alt="me" src={portrait} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    My name is Charles Zoeller and I'm a software developer from
                    Denver, Colorado. I first learned how to code when I was 16,
                    and have loved it ever since. I enjoy creating practical
                    code that I can watch come together to form a polished
                    product. In a way though, I've been interested in coding for
                    as long as I can remember. To me, coding is the process of
                    taking small, predefined units and combining them together
                    in a specific way to form something else entirely, just like
                    my favorite childhood toy, LEGOs. And while learning about
                    the fundamental principles that those pieces are designed
                    around is interesting, my passion has always been for how
                    they interact together.
                    <br />
                    <br />
                    Outside of programming, I am passionate about skiing and
                    camping. I have skied for as long as I can remember, and
                    enjoy hitting the slopes with family and friends. I've gone
                    on many camping trips, either with the Boy Scouts or with
                    family friends, all over Colorado.The best part of camping
                    is living in and exploring different environments and
                    landscapes. Otherwise, I have fun playing multiplayer video
                    games with friends, or strategy games by myself, and talking
                    about game design with anyone who will listen. I also
                    appreciate science fiction and fantasy novels, and have a
                    passion for cooking and baking. I've included some of my
                    favorite books and recipes below, but feel free to contact
                    me for additional recommendations or personal information.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          className={classes.paper}
          style={{ width: "60%", margin: "auto", marginTop: "1rem" }}
        >
          <Typography variant="h3" gutterBottom>
            Recommendations
          </Typography>
          <hr />
          <Grid
            container
            spacing={2}
            style={{
              width: "100%",
              margin: "auto",
              outline: "2px solid black",
            }}
          >
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
              >
                <Tab label="Books" {...getProps(0)} />
                <Tab label="Recipes" {...getProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel style={{ width: "100%" }} value={value} index={0}>
              <Card classes={classes} type="book" info={books[0]} />
              <hr />
              <Card classes={classes} type="book" info={books[1]} />
              <hr />
              <Card classes={classes} type="book" info={books[2]} />
              <hr />
              <Card classes={classes} type="book" info={books[3]} />
              <hr />
              <Card classes={classes} type="book" info={books[4]} />
              <hr />
              <Card classes={classes} type="book" info={books[5]} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Card classes={classes} type="recipe" info={recipes[0]} />
              <hr />
              <Card classes={classes} type="recipe" info={recipes[1]} />
              <hr />
              <Card classes={classes} type="recipe" info={recipes[2]} />
              <hr />
              <Card classes={classes} type="recipe" info={recipes[3]} />
              <hr />
              <Card classes={classes} type="recipe" info={recipes[4]} />
              <hr />
              <Card classes={classes} type="recipe" info={recipes[5]} />
            </TabPanel>
          </Grid>
        </Paper>
      </Box>
    </main>
  );
}

export default About;
