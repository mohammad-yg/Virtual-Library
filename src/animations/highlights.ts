import { HighlightLayer, Scene } from "babylonjs";

export class Hilights {
  scene: Scene;

  public bookHoverHilight: HighlightLayer;
  constructor(scene: Scene) {
    this.scene = scene;
    this.bookHoverHilight = this.defineBookHilight();
  }

  defineBookHilight(): HighlightLayer {
    var hl = new HighlightLayer("bookHoverHilight", this.scene, {
      // isStroke: true,
      blurTextureSizeRatio: 1,
      mainTextureRatio: 1,

      blurHorizontalSize: 1.4,
      blurVerticalSize: 1.4,

      mainTextureFixedSize: 2048
    });

    hl.outerGlow = false;
    hl.innerGlow = true;

    return hl;
  }
}
