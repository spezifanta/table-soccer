import React, { Component } from 'react';
import GameCreator from '../containers/GameCreator';
import { connect } from 'react-redux'

class NewGame extends Component {
  render() {
    const { players } = this.props;
    return (
      <div>
        {
          players.length > 0 &&
          <GameCreator />
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const _NewGame = connect(mapStateToProps)(NewGame);

export default _NewGame;
