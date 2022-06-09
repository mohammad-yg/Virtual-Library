import { Component, OnInit } from '@angular/core';
import { AbstractMesh, ActionManager, Color3, Engine, ExecuteCodeAction, FreeCamera, HDRCubeTexture, HemisphericLight, Scene, SceneLoader, TransformNode, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';

type Book = {
  nodeId: string,
  title: string,
  description: string,
  meshes?: AbstractMesh[],
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

var books: Book[] = [
  {
    nodeId: 'Book-1',
    title: 'book 1',
    description: 'it\'s book 1'
  },
  {
    nodeId: 'Book-2',
    title: 'book 2',
    description: 'it\'s book 2'
  },
  {
    nodeId: 'Book-3',
    title: 'book 3',
    description: 'it\'s book 3'
  },
  {
    nodeId: 'Book-4',
    title: 'book 4',
    description: 'it\'s book 4'
  },
  {
    nodeId: 'Book-5',
    title: 'book 5',
    description: 'it\'s book 6'
  },
  {
    nodeId: 'Book-7',
    title: 'book 7',
    description: 'it\'s book 7'
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      books.forEach(e => {
        e.meshes = (scene.getNodeByID(e.nodeId) as TransformNode)?.getChildMeshes() as AbstractMesh[];
      });

      registerAppliencesActions();
    });

    engine.runRenderLoop(() => {
      scene.render();
    })


    function registerAppliencesActions() {
      books.forEach((book, index) => {
        const itemEventHandlers = [
          {
            name: 'onMouseEnter', handler: (book: Book) =>
              book.meshes?.forEach(mesh => {
                mesh.renderOutline = true
              })
          },
          {
            name: 'onMouseLeave', handler: (appliance: Book) =>
              book.meshes?.forEach(mesh => {
                mesh.renderOutline = false
              })
          }
        ];

        attachItemEventHandlers(book, itemEventHandlers);
      });
    }

    const attachItemEventHandlers = (book: Book, events: { name: string, handler: (book: Book) => void }[]) => {
      var outlineWidth = 0.005;

      book.meshes?.forEach(mesh => {

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
      });
    }
  }
}
