import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../style/style.app';

const circle = 'circle';

const hours = new Date().getHours()
const color1 = `rgba(255,255,255,1) 0%`;
const color2 = `rgba(252,252,158,1) 7%`;
const color4 = `rgba(156,223,250,${hours >= 6 && hours < 18 ? 1 : 0.1}) 10%`;
const color3 = `rgba(156,223,250, 1) 100%`;
const background =
  hours >= 6 && hours < 18 ?
    `radial-gradient(${circle}, ${color1}, ${color2}, ${color3})`
    : `radial-gradient(${circle}, ${color1}, ${color2}, ${color4}), ${color3}`;


export const style = makeStyles(theme => ({
  appBar: {
    margin: '0 0 30px',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    background,
    border: `${colors.black} 3px solid`,
    zIndex: 999,
  },
  heading: {
    color: colors.black,
    fontSize: '2em',
  },
  image: {
    marginLeft: '15px',
  },
  homeBtn: {
    fontSize: '3em',
    color: '#00BFFF',
    padding: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
      color: "#FFFB00",
    }
  },
  homeBtnContainer: {
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex:1001,
  },


}));