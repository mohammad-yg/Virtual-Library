import { Component, OnInit } from '@angular/core';
import { Engine, FreeCamera, HDRCubeTexture, HemisphericLight, Scene, SceneLoader, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';

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
    SceneLoader.ImportMeshAsync('', '/assets/3d models/books-1.glb').then(() => {

    });

    engine.runRenderLoop(() => {
      scene.render();
    })
  }



}
