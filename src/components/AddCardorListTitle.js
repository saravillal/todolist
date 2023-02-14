import { Button, fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import React, { useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import { MoreHoriz } from '@material-ui/icons'

const AddCardorListTitle = () => {
  const [title, setTitle]=useState("")
  const classes = useStyle();
  return (
    <>
    <Paper className={classes.card}>
      <InputBase 
      multiline
      value={title} onChange={e=>setTitle(e.target.value)}
      placeholder="Enter a title for this card..."
      inputProps = {{className: classes.input}}
      />
    </Paper>
    <div className={classes.confirm}>
      <div className={classes.options}>
        <Button className={classes.btnConfirm}>Add card</Button>
   <IconButton>
      <ClearIcon></ClearIcon>
      </IconButton>
      </div>
      <IconButton>
      <MoreHoriz/>
      </IconButton>
  </div>
    </>
  )
}

const useStyle = makeStyles(theme => ({
  card: {
    width:"280px",
    margin: theme.spacing(0,1,1,1),
    paddingBottom: theme.spacing(4)   
  },
  input: {
    margin: theme.spacing(1)
  },
  confirm: {
    display: "flex",
    margin: theme.spacing(0,1,1,1)
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAC44", 0.75)
    }
  },
  options: {
    flexGrow: 1
  }
   }))

export default AddCardorListTitle

