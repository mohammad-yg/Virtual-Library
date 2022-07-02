import { Injectable } from "@angular/core";
import { StringTools } from "babylonjs";
import { Book } from "../home/home.component";

@Injectable({
    providedIn: 'root'
})
export class BookDetailService {

    books = [] as bookDetail[];

    constructor() {
        this.books = [
            {
                id: 1,
                title: 'سمفونی مردگان',
                imageUrl: '/assets/images/book-cover-001.jpg',
                price: 1080000,
                information: [
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
                    { title: 'وزن :', value: '392 گرم' }
                ],
                description: "درباره کتاب: سمفونی مردگان داستان زندگی یک خانواده است که در اردبیل در اواخر سلطنت رضا شاه زندگی می کنند. کتاب از ۴ فصل تشکیل شده که هر فصل از زبان یک راوی نقل می شود. پدر خانواده «جابر اورخانی» مغازه آجیل و خشکبار فروشی در بازار اردبیل دارد. بچه هایش به ترتیب یوسف، آیدین و آیدا ، و اورهان هستند که دخترش آیدا، با آیدین دوقلوست. اورهان که بیشتر از سایرین به پدر در اداره مغازه کمک می کند، مورد علاقه اوست و مادر آیدین را بیش از فرزندان دیگرش دوست دارد. آیدین علاقه بسیاری به درس و مطالعه دارد و اورهان بیشتر به کسب و کار علاقمند است. منزل خانواده اورهانی نزدیک پنکه سازی لرد قراردارد. با اوج گیری جنگ جهانی دوم، دولت روس به بخش های شمالی کشور از جمله آذربایجان حمله هوایی می کند و چتر باز پیاده می کند. این مسئله موجب بروز هرج و مرج در شهر می شود. آشفتگی و ناامنی و کمبود ارزاق، بویژه نان در شهر حاکم می شود. جابر دوستی دارد به نام ایاز که پاسبان است. جابر در بیشتر امور زندگی ایاز را طرف شور و مشورت قرار می دهد. یوسف که در این زمان یک پسر بچه است، تحت تاثیر فضای جنگی حاکم بر شهر در خانه، ادای سربازها را در می آورد مخصوصاً محو تماشای چتر بازها می شود. یک روز هم به تقلید از چتر بازها، چتر بزرگ و سیاه پدر را برمی دارد و با آن از بام خانه پرواز می کند. اما در اثر سقوط از پشت بام، یوسف به نوعی عقب افتادگی دچار می شود. قوای تکلم و شنوایی اش به مرور از بین می رود و چیزی می شود بین آدم و حیوان که مدام می بلعد و خود را کثیف می کند . ایاز که به شدت طرفدار رضا شاه است از کناره گیری او از سلطنت به نفع پسرش، به گریه می افتد و جابر را نیز به گریه می اندازد. در خانواده، اورهان و یوسف کم کم با پدر در اداره مغازه کمک می کنند، اما آیدین علاقه ای به کار آجیل فروشی ندارد. نثر داستان خیلی روان و داستانش خیلی منظم است. داستان کتاب آنقدر جذاب است که اصلا دوست نداری کتاب رو زمین بذاری و استراحت کنی. به دوستان عزیز توصیه می کنم اگه وقتشو داشتند حتماً این کتاب رو بخونند. عباس معروفی در سال ۱۳۳۶ شمسی در تهران متولد شد. فارغ التحصیل هنرهای زیبای تهران در رشته هنرهای دراماتیک است و حدود یازده سال معلم ادبیات در دبیرستان های تهران بوده است.معروفی به خاطر موضع گیری علیه حکومت ایران بارها بازجویی شد و سرانجام تحت فشار سیاسی از ایران خارج شد و به آلمان رفت و هم اکنون ساکن برلین است. سمفونی مردگان برنده جایزه «بنیاد انتشارات ادبی فلسفی سور کامپ» در سال ۲۰۰۱ شده و به دو زبان انگلیسی و نیز آلمانی ترجمه و چاپ شده است. ضمن اینکه در سال ۲۰۰۷ به عنوان یکی از صد رمان برجسته سال بریتانیا انتخاب شد."
            },
            {
                id: 2,
                title: 'قصه های امیرعلی 2',
                imageUrl: '/assets/images/book-cover-002.jpg',
                price: 25000,
                information: [
                    { title: 'کد کالا:', value: '59655' },
                    { title: 'شابک:', value: '9789647002578' },
                    { title: 'نویسنده:', value: 'امیرعلی نبویان' },
                    { title: 'انتشارات:', value: 'نقش و نگار' },
                    { title: 'موضوع:', value: 'مجموعه داستان ایرانی' },
                    { title: 'زبان:', value: 'فارسی' },
                    { title: 'سال انتشار:', value: '1396' },
                    { title: 'جلد:', value: 'شمیز' },
                    { title: 'قطع:', value: 'رقعی' },
                    { title: 'تعداد صفحه:', value: '160' },
                    { title: 'شماره چاپ:', value: '14' },
                    { title: 'طول:', value: '21' },
                    { title: 'عرض:', value: '14.8' },
                    { title: 'وزن:', value: '192 گرم' },
                ],
                description: "#هزارکتاب کتاب: قصه های امیرعلی 2 تاریخ شروع: 94/12/19 با فرا رسیدن زمستان و تجلی نمادهای منحصر به فردش همچون بارش تگرگ و برف، برخی ورزش های منسوب به این فصل هم رواج می یابد! بی شک مشهورترین و پرطرفدارترین آنها اسکی است که به رغم پرهزینه بودنش متقاضیان فراوانی دارد! لابد با من موافقید که برخی از عزیزان فعال در این رشته ورزشی گویا آن را فقط به سبب ژست مقبول و حواشی جذابش انتخاب کرده اند و از این رو، پس از سال ها پرداختن به اسکی در همان سطح ابتدایی باقی مانده اند. والا نمی بایست ملی پوشان این رشته -که ضمن در نظر گرفتن فضای ورزشی بسیار محدودش در کشور علاقه مندانی شاید بیش از کشتی و والیبال دارد- اعضای یکی دو خانواده باشند و بس، و بدین ترتیب در لیست نفرات اعزامی به مسابقات معتبر و نیمه معتبر، شبیه تابلوی سردر سوهان فروشی ها عبارت «وپسران» درج شود."
            },
            {
                id: 3,
                title: 'جای خالی سلوچ (جیبی)',
                imageUrl: '/assets/images/book-cover-003.jpg',
                price: 98000,
                information: [
                    { title: 'کد کالا:', value: '12637' },
                    { title: 'شابک:', value: '9789643623203' },
                    { title: 'نویسنده:', value: 'محمود دولت آبادی ' },
                    { title: 'انتشارات:', value: 'چشمه' },
                    { title: 'موضوع:', value: 'داستان های فارسی قرن 14' },
                    { title: 'زبان:', value: 'فارسي' },
                    { title: 'جلد:', value: 'سخت' },
                    { title: 'قطع:', value: 'جیبی' },
                    { title: 'تعداد صفحه:', value: '441' },
                    { title: 'طول:', value: '17.2' },
                    { title: 'عرض:', value: '12' },
                    { title: 'ارتفاع:', value: '2.8' },
                    { title: 'وزن:', value: '386 گرم' },
                ],
                description: "جای خالی سُلوچ رمانی رئالیستی از محمود دولت‌آبادی است که بلافاصله پس از آزادی از زندان ساواک و طی ۷۰ روز نوشته‌ است. دولت‌آبادی داستان آن را به هنگامی که دورهٔ سه سالهٔ حبس را می‌گذراند در ذهنش پرورانده بود.\nمرگان زن روستایی روزی به هنگام برخاستن از خواب شوهرش سلوچ را نمی‌بیند.با نوعی حس پنهانی می‌فهمد که او را برای همیشه از دست داده است و جستجـویش بی ثمر می‌ماند.اکنون او می‌ماند و دو پسر به نام‌های عباس و ابراو و دختری به نام هاجر.ناسازگاری دو برادر با هم مخصوصاً قماربازی و کارهای خلاف عباس، مشکلات خانواده را دو چندان می‌کند.مرگان مجبور می‌شود هاجر را در سن کودکی به مرد زن داری که زنش را فلج ساخته، شوهر بدهد.نگاه و مزاحمت‌های حریصانه‌ی برخی از مردان ده نیز یکی از گرفتاری‌های زندگی اوست.تا آخرین حد تلاش می‌کند که با کار سخت و توانفرسا سر و ته زندگی را به‌گونه‌ای بهم آورد.اما سعی و تلاش او نمی‌تواند چهره‌ی خشن زندگی را نرم سازد و در آخر مجبور می‌شود با جا گذاشتن پسر بزرگ و دخترش هاجر روستا را به دنبال ناکجاآباد و توهم زنده بودن شوهر ترک کند…"
            },
            {
                id: 4,
                title: 'بهترین شکل ممکن (مجموعه داستان)',
                imageUrl: '/assets/images/book-cover-004.jpg',
                price: 42000,
                information: [
                    { title: 'کد کالا:', value: '165086' },
                    { title: 'شابک:', value: '9786002296849' },
                    { title: 'نویسنده:', value: 'مصطفی مستور' },
                    { title: 'انتشارات:', value: 'چشمه' },
                    { title: 'موضوع:', value: 'داستان های کوتاه فارسی قرن 14' },
                    { title: 'زبان:', value: 'فارسي' },
                    { title: 'جلد:', value: 'نرم' },
                    { title: 'قطع:', value: 'پالتویی' },
                    { title: 'تعداد صفحه:', value: '115' },
                    { title: 'طول:', value: '20' },
                    { title: 'عرض:', value: '12' },
                    { title: 'ارتفاع:', value: '1' },
                    { title: 'وزن:', value: '110 گرم' },
                ],
                description: "دقیقه ای به وضعیتی که در آن گرفتار شده بود، فکر کرد. به نظرش رسید میلیون ها قاتل حرفه ای بر تک تک سلول های خونی اش سوار شده اند و در سرتاسر قلمرو بدنش تاخت وتاز می کنند. فکر کرد وسط تماشای فیلم مهیجی در سینما با احترام به او می گویند از سینما بزند بیرون. احساس کرد درست وقتی که فکر می کرده زندگی برای او به بهترین حالتش رسیده است باید از همه ی چیزهایی که برای به دست آوردن شان جنگیده بود، از همه ی چیزهایی که عمیقا دوست داشت ــ زنش، دخترهایش، شغلش، خانه اش، موقعیتش ــ دست بردارد. حس کرد کسی که نمی دانست کیست یا چیست ناگهان از او می خواهد بازی را رها کند؛ آن هم دقیقا زمانی که او دارد به بهترین شکل ممکن بازی می کند. برای اولین بار احساس کرد دارد چیزی را از دست می دهد که همیشه فکر می کرد تنها متعلق به خودش بوده است. حس کرد در بازی نابرابری فریب خورده است. مثل کودکی بود که ناگهان اسباب بازی اش را از او گرفته باشند. دلش خواست بزند زیر گریه. دلش خواست جیغ بکشد، اعتراض کند، التماس کند، فحش بدهد. دلش خواست برود وسط خیابان و رو به جایی که نمی دانست کجاست، فریاد بزند: «از جون من چی می خواهید؟»"
            },
            {
                id: 5,
                title: 'پاییز فصل آخر سال است',
                imageUrl: '/assets/images/book-cover-005.jpg',
                price: 68000,
                information: [
                    { title: 'کد کالا:', value: '118074' },
                    { title: 'شابک:', value: '9786002294821' },
                    { title: 'نویسنده:', value: 'نسیم مرعشی' },
                    { title: 'انتشارات:', value: 'چشمه' },
                    { title: 'موضوع:', value: 'داستان فارسی قرن 14' },
                    { title: 'زبان:', value: 'فارسي' },
                    { title: 'جلد:', value: 'نرم' },
                    { title: 'قطع:', value: 'رقعی' },
                    { title: 'تعداد صفحه:', value: '189' },
                    { title: 'طول:', value: '21.5' },
                    { title: 'عرض:', value: '14.5' },
                    { title: 'ارتفاع:', value: '1' },
                    { title: 'وزن:', value: '220 گرم' },
                ],
                description: "این‌همه آدم در دنیا دارند نباتی زندگی می‌کنند. بیدار می‌شوند و می‌خورند و می‌دوند و می‌خوابند. همین. مگر به کجای دنیا برخورده؟ بابا گفت جوری زندگی کن که بعد از تو آدم‌ها تو را یادشان بیاید. تئاتر نونهالان گیلان اول شده بودم. بابا ماشین آقاجان را گرفته بود و مرا آورده بود خانه. لباس شیطان را از تنم درنیاورده بودم هنوز. شنل و شاخ و دمی که مامان درست کرده بود نمی‌گذاشت درست راه بروم. بابا برایم یک عروسک جایزه خریده بود. کله‌ی عروسک را کنده بودم. داشتم چشمش را از گردنش می‌آوردم بیرون. می‌خواستم بفهمم چرا وقتی می‌خوابانمش چشم‌هایش بسته می‌شود. بابا عروسک را گرفت و گذاشت کنار. مرا نشاند روبه‌روی خودش. گفت من کسی نشدم، اما تو و رامین باید بشوید. یادت می‌ماند؟ گفتم آره بابا، یادم می‌ماند. فردایش رفت و دیگر نیامد. چی از بابا به من رسید غیر از این حرف و چشم‌های سبزش؟ نیامد که ببیند حرفش زندگیمرا خراب کرده. خودش کسی نشد، من چرا باید می‌شدم؟\n\nنسیم مرعشی( - 1362)، نویسنده و برنده رمان برتر جایزه جلال آل احمد سال 94 است."
            },
        ]
    }

    getDetail(id: number) {
        return this.books.find(e => e.id == id);
    }
}

export class bookDetail {
    constructor() {

    }

    id: number = 0;
    title: string = '';
    imageUrl: string = '';
    price: number = 0;
    description: string = '';
    information: { title: string, value: string }[] = [];
}