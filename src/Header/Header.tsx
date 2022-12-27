import React, { Dispatch } from 'react';
import { AppBar, Toolbar,Typography,Button,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createStyles, makeStyles } from '@mui/styles';
import { randomInteger } from '../utils/randomInteger'
import { SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface Props {
  setRandom: Dispatch<SetStateAction<number>>;
}

function Header({ setRandom }: Props) {
  const classes = useStyles();

  const location = useLocation();
  const currentPath = location.pathname === '/svg';

  function onClick(): void {
    setRandom(randomInteger(0, 2));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Svg
          </Typography>
          {currentPath && (
            <Button onClick={onClick} color="inherit">
              Получить SVG
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;