import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../style/style.app'

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
  paperSearch: {
    position: 'relative',
  },
  paperResult: {
    position: 'relative',
    top: '-0.25em',
  },
  form: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: colors.black,
  },
  listTd: {
    wordBreak: 'keep-all',
    overflow: 'hidden',
  },
  listTr: {
    wordBreak: 'keep-all',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
    }
  },
  flag: {
    height: '1em',
    marginLeft: theme.spacing(1),
  },
  icon: {
    height: '2em',
  },
  input: {
    width: 'min-content',
    wordBreak: 'keep-all',
    flexGrow: 1,

  },
  buttonSubmit: {
    position: 'relative',
    right: 0,
    marginLeft: theme.spacing(1),
    fontSize: '1em',
    color: '#00BFFF',
    '&:hover': {
      background: colors.black,
      cursor: 'pointer',
      color: "#FFFB00",
    }
  },
  buttonsMobile: {
    marginRight: theme.spacing(1),
    position: 'absolute',
    right: 0,
  },
  btnMobile: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: '#00BFFF',
    borderRadius:0,
    '&:hover': {
      background: colors.black,
      cursor: 'pointer',
      color: "#FFFB00",
    }
  },
}));