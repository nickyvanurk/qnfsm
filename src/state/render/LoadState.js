import Event from '../../event/Event';

class LoadState {
  processEvent(render, event) {
    switch(event.event) {
      case Event.Render.Load.LoadGraphics:
        console.log('Game loader: loading graphics');

        render.toRenderState();
        break;
    }
  }

  update(render) {
    console.log('Game loader: updating');
  }

  render(render) {
    console.log('Game loader: rendering');
  }
};

export { LoadState as default };
