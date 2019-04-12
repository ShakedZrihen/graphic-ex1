/*
 *   Created by Ligal Levy & Shaked Zrihen
 */

class RedoBtn extends ButtonBase {
  constructor(name, paint) {
    super(name, paint);
  }

  handleButtonPress(event) {
    this.paint.canvas.redo();
  }
}
