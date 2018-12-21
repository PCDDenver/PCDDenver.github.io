class PCD {

  constructor() {
    this.init();
  }

  init() {
    // init browser props
    requestAnimationFrame(() => this.animate());
    window.addEventListener('resize', () => this.resizeDebounced());
    this.resize();
  }

  // STORE/EVENTS ---------------------

  animate() {
    requestAnimationFrame(() => this.animate());
  }

  resizeDebounced(e) {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => this.resize(), 50);
  }

  resize() {

  }

}

window.pcd = new PCD();
