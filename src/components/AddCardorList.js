import { ClassNames } from "@emotion/react"
import { Collapse, Paper, Typography, makeStyles, fade } from "@material-ui/core"
import { useState } from "react"
import AddCardorListTitle from "./AddCardorListTitle"

const AddCardorList = ({type, listId}) => {
    const [open, setOpen] = useState(true)
    const classes = useStyle();

  return (
    <div className={ClassNames.root}>
      <Collapse in={open}>
        <AddCardorListTitle type={type} setOpen={setOpen} listId={listId}/>
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCardorListTitle} onClick={()=> setOpen(true)}>
            <Typography>
              {
              type === "card" ?
              " + Add a card" :
              " + Add another list"
              }
            </Typography>
        </Paper> 
      </Collapse>
    </div>
  )
}

const useStyle = makeStyles(theme => ({
    root: {
     width: "300px",
     marginTop: theme.spacing(1)
    },
    addCardorListTitle: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(0,1,1,1),
        background: "#ebecf0",
        "&:hover": {
          backgroundColor: fade("#000", 0.25)
        }
    }
     }))

export default AddCardorList
