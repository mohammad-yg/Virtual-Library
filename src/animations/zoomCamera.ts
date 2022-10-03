import { FreeCamera, AbstractMesh, Vector3, CubicEase, Animation, Nullable } from "babylonjs";

export class zoomCameraAnimation {
  public animatble(cam: FreeCamera, tar: AbstractMesh, dist?: number, height?: number, addMovePosition?: Vector3): { walkAnimation: Nullable<Animatable>, targetAnimation: Nullable<Animatable> } {
    if (!dist)
      dist = -3;
    if (!height)
      height = 0;

    var targetEndPos = tar.getAbsolutePosition();


    var camStartPos = cam.position;

    // set animation period based on distance to target
    var xs = Math.abs(camStartPos.x - targetEndPos.x);
    var zs = Math.abs(camStartPos.z - targetEndPos.z);
    var tm = Number(xs) + Number(zs);
    var tf = (tm as any).toFixed(2) * 10;
    if (tf < 100) { tf = 100; }

    var speed1 = 25; //frames per second walk
    var speed2 = 25; //frames per second rotate

    tar.computeWorldMatrix();
    var matrix = (tar as any).getWorldMatrix(true);
    var local_position = new Vector3(0, 0, 0);
    local_position.addInPlace(new Vector3(dist, height, 0));
    var global_position = Vector3.TransformCoordinates(local_position, matrix);

    var movePosition = global_position;

    if (addMovePosition)
      movePosition.addInPlace(addMovePosition);

    var rotatePosition = targetEndPos.clone();

    var ease = new CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    var walkAnimation = Animation.CreateAndStartAnimation('cwalk', cam as any, 'position', speed1, tf, cam.position, movePosition, 0, ease as any); // Move to target
    var walkAnimation = Animation.CreateAndStartAnimation('ctarget', cam as any, 'target', speed2, tf, cam.target, rotatePosition, 0, ease as any); // Rotate to target

    return { walkAnimation: walkAnimation as Nullable<Animatable>, targetAnimation: walkAnimation as Nullable<Animatable> };
  };
}
