import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../style/style.app';

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
    padding: theme.spacing(1),
    width:'50%',

  },
  current: {
    background: colors.aero,
  },
}));