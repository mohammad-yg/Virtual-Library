import { FreeCamera, AbstractMesh, Vector3, CubicEase, Animation, Nullable, Scene, AnimationGroup, TransformNode } from "babylonjs";
import { Book } from "src/app/home/home.component";

export class takingOutBookAnimation {
  public animatble(cam: FreeCamera, scene: Scene, book: Book): AnimationGroup {

    var bookNode = scene.getNodeByID(book.nodeId) as AbstractMesh;
    (scene.getNodeByID(book.nodeId) as TransformNode).rotationQuaternion = null;

    var takeOutAnimation = new Animation("takeOutAnimation", "position.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT);
    var rotateAnimation = new Animation("tutoAnimation", "rotation.y", 60, Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CYCLE);

    takeOutAnimation.setKeys([
      {
        frame: 0,
        value: bookNode.position.x
      },
      {
        frame: 30,
        value: bookNode.position.x + 1
      }
    ]);

    rotateAnimation.setKeys([
      {
        frame: 30,
        value: 0
      },
      {
        frame: 60,
        value: Math.PI / 2
      }]);

    var animationGroup = new AnimationGroup("takingOutBookAnimationGroup");
    animationGroup.addTargetedAnimation(takeOutAnimation, scene.getNodeByID(book.nodeId));
    animationGroup.addTargetedAnimation(rotateAnimation, scene.getNodeByID(book.nodeId));

    animationGroup.play(false);

    return animationGroup;
  };
}
