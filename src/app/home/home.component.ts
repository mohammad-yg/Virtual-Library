import { Component, OnInit } from '@angular/core';
import { AbstractMesh, ActionManager, Color3, CubicEase, Engine, ExecuteCodeAction, FreeCamera, HDRCubeTexture, HemisphericLight, HighlightLayer, Mesh, MeshBuilder, Scene, SceneLoader, TransformNode, Vector3 } from 'babylonjs';
import 'babylonjs-loaders';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BookDetailInformation, BookDetailInput } from '../book-detail/book-detail.component';

type Book = {
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

var books: Book[] = [
  {
    nodeId: 'Book-1',
    title: 'book 1',
    description: 'it\'s book 1',
    coverMeshId: 'Book-1-Cover.001',
    paperMeshId: 'Book-1-Paper',
  },
  {
    nodeId: 'Book-2',
    title: 'book 2',
    description: 'it\'s book 2',
    coverMeshId: 'Book-2-Cover',
    paperMeshId: 'Book-2-Paper',
  },
  {
    nodeId: 'Book-3',
    title: 'book 3',
    description: 'it\'s book 3',
    coverMeshId: 'Book-3-Cover',
    paperMeshId: 'Book-3-Paper',
  },
  {
    nodeId: 'Book-4',
    title: 'book 4',
    description: 'it\'s book 4',
    coverMeshId: 'Book-4-Cover',
    paperMeshId: 'Book-4-Paper',
  },
  {
    nodeId: 'Book-5',
    title: 'book 5',
    description: 'it\'s book 6',
    coverMeshId: 'Book-5-Cover',
    paperMeshId: 'Book-5-Paper',
  },
  {
    nodeId: 'Book-7',
    title: 'book 7',
    description: 'it\'s book 7',
    coverMeshId: 'Book-6-Cover',
    paperMeshId: 'Book-6-Paper',
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookDetailInput: BookDetailInput = { informationData: [], description: '' };
  showBookDetail$: Observable<boolean> = new Observable<boolean>();
  showBookDetailSubject = new Subject<boolean>();

  constructor() {
    this.bookDetailInput.
      informationData = [
        { title: 'کد کالا:', value: '32643' },
        { title: 'شابک:', value: '9789643113445' },
        { title: 'نویسنده :', value: 'عباس معروف' },
        { title: 'انتشارات :', value: 'ققنوس' },
        { title: 'موضوع :', value: 'داستان های فارسی قرن 14' },
        { title: 'زبان :', value: 'فارسي' },
        { title: 'جلد :', value: 'نرم' },
        { title: 'قطع :', value: 'رقعی' },
        { title: 'تعداد صفحه :', value: '350' },
        { title: 'طول :', value: '21' },
        { title: 'عرض :', value: '14' },
        { title: 'وزن :', value: '392 گرم' },
      ]

    this.bookDetailInput.
      description = "درباره کتاب: سمفونی مردگان داستان زندگی یک خانواده است که در اردبیل در اواخر سلطنت رضا شاه زندگی می کنند. کتاب از ۴ فصل تشکیل شده که هر فصل از زبان یک راوی نقل می شود. پدر خانواده «جابر اورخانی» مغازه آجیل و خشکبار فروشی در بازار اردبیل دارد. بچه هایش به ترتیب یوسف، آیدین و آیدا ، و اورهان هستند که دخترش آیدا، با آیدین دوقلوست. اورهان که بیشتر از سایرین به پدر در اداره مغازه کمک می کند، مورد علاقه اوست و مادر آیدین را بیش از فرزندان دیگرش دوست دارد. آیدین علاقه بسیاری به درس و مطالعه دارد و اورهان بیشتر به کسب و کار علاقمند است. منزل خانواده اورهانی نزدیک پنکه سازی لرد قراردارد. با اوج گیری جنگ جهانی دوم، دولت روس به بخش های شمالی کشور از جمله آذربایجان حمله هوایی می کند و چتر باز پیاده می کند. این مسئله موجب بروز هرج و مرج در شهر می شود. آشفتگی و ناامنی و کمبود ارزاق، بویژه نان در شهر حاکم می شود. جابر دوستی دارد به نام ایاز که پاسبان است. جابر در بیشتر امور زندگی ایاز را طرف شور و مشورت قرار می دهد. یوسف که در این زمان یک پسر بچه است، تحت تاثیر فضای جنگی حاکم بر شهر در خانه، ادای سربازها را در می آورد مخصوصاً محو تماشای چتر بازها می شود. یک روز هم به تقلید از چتر بازها، چتر بزرگ و سیاه پدر را برمی دارد و با آن از بام خانه پرواز می کند. اما در اثر سقوط از پشت بام، یوسف به نوعی عقب افتادگی دچار می شود. قوای تکلم و شنوایی اش به مرور از بین می رود و چیزی می شود بین آدم و حیوان که مدام می بلعد و خود را کثیف می کند . ایاز که به شدت طرفدار رضا شاه است از کناره گیری او از سلطنت به نفع پسرش، به گریه می افتد و جابر را نیز به گریه می اندازد. در خانواده، اورهان و یوسف کم کم با پدر در اداره مغازه کمک می کنند، اما آیدین علاقه ای به کار آجیل فروشی ندارد. نثر داستان خیلی روان و داستانش خیلی منظم است. داستان کتاب آنقدر جذاب است که اصلا دوست نداری کتاب رو زمین بذاری و استراحت کنی. به دوستان عزیز توصیه می کنم اگه وقتشو داشتند حتماً این کتاب رو بخونند. عباس معروفی در سال ۱۳۳۶ شمسی در تهران متولد شد. فارغ التحصیل هنرهای زیبای تهران در رشته هنرهای دراماتیک است و حدود یازده سال معلم ادبیات در دبیرستان های تهران بوده است.معروفی به خاطر موضع گیری علیه حکومت ایران بارها بازجویی شد و سرانجام تحت فشار سیاسی از ایران خارج شد و به آلمان رفت و هم اکنون ساکن برلین است. سمفونی مردگان برنده جایزه «بنیاد انتشارات ادبی فلسفی سور کامپ» در سال ۲۰۰۱ شده و به دو زبان انگلیسی و نیز آلمانی ترجمه و چاپ شده است. ضمن اینکه در سال ۲۰۰۷ به عنوان یکی از صد رمان برجسته سال بریتانیا انتخاب شد.";

    this.showBookDetailSubject.next(false);
    this.showBookDetail$ = this.showBookDetailSubject.asObservable();
  }

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
              this.showBookDetailSubject.next(true);
            }
          },
          {
            name: 'onDoubleClick', handler: () => {
              this.showBookDetailSubject.next(false);
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

  showBookDetail(): void {
    this.showBookDetailSubject.next(true);
  }

  closeBookDetailCard(): void {
    this.showBookDetailSubject.next(false);
  }
}
