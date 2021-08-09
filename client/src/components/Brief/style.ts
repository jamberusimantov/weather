import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  brief: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    // alignItems: 'center',
    // justifyContent: 'center',
    // minWidth: '200px',
  },
  briefFlexItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  flexBase: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-end',
  },

}));