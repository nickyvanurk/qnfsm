import Event from '../../event/Event';

class RenderState {
  processEvent(render, event) {
    switch(event.event) {
      case Event.Render.Render.CreateSpaceship:
        const { coordinates } = event.payload;

        this.createSpaceship(coordinates);
        break;
     }
  }

  update(render) {
    console.log('RenderState: updating');
  }

  render(render) {
    console.log('RenderState: rendering');
  }

  createSpaceship(coordinates) {
    console.log('RenderState: creating spaceship at ' +
      `x: ${coordinates.x}, y: ${coordinates.y}, z: ${coordinates.y}`);
  }
};

export { RenderState as default };
