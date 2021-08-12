import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../style/style.app';


export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: '100%',
    borderRadius:'15px',
    display: 'flex',
    flexFlow: 'column wrap',
    backgroundColor: colors.black,
    color:colors.aero
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