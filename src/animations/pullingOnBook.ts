import { FreeCamera, AbstractMesh, Vector3, CubicEase, Animation, Nullable, Scene, AnimationGroup, TransformNode } from "babylonjs";
import { Book } from "src/app/home/home.component";

export class pullingOnBookAnimation {
  public animatble(cam: FreeCamera, scene: Scene, book: Book): AnimationGroup {

    var bookNode = scene.getNodeByID(book.nodeId) as AbstractMesh;
    (scene.getNodeByID(book.nodeId) as TransformNode).rotationQuaternion = null;

    var takeOutAnimation = new Animation("takeOutAnimation", "position.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT);
    var rotateAnimation = new Animation("tutoAnimation", "rotation.y", 60, Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CYCLE);


    console.log('pull', bookNode.position.x);
    takeOutAnimation.setKeys([
      {
        frame: 0,
        value: bookNode.position.x + 1
      },
      {
        frame: 30,
        value: bookNode.position.x
      },
      {
        frame: 60,
        value: bookNode.position.x
      }
    ]);
    console.log('pull', bookNode.position.x);


    rotateAnimation.setKeys([
      {
        frame: 30,
        value: Math.PI / 2
      },
      {
        frame: 60,
        value: 0
      }]);

    var animationGroup = new AnimationGroup("pullingOnBookAnimationGroup");
    animationGroup.addTargetedAnimation(takeOutAnimation, scene.getNodeByID(book.nodeId));
    animationGroup.addTargetedAnimation(rotateAnimation, scene.getNodeByID(book.nodeId));

    animationGroup.play(false);

    return animationGroup;
  };
}
