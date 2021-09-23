// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Icon } from '@material-ui/core'
import Avatar from '@mui/material/Avatar';



const useStyles = makeStyles((theme) => ({
  comment: {
    color: 'red', 
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  userInfo: {
      color: 'blue', 
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(1)
  },
  userInfoName: {
    color: 'yellow',
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1)
  },
  Avatar: {
    height: 50,
    width: 50,
  },
  commentText: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1)
  },  
  commentDate: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1)
  }
}));

function formatDate(date) {
  return date.toLocaleDateString();
}

export function Comment(props) {
  const classes = useStyles();
  return (
    <Typography className={classes.comment}>
      <Typography className={classes.userInfo}>
        <Avatar 
          alt="Hello Ketty"
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
  );
}

