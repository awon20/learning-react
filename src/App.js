// const element = <h1>Hello, {name}</h1>;
import { Comment } from "./components/Comment";

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
    <div className="App">
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      ,
    </div>
  );
}

export default App;
