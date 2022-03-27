import { Component, OnInit } from '@angular/core';
import { Engine, FreeCamera, Scene, SceneLoader, Vector3 } from 'babylonjs';
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

    //define free camera
    const camera = new FreeCamera("camera", new Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

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
