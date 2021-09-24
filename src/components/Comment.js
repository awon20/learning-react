// import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignContent: "center",
  },
  comment: {
    color: "blue",
    display: "block",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  userInfo: {
    color: "blue",
    display: "block",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  userInfoName: {
    color: "black",
    display: "block",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  Avatar: {
    height: 50,
    width: 50,
  },
  commentText: {
    display: "block",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  commentDate: {
    color: "green",
    display: "block",
    alignItems: "center",
    margin: theme.spacing(1),
  },
}));

function formatDate(date) {
  return date.toLocaleDateString();
}

export function Comment(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      className={classes.root}
    >
      <Typography className={classes.comment}>
        <Typography display="block" className={classes.userInfo}>
          <Avatar
            className={classes.Avatar}
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <Typography className={classes.userInfoName}>
            {props.author.name}
          </Typography>
        </Typography>
        <Typography className={classes.commentText}>{props.text}</Typography>
        <Typography className={classes.commentDate}>
          {formatDate(props.date)}
        </Typography>
      </Typography>
    </Grid>
  );
}
