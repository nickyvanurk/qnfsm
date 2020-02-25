import LoadState from '../state/render/LoadState';
import RenderState from '../state/render/RenderState';

class RenderFiniteStateMachine {
  constructor() {
    this.load = new LoadState();
    this.render = new RenderState();

    this.state = this.load;
  }

  processEvent(event) {
    if (event) {
      this.state.processEvent(this, event);
    }

    this.state.update(this);
    this.state.render(this);
  }

  toLoadState() {
    this.state = this.load;
  }

  toRenderState() {
    this.state = this.render;
  }
}

export { RenderFiniteStateMachine as default };
