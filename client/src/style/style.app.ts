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
  flexLoader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left:0,
    right:0,
    bottom:0,

  },
}));