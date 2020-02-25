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
    console.log('Renderer: updating');
  }

  render(render) {
    console.log('Renderer: rendering');
  }

  createSpaceship(coordinates) {
    console.log('Renderer: creating spawnship at ' +
      `x: ${coordinates.x}, y: ${coordinates.y}, z: ${coordinates.y}`);
  }
};

export { RenderState as default };
