import * as actions from './actions';
import { NEW_GAME } from './presets';
import { ACTIVE_GAME_STEP, GAME_END_STEP } from './containers/GameCreator';

export default (state = getInitState(), action) => {
  switch(action.type) {
    case actions.UPDATE_DATA:
      return Object.assign({}, state, {
        games: action.data.games,
        players: action.data.players,
        loaded: true
      });

    case actions.START_GAME:
      const newGame = Object.assign({}, state.newGame, {
        startdate: new Date(),
        activeStep: ACTIVE_GAME_STEP
      });
      return Object.assign({}, state, { newGame });

    case actions.CANCEL_GAME:
      return Object.assign({}, state, { newGame: NEW_GAME});

    case actions.REVERSE_ORDER:
      return Object.assign({}, state, { newGame: Object.assign({}, state.newGame, {
        reverseOrder: !state.newGame.reverseOrder
      })});

    case actions.END_GAME:
      return Object.assign({}, state, { newGame: Object.assign({}, state.newGame, {
        activeStep: GAME_END_STEP,
        isFinished: true
      })});

    case actions.ADD_GOAL:
      const scoreTimeline = state.newGame.scoreTimeline.slice(0);
      scoreTimeline.push({
        position: action.position,
        timestamp: new Date(),
        id: action.playerId
      });
      return Object.assign({}, state, {
        newGame: Object.assign({}, state.newGame, {scoreTimeline, snackBarOpen: true})
      });

    case actions.UNDO_LAST_GOAL:
      return Object.assign({}, state, {
        newGame: Object.assign({}, state.newGame, {
          scoreTimeline: state.newGame.scoreTimeline.slice(0, -1),
          snackBarOpen: false
        })
      });

    case actions.ADD_GAME:
      const games = state.games.slice(0);
      games.push(action.game);

      return Object.assign({}, state, { games});

    case actions.SELECT_PLAYER:
      return Object.assign({}, state, {newGame: Object.assign({}, state.newGame, {
        [action.position]: action.player
    })});

    default:
      return state;
  }
};

const getInitState = () => ({
  games: [],
  players: [],
  newGame: NEW_GAME
});
