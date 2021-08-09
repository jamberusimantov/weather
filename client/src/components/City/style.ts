import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: '100%'
  },
  paperResult: {
    position: 'relative',
    top: '-0.25em',
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
}));