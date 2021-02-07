import React from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './components/Header';

import { Provider } from 'mobx-react';
import { GameStore } from './components/game/gameStore';
import ScoreBoard from './components/ScoreBoard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '#202430',
    color: 'whitesmoke',

    paddingTop: '100px',
    minHeight: '100vh',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.root}>
        <Header />

        <ScoreBoard store={GameStore} />
      </div>
    </>
  );
}

export default App;
