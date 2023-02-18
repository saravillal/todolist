import { InputBase, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";

const ListTitle = ({title, listId}) => {
  const classes = useStyle();
  const[open, setOpen] = useState(true)
  const [newTitle, setNewTitle] = useState(title)
  return (
    <>
    { open ? (
      <InputBase
      value={newTitle}
      onChange={e=>setNewTitle(e.target.value)}
      autoFocus
      fullWidth
      inputProps={{className: classes.input}}
      />
    ) : (
    <div className={classes.title}>
    <Typography className={classes.titleText}>
      {title}
    </Typography>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
    </div>
    )}
    </>
    
    
  )
}

const useStyle = makeStyles(theme => ({
  title: {
    display: "flex",
    margin: theme.spacing(1)
  },
  titleText: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeigth: "bold"
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd"
    }
  }
  }))

export default ListTitle
