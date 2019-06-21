/*
 *   Created by Ligal Levy & Shaked Zrihen & Avraham Lachmi
 */

class FitBtn extends ButtonBase {
  constructor(name, paint) {
    super(name, paint);
    this.isMouseDown = false;
    this.firstPoint = null;
  }

  handleButtonPress(event) {
    this.paint.toolbar.clearSelected();
    this.select();
    this.paint.canvas.clearListeners();
    Transform.fit(this.paint.canvas, true);
    this.paint.canvas.redrawStoredShapes();
  }

  clearSelect() {
    this.btn.style.backgroundColor = "";
  }

  select() {
    this.btn.style.backgroundColor = "";
  }
}
