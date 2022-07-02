import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractMesh, ActionManager, Color3, CubicEase, Engine, ExecuteCodeAction, FreeCamera, HDRCubeTexture, HemisphericLight, HighlightLayer, Mesh, MeshBuilder, Scene, SceneLoader, TransformNode, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BookDetailComponent, BookDetailInformation, BookDetailInput } from '../book-detail/book-detail.component';
import { BookService } from './book.service';

export type Book = {
  id: number,
  nodeId: string,
  title: string,
  description: string,
  coverMeshId: string,
  paperMeshId: string,

  coverMesh?: AbstractMesh,
  paperMesh?: AbstractMesh,
}

const BROWSER_MESH_ACTION_MAP = {
  onMouseEnter: 'OnPointerOverTrigger',
  onMouseLeave: 'OnPointerOutTrigger',
  onMouseDown: 'OnPickDownTrigger',
  onMouseUp: 'OnPickUpTrigger',
  onClick: 'OnPickTrigger',
  onDoubleClick: 'OnDoublePickTrigger'
} as any;
const BROWSER_MESH_EVENT_MAP = {
  onLoad: 'onReady'
} as any;
const MESH_OUTLINE_COLOR = "#FFFFFF";
const MESH_OVERLAY_COLOR = "#999999";

export interface modal{
  close: () => void,
  open: (id?:number) => void
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookDetailInput: BookDetailInput = { informationData: [], description: '' };


  // @ViewChild(BookDetailComponent) bookDetail: BookDetailComponent = new BookDetailComponent();
  @ViewChild('bookDetailModal', { static: true }) bookDetailModal: modal = { close: () => { }, open: (numbrt) => { } };

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    var books = this.bookService.getBooks();

    const canvas = document.getElementById('view') as HTMLCanvasElement;
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    scene.gravity = new Vector3(0, -0.95, 0);

    //define free camera
    const camera = new FreeCamera("camera", new Vector3(0, 5, 0), scene);
    camera.setTarget(new Vector3(1, 4.85, 0));
    camera.attachControl(canvas, true);
    camera.applyGravity = true;



    //hdri
    var hdri = new HDRCubeTexture('/assets/hdris/hdri.hdr', scene, 128, false, true, false, true);

    //sun
    var sun = new HemisphericLight('sun', new Vector3(0, 0, 0), scene);
    sun.intensity *= 2;

    //import room model
    SceneLoader.ImportMeshAsync('', '/assets/3d models/room.glb').then(() => {

    });


    //import books
    SceneLoader.ImportMeshAsync('', '/assets/3d models/books-1.glb').then((result) => {
      books.forEach(b => {
        b.coverMesh = result.meshes.find(m => m.id === b.coverMeshId);
        b.paperMesh = result.meshes.find(m => m.id === b.paperMeshId);
      });

      // registerAppliencesActions();
      books.forEach((book, index) => {
        const itemEventHandlers = [
          {
            name: 'onMouseEnter', handler: (book: Book) =>
              hl.addMesh(book.coverMesh as Mesh, new Color3(250, 250, 250))
          },
          {
            name: 'onMouseLeave', handler: (appliance: Book) =>
              hl.removeMesh(book.coverMesh as Mesh)
          },
          {
            name: 'onClick', handler: (appliance: Book) => {
              zoom(camera, appliance.coverMesh!, 2.6, 0.5, undefined);
              this.bookDetailModal.open(book.id);
            }
          }
        ];

        attachItemEventHandlers(book, itemEventHandlers);
      });
    });

    engine.runRenderLoop(() => {
      scene.render();
    })


    var hl = new HighlightLayer("hl1", scene, {
      // isStroke: true,
      blurTextureSizeRatio: 1,
      mainTextureRatio: 1,

      blurHorizontalSize: 1.4,
      blurVerticalSize: 1.4,

      mainTextureFixedSize: 2048
    });
    hl.outerGlow = false;
    hl.innerGlow = true;

    const attachItemEventHandlers = (book: Book, events: { name: string, handler: (book: Book) => void }[]) => {
      var outlineWidth = 0.005;

      var mesh = book.coverMesh!;

      mesh.overlayColor = Color3.FromHexString(MESH_OVERLAY_COLOR);
      mesh.outlineColor = Color3.FromHexString(MESH_OUTLINE_COLOR);
      mesh.outlineWidth = outlineWidth;
      mesh.overlayAlpha = 1;
      mesh.actionManager = new ActionManager(scene);


      events.forEach(({ name, handler }) => {
        const eventName: string = BROWSER_MESH_ACTION_MAP[name] || BROWSER_MESH_EVENT_MAP[name];
        const action = new ExecuteCodeAction(
          (ActionManager as any)[eventName],
          () => handler(book)
        );
        mesh.actionManager?.registerAction(action);
      });
    }

    const zoom = function (cam: FreeCamera, tar: AbstractMesh, dist?: number, height?: number, addMovePosition?: Vector3) {
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
      var globalWalkAnimatable = BABYLON.Animation.CreateAndStartAnimation('cwalk', cam as any, 'position', speed1, tf, cam.position, movePosition, 0, ease as any); // Move to target
      var globalCtargetAnimatable = BABYLON.Animation.CreateAndStartAnimation('ctarget', cam as any, 'target', speed2, tf, cam.target, rotatePosition, 0, ease as any); // Rotate to target
    };

  }
}
