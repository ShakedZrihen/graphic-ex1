/*
 *   Created by Ligal Levy & Shaked Zrihen
 */

class CircleBtn extends ShapeButtonBase {
  constructor(name, paint) {
    super(name, paint);
  }

  handleButtonPress(event) {
    this.paint.canvas.setContext(new Circle(this.paint.canvas));
  }
}
