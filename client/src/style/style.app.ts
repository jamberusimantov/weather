import { makeStyles } from '@material-ui/core/styles';
export const colors = {
  black: '#333',
  apricot: '#F4CBB2',
  White: '#FFFFFF',
  offWhite: '#f5f5f5',
  blue: '#4078c0',
  green: '#6cc644',
  red: '#bd2c00',
  orange: '#c9510c',
  purple: '#6e5494',
  aero: '#7DBBE6',
}
export const style = makeStyles(theme => ({
  root: {
    color: colors.black,
    height: '100vh',
  },
  container: {
    position: 'relative',
    minHeight: '100vh',
    paddingTop: '30px',
  },



}));