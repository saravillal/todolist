import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import AddCardorList from './components/AddCardorList';
import TrelloList from './components/TrelloList';
import background_image from './images/dell.jpg';
import mockData from './mockdata.js'


function App() {
  const classes = useStyle();
  const [data] = useState(mockData)
  console.log(data)
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {
data.listIds.map(listID => {
  const list = data.lists[listID]
  return <TrelloList list={list} key={listID} />
})
        }

      <div>
      <AddCardorList type="list"/>
      </div>
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
