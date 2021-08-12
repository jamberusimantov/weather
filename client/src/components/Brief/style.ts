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
  briefFlexItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',

  },
  flexBase: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-end',
    justifyContent:'space-between',
  },

}));