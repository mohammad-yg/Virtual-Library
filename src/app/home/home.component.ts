import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractMesh, ActionManager, Camera, Color3, Engine, ExecuteCodeAction, FreeCamera, HDRCubeTexture, HemisphericLight, HighlightLayer, Mesh, Scene, SceneLoader, Vector3, Animation, AnimationGroup } from 'babylonjs';
import 'babylonjs-loaders';
import { MESH_OVERLAY_COLOR, MESH_OUTLINE_COLOR, BROWSER_MESH_ACTION_MAP, BROWSER_MESH_EVENT_MAP } from 'src/animations/animationmap';
import { Hilights } from 'src/animations/highlights';
import { pullingOnBookAnimation } from 'src/animations/pullingOnBook';
import { takingOutBookAnimation } from 'src/animations/takingOutBook';
import { zoomCameraAnimation } from 'src/animations/zoomCamera';
import { BookDetailInput } from '../book-detail/book-detail.component';
import { Modal } from '../shared/models/Modal';
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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookDetailInput: BookDetailInput = { informationData: [], description: '' };
  canvas: HTMLCanvasElement | undefined;
  engine: Engine | undefined;
  scene: Scene | undefined;
  camera: Camera | undefined;

  hilights: Hilights | undefined;
  bookHoverHilight: HighlightLayer | undefined;

  hdri: HDRCubeTexture | undefined;

  bookAnimationGroup: AnimationGroup | undefined;
  takedOutBook: Book | undefined;

  @ViewChild('bookDetailModal', { static: true }) bookDetailModal: Modal = { close: () => { }, open: (numbrt) => { } };

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    var books = this.bookService.getBooks();

    this.canvas = document.getElementById('view') as HTMLCanvasElement;
    this.engine = new Engine(this.canvas, true);
    this.scene = new Scene(this.engine);

    this.scene.gravity = new Vector3(0, -10, 0);
    this.scene.collisionsEnabled = true;



    //define free camera
    this.camera = this.defineCamera();


    this.hilights = new Hilights(this.scene);

    //define bookHoverHilight
    this.bookHoverHilight = this.hilights.bookHoverHilight;



    //hdri
    this.hdri = new HDRCubeTexture('/assets/hdris/hdri.hdr', this.scene, 128, false, true, false, true);

    //sun
    var sun = new HemisphericLight('sun', new Vector3(0, 0, 0), this.scene);
    sun.intensity *= 2;

    //import room model
    SceneLoader.ImportMeshAsync('', '/assets/3d models/invisible-walls.glb').then(
      (result) => {
        result.meshes.forEach(mesh => {
          mesh.checkCollisions = true;
          mesh.isVisible = false;
        });

        (this.camera as FreeCamera).checkCollisions = true;
        (this.camera as FreeCamera).applyGravity = true;
      }
    )

    SceneLoader.ImportMeshAsync('', '/assets/3d models/room.glb').then(() => { });


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
              this.bookHoverHilight?.addMesh(book.coverMesh as Mesh, new Color3(250, 250, 250))
          },
          {
            name: 'onMouseLeave', handler: (book: Book) =>
              this.bookHoverHilight?.removeMesh(book.coverMesh as Mesh)
          },
          {
            name: 'onClick', handler: (book: Book) => {
              if (this.takedOutBook !== undefined && this.takedOutBook !== book)
                this.bookAnimationGroup?.reset();

              if (this.takedOutBook !== book) {
                this.takedOutBook = book;
                (new zoomCameraAnimation).animatble(this.camera as FreeCamera, book.coverMesh!, 10, 0.5, undefined);
                this.bookAnimationGroup = (new takingOutBookAnimation).animatble(this.camera as FreeCamera, this.scene!, book);
                this.bookDetailModal.open(book.id);
              }
              else {
                this.bookAnimationGroup?.reset();

                this.bookAnimationGroup = (new pullingOnBookAnimation).animatble(this.camera as FreeCamera, this.scene!, book);
                this.bookDetailModal.close();

                this.takedOutBook = undefined;
              }

              console.log('home', (this.scene?.getNodeByID(book.nodeId) as any).position.x);
            }
          }
        ];

        this.attachItemEventHandlers(book, itemEventHandlers);
      });
    });


    this.engine.runRenderLoop(() => {
      this.scene?.render();
    })

  }

  attachItemEventHandlers(book: Book, events: { name: string, handler: (book: Book) => void }[]) {
    var outlineWidth = 0.005;

    var mesh = book.coverMesh!;

    mesh.overlayColor = Color3.FromHexString(MESH_OVERLAY_COLOR);
    mesh.outlineColor = Color3.FromHexString(MESH_OUTLINE_COLOR);
    mesh.outlineWidth = outlineWidth;
    mesh.overlayAlpha = 1;
    mesh.actionManager = new ActionManager(this.scene as Scene);


    events.forEach(({ name, handler }) => {
      const eventName: string = BROWSER_MESH_ACTION_MAP[name] || BROWSER_MESH_EVENT_MAP[name];
      const action = new ExecuteCodeAction(
        (ActionManager as any)[eventName],
        () => handler(book)
      );
      mesh.actionManager?.registerAction(action);
    });
  }

  defineCamera(): Camera {
    var camera = new FreeCamera("camera", new Vector3(0, 6, 0), this.scene as Scene);
    camera.setTarget(new Vector3(1, 6, 0));
    camera.attachControl(this.canvas, true);
    camera.checkCollisions = false;
    camera.applyGravity = false;

    camera.minZ = 0;
    camera.ellipsoid = new Vector3(1.6, 3, 1.6);

    camera.speed = 0.5;

    return camera;
  }
}
