import { makeStyles, Typography } from "@material-ui/core";

const ListTitle = () => {
  const classes = useStyle();
  return (
    <div className={classes.title}>
    <Typography className={classes.titleText}>
      To do
    </Typography>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
    </div>
    
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
  }
  }))

export default ListTitle
