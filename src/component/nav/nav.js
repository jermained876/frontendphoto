import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import './nav.css'




const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor:'#ddd000',
    marginBottom:'0px',
   
  },
  toolbar: {
    flexWrap: 'wrap',
    marginTop:'0px',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#FFFFFF',
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: '#FFFFFF',
    },
    "&:active": {
      color: '#FFFFFF',
    },
    "&:visted": {
      color: '#FFFFFF',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: '#FFFFFF',
    padding:'10px',
    textDecoration:'none',
    
   
  },


  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function Nav() {

  const classes = useStyles();
  const history = useHistory()
  const [{user}, dispatch] = useStateValue()

  const openLogin = () =>{
    console.log('test')
    history.push('/login')
  }



    return (
      <AppBar className='abar' position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inheritde" noWrap className={classes.toolbarTitle}>
          Company name
        </Typography>
        <nav>
         
        <Link variant="button" color="textPrimary" href="#"  className={classes.link} onClick={()=>history.push('/')}>
            Home
          </Link>

          <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={()=>history.push('/portfolio')}>
            Portfolio
          </Link>
          {user.username && 
          <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={()=>history.push('/mygallery')}>
            My Gallery
          </Link>
          }
          {user.is_superuser && 
          <Link variant="button" color="textPrimary" href="#" className={classes.link}  >
            AdminPanel
          </Link>
          }
          <Link variant="button" color="textPrimary" href="#" className={classes.link} onClick={()=>history.push('/booking')}>
           Book
          </Link>
        </nav>
       
        <Button onClick={openLogin} className='btn btn-secondary'>Login</Button>
        {user.username && <p>{user.username}</p>}

      

      </Toolbar>
    </AppBar>
    )
}

export default Nav
