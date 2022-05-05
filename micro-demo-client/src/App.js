import "./App.css";
import { PostCreate } from "./PostCreate";
import { PostList } from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h1>Creat Post</h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
