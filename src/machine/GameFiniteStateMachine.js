import PlayState from '../state/game/PlayState';

class GameFiniteStateMachine {
  constructor() {
    this.play = new PlayState();

    this.state = this.play;
  }

  processEvent(event) {
    if (event) {
      this.state.processEvent(this, event);
    }

    this.state.update(this);
  }

  toPlayState() {
    this.state = this.play;
  }
}

export { GameFiniteStateMachine as default };
