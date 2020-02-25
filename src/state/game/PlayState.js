import Event from '../../event/Event';
import eventProcessor from '../../event/EventProcessor';

class PlayState {
  processEvent(game, event) {
    switch(event.event) {
      case Event.Game.Play.SpawnPlayer:
        this.spawnPlayer();
        break;
    }
  }

  update() {

  }

  spawnPlayer() {
    console.log('Game player: spawning player');

    eventProcessor.addRenderEvent(
      Event.Render.Render.CreateSpaceship,
      {
        coordinates: {
          x: Math.floor(Math.random() * Math.floor(50)),
          y: Math.floor(Math.random() * Math.floor(50)),
          z: Math.floor(Math.random() * Math.floor(50))
        }
      }
    );
  }
};

export { PlayState as default };
