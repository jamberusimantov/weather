import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../style/style.app';

export const style = makeStyles(theme => ({
  unitToggle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: colors.offWhite,
    padding: theme.spacing(1),
  },
  unit: {
    width:'50%',
    color: '#00BFFF',
    '&:hover': {
      background: colors.black,
      cursor: 'pointer',
      color: "#FFFB00",
    }
  },
  current: {
    background: '#ddd',
  },
}));