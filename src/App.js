// const element = <h1>Hello, {name}</h1>;
import { Comment } from "./components/Comment";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignContent: "center",
  },
}));

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/200/300?image=11",
  },
};
function App(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </Grid>
  );
}

export default App;
