import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
  },
  flexBase: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-end',
  },
  mapCanvas: {
    padding: theme.spacing(2),
    position: 'relative',
    width: '100%',
    minHeight: '40vh',

  },
  brief:{
    // minWidth: '200px',
  },
  section: {
    marginBottom: '30px',
},
  paper: {
    padding: theme.spacing(2),
    height: '100%'
  },
  paperResult: {
    position: 'relative',
    top: '-0.25em',
  },
  paperSearch: {
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  listTd: {
    wordBreak: 'keep-all',
    overflow: 'hidden',
  },
  icon: {
    height: '3em',
  },
  listTr: {
    wordBreak: 'keep-all',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  animation: {
    position: 'absolute',
    zIndex: 1000,
  },
  skipLink: {
    position: 'absolute',
    top: 0,
    left: 40,
    clip: 'auto',
    height: 'auto',
    width: 'auto',
    backgroundColor: '#fff',
    padding: '0.3em',
    zIndex: 1,

  },
  map: {
    position: 'absolute',
    top: 0.0,
    width: '100%',
    overflow: 'hidden',
    height: '40vh',
    '&:focus': {
      outline: '#4A74A8 solid 0.15em'
    }
  }
}));