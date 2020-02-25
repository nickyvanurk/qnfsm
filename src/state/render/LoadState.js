import Event from '../../event/Event';

class LoadState {
  processEvent(render, event) {
    switch(event.event) {
      case Event.Render.Load.LoadGraphics:
        console.log('LoadState: loading graphics');

        render.toRenderState();
        break;
    }
  }

  update(render) {
    console.log('LoadState: updating');
  }

  render(render) {
    console.log('LoadState: rendering');
  }
};

export { LoadState as default };
