/*
 *   Created by Ligal Levy & Shaked Zrihen & Avraham Lachmi
 */

class LineBtn extends ShapeButtonBase {
  constructor(name, paint) {
    super(name, paint);
  }

  handleButtonPress(event) {
    this.paint.canvas.setContext(new Line(this.paint.canvas));
  }
}
