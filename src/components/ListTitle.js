import { InputBase, makeStyles, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import contextAPI from "../ContextAPI";

const ListTitle = ({title, listId}) => {
  const classes = useStyle();
  const[open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const {updateListTitle} = useContext(contextAPI)

 const handleBlur = () => {
    updateListTitle(newTitle, title, listId)
    setOpen(false)
  }
  return (
    <>
    { open ? (
      <InputBase
      value={newTitle} 
      onChange={e=>setNewTitle(e.target.value)}
      onBlur={handleBlur}
      autoFocus
      fullWidth
      inputProps={{className: classes.input}}
      />
    ) : (
    <div className={classes.title}>
    <Typography className={classes.titleText} onClick={()=>setOpen(true)}>
      {title}
    </Typography>
    </div>
    )}
    </>
  )
}

const useStyle = makeStyles(theme => ({
  title: {
    display: "flex",
    fontWeigth: "bold",
    padding: theme.spacing(1,1,1,2),
  },
  titleText: {
    fontSize: "1.2rem",
    fontWeigth: "bold",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    }
  }
  }))

export default ListTitle
