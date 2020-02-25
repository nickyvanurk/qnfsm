import GameFiniteStateMachine from '../machine/GameFiniteStateMachine';
import RenderFiniteStateMachine from '../machine/RenderFiniteStateMachine';

class EventProcessor {
  constructor() {
    this.game = new GameFiniteStateMachine();
    this.render = new RenderFiniteStateMachine();

    this.eventQueue = [];

    this.update();
  }

  update() {
    while (this.eventQueue.length !== 0) {
      let { destination, event } = this.eventQueue.shift();
      console.log('Processing event');
      this.processEvent(destination, event)
    }

    this.render.processEvent(null);

    // TODO: Implement game loop; pass 'now' timestamp to finite state machines
    setTimeout(() => {
      this.update();
    }, 1000);
  }

  processEvent(destination, event) {
    switch(destination) {
      case 'game':
        this.game.processEvent(event);
        break;
      case 'render':
        this.render.processEvent(event);
        break;
    }
  }

  addGameEvent(event, payload) {
    this.addEvent('game', { event, payload });
  }

  addRenderEvent(event, payload) {
    this.addEvent('render', { event, payload });
  }

  addEvent(destination, event) {
    console.log('Event added');
    this.eventQueue.push({ destination , event });
  }
}

const eventProcessor = new EventProcessor();

export { eventProcessor as default };
