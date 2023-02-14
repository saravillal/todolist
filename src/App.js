import { makeStyles } from '@material-ui/core';
import './App.css';
import TrelloList from './components/TrelloList';
import background_image from './images/dell.jpg';

function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
      <TrelloList></TrelloList>
      <TrelloList></TrelloList>
      <TrelloList></TrelloList>
      </div>
      </div>
  );
}

const useStyle = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    overflowY: "auto",
    backgroundImage: `url(${background_image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  container: {
    display: "flex"
  }
   }))

export default App;
