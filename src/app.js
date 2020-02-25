import Event from './event/Event';
import eventProcessor from './event/EventProcessor';

eventProcessor.addRenderEvent(Event.Render.Load.LoadGraphics);

const simulateSpawningPlayers = () => {
  eventProcessor.addGameEvent(Event.Game.Play.SpawnPlayer);

  setTimeout(() => {
    simulateSpawningPlayers();
  }, 3000);
};

simulateSpawningPlayers();
