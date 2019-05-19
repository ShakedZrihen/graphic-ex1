/*
 *   Created by Ligal Levy & Shaked Zrihen
 */

class ScaleBtn extends ButtonBase {
  constructor(name, paint) {
    super(name, paint);
  }

  handleButtonPress(event) {
    const REPLACE_WITH_SCALE_SIZE = 0.5;
    for (let i = 0; i < this.paint.canvas.storedSapes.length; ++i) {
      let currentShape = this.paint.canvas.storedSapes[i];
      if (currentShape.type() === "Circle") {
        currentShape.radius = currentShape.radius * REPLACE_WITH_SCALE_SIZE;
      }
    }
    for (let i = 0; i < this.paint.canvas.points.length; ++i) {
      const point = this.paint.canvas.points[i];
      point.x = point.x * REPLACE_WITH_SCALE_SIZE;
      point.y = point.y * REPLACE_WITH_SCALE_SIZE;
    }
    this.paint.canvas.redrawStoredShapes();
  }

  clearSelect() {}
  select() {}
}