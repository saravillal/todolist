import { Button, fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import ClearIcon from "@material-ui/icons/Clear"
import { MoreHoriz } from '@material-ui/icons'
import contextAPI from '../ContextAPI'

const AddCardorListTitle = ({type, setOpen, listId}) => {
  const [title, setTitle]=useState("")
  const classes = useStyle();
  const {addCard, addList} = useContext(contextAPI)

  const handleAddCardorList = () => {
    if (type === "card") {
      addCard(title, listId)
    } else {
      addList(title)
    }
    setTitle("")
    setOpen(false)
  }

  return (
    <>
    <Paper className={classes.card}>
      <InputBase 
      multiline
      value={title} 
      onBlur={()=>setOpen(false)}
      onChange={e=>setTitle(e.target.value)}
      placeholder={
        type === "card" ?
        "Enter a title for this card..." :
        "Enter list title..."
      }
      inputProps = {{className: classes.input}}
      />
    </Paper>
    <div className={classes.confirm}>
      <div className={classes.options}>
        <Button className={classes.btnConfirm} 
        onClick={handleAddCardorList}>
          {
            type === "card" ? "Add card" :
            "Add list"
          }
          </Button>
   <IconButton onClick={()=> setOpen(false)}>
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

