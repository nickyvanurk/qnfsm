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


// Finite state machine:
//
// You have a fixed set of states that the machine van be in
// The machine can only be in one state at a time
// A sequence of inputs or events in sent to the machine
// Each state has a set of transitions, each assiociated with an input and pointing to a state

// Game Logic
//    Game state
//    prediction etc for client
//    actual decisions on server
//    UI logic
//     Pass current timestep
//
//     States:
//        Play

// Animations & Render
//    Game loop (input = events from game logic) (outside FSM; inside thread)
//    May proceed if event queue is empty
//    Pass current timestep
//
//    States:
//        Load
//        Game
//
//

// TODO:

// Communications
//    Socket handling
//    Connect/reconnect logic
//    Published/subscriber
//    Generic state sync

// Sound
//    Game logic -> Sound
//    Example: Play this sound at such-and-such volume coming from such-and-such position within the game world
