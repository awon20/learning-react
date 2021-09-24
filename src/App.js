// const element = <h1>Hello, {name}</h1>;
import { Comment } from "./components/Comment";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/200/300?image=11",
  },
};
function App(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container item xs="auto">
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </Grid>
    </Box>
  );
}

export default App;
