/* =========================================================
   SAYKØ FITNESS
   EXERCISE SYSTEM
========================================================= */


/* ================= EXERCISE DATABASE ================= */

const exercises = [

    /* ================= CHEST ================= */

    {
        id:"bench_press",
        name:"Bench Press",
        arabic:"بنش برس",
        muscle:"الصدر",
        category:"chest",
        icon:"🏋️",
        primary:"الصدر الأوسط",
        secondary:"الترايسبس + الكتف الأمامي",
        type:"Compound",
        steps:[
            "ثبت جسمك على البنش وحافظ على وضع مريح للكتفين.",
            "امسك البار بقبضة مناسبة وأنزله بتحكم نحو منتصف الصدر.",
            "ادفع البار لأعلى مع الحفاظ على التحكم في الحركة.",
            "لا تستخدم وزنًا يمنعك من الحفاظ على وضعية سليمة."
        ],
        mistakes:[
            "تحريك الوزن بسرعة أو بدون تحكم.",
            "رفع الكتفين عن وضعهما الطبيعي.",
            "استخدام وزن أكبر من قدرتك على التحكم."
        ]
    },

    {
        id:"incline_db_press",
        name:"Incline Dumbbell Press",
        arabic:"ضغط دمبل مائل",
        muscle:"الصدر",
        category:"chest",
        icon:"🏋️",
        primary:"الصدر العلوي",
        secondary:"الكتف الأمامي + الترايسبس",
        type:"Compound",
        steps:[
            "اضبط البنش على ميل مناسب.",
            "ابدأ بالدمبلز في وضع ثابت بجانب أعلى الصدر.",
            "ادفع الدمبلز لأعلى بتحكم.",
            "ارجع ببطء إلى وضع البداية."
        ],
        mistakes:[
            "الميل العالي جدًا وتحويل الحركة للكتف.",
            "نزول سريع وغير متحكم.",
            "تقريب الدمبلز بشكل مبالغ فيه."
        ]
    },

    {
        id:"flat_db_press",
        name:"Flat Dumbbell Press",
        arabic:"ضغط دمبل مستوي",
        muscle:"الصدر",
        category:"chest",
        icon:"🏋️",
        primary:"الصدر الأوسط",
        secondary:"الترايسبس + الكتف الأمامي",
        type:"Compound",
        steps:[
            "استلقِ على البنش وثبت قدميك.",
            "ابدأ بالدمبلز فوق الصدر.",
            "انزل بالدمبلز ببطء وتحكم.",
            "ادفع لأعلى مع الحفاظ على ثبات الجسم."
        ],
        mistakes:[
            "تحريك الكتف للأمام أثناء الحركة.",
            "استخدام وزن لا يمكن التحكم فيه.",
            "السرعة الزائدة."
        ]
    },

    {
        id:"chest_fly",
        name:"Chest Fly",
        arabic:"تفتيح صدر",
        muscle:"الصدر",
        category:"chest",
        icon:"🦋",
        primary:"عضلات الصدر",
        secondary:"الكتف الأمامي",
        type:"Isolation",
        steps:[
            "ثبت ظهرك على الجهاز أو البنش.",
            "ابدأ بذراعيك في الوضع المحدد للجهاز.",
            "قرّب الذراعين تدريجيًا أمام الصدر.",
            "ارجع ببطء إلى وضع البداية."
        ],
        mistakes:[
            "فتح الذراعين أكثر من اللازم.",
            "استخدام وزن كبير.",
            "تحويل الحركة إلى دفع بدل العزل."
        ]
    },

    {
        id:"push_up",
        name:"Push Up",
        arabic:"ضغط",
        muscle:"الصدر",
        category:"chest",
        icon:"🤸",
        primary:"الصدر",
        secondary:"الترايسبس + الكتف الأمامي",
        type:"Bodyweight",
        steps:[
            "ضع اليدين في وضع مريح تحت مستوى الكتفين تقريبًا.",
            "حافظ على الجسم في خط ثابت.",
            "انزل بتحكم.",
            "ادفع الأرض للعودة إلى وضع البداية."
        ],
        mistakes:[
            "هبوط الحوض أو رفعه بشكل مبالغ.",
            "سرعة الحركة.",
            "وضع اليدين بشكل يسبب عدم راحة."
        ]
    },


    /* ================= BACK ================= */

    {
        id:"wide_lat_pulldown",
        name:"Wide Grip Lat Pulldown",
        arabic:"سحب علوي واسع",
        muscle:"الظهر",
        category:"back",
        icon:"🔻",
        primary:"اللاتس",
        secondary:"البايسبس + أعلى الظهر",
        type:"Compound",
        steps:[
            "اجلس وثبت رجليك تحت الوسادة.",
            "امسك البار بقبضة واسعة ومريحة.",
            "اسحب البار لأسفل بتحكم.",
            "ارجع بالوزن ببطء دون فقدان السيطرة."
        ],
        mistakes:[
            "السحب بعنف.",
            "تحريك الجسم للخلف بشكل مبالغ.",
            "استخدام الذراعين فقط بدل الظهر."
        ]
    },

    {
        id:"close_cable_row",
        name:"Close Grip Cable Row",
        arabic:"سحب كيبل ضيق",
        muscle:"الظهر",
        category:"back",
        icon:"🔙",
        primary:"منتصف الظهر",
        secondary:"اللاتس + البايسبس",
        type:"Compound",
        steps:[
            "اجلس وثبت قدميك.",
            "حافظ على الظهر في وضع ثابت.",
            "اسحب المقبض نحو جسمك.",
            "ارجع للأمام بتحكم."
        ],
        mistakes:[
            "تقويس الظهر بشكل مبالغ.",
            "سحب الوزن بالذراع فقط.",
            "الحركة السريعة."
        ]
    },

    {
        id:"barbell_row",
        name:"Barbell Row",
        arabic:"باربل رو",
        muscle:"الظهر",
        category:"back",
        icon:"🏋️",
        primary:"منتصف الظهر",
        secondary:"اللاتس + الكتف الخلفي + البايسبس",
        type:"Compound",
        steps:[
            "ثبت القدمين وخذ وضعية مناسبة.",
            "حافظ على العمود الفقري في وضع ثابت.",
            "اسحب البار باتجاه الجزء المناسب من الجسم.",
            "أنزل البار بتحكم."
        ],
        mistakes:[
            "تقريب الظهر من وضع غير ثابت.",
            "استخدام وزن يمنع التحكم.",
            "تحويل الحركة إلى تأرجح."
        ]
    },

    {
        id:"face_pull",
        name:"Face Pull",
        arabic:"فيس بول",
        muscle:"الظهر",
        category:"back",
        icon:"🎯",
        primary:"الكتف الخلفي",
        secondary:"أعلى الظهر + عضلات الكفة المدورة",
        type:"Isolation",
        steps:[
            "ثبت الكابل على ارتفاع مناسب.",
            "اسحب الحبل باتجاه الوجه بتحكم.",
            "حافظ على حركة الكوعين بشكل مريح.",
            "ارجع ببطء إلى البداية."
        ],
        mistakes:[
            "وزن ثقيل جدًا.",
            "سحب الحبل بسرعة.",
            "تحريك الجسم بدل الذراعين والكتفين."
        ]
    },

    {
        id:"one_arm_row",
        name:"One Arm Dumbbell Row",
        arabic:"سحب دمبل يد واحدة",
        muscle:"الظهر",
        category:"back",
        icon:"🏋️",
        primary:"اللاتس",
        secondary:"منتصف الظهر + البايسبس",
        type:"Compound",
        steps:[
            "ثبت جسمك على البنش.",
            "أمسك الدمبل بيد واحدة.",
            "اسحب الدمبل باتجاه جسمك.",
            "أنزله بتحكم."
        ],
        mistakes:[
            "لف الجسم أثناء السحب.",
            "الحركة السريعة.",
            "رفع الكتف بدل تشغيل الظهر."
        ]
    },


    /* ================= SHOULDERS ================= */

    {
        id:"shoulder_press",
        name:"Shoulder Press",
        arabic:"ضغط كتف",
        muscle:"الكتف",
        category:"shoulders",
        icon:"🏋️",
        primary:"الكتف",
        secondary:"الترايسبس",
        type:"Compound",
        steps:[
            "ثبت ظهرك على البنش.",
            "ابدأ بالوزن في وضع مناسب بجانب الكتفين.",
            "ادفع الوزن لأعلى بتحكم.",
            "ارجع إلى وضع البداية."
        ],
        mistakes:[
            "تقويس الظهر بشدة.",
            "استخدام وزن كبير.",
            "الحركة السريعة."
        ]
    },

    {
        id:"lateral_raise",
        name:"Lateral Raise",
        arabic:"رفرفة جانبي",
        muscle:"الكتف",
        category:"shoulders",
        icon:"🪽",
        primary:"الكتف الجانبي",
        secondary:"الكتف الأمامي",
        type:"Isolation",
        steps:[
            "قف بثبات والدمبلز بجانب الجسم.",
            "ارفع الذراعين إلى الجانبين بشكل متحكم.",
            "توقف عند النقطة المناسبة.",
            "انزل ببطء."
        ],
        mistakes:[
            "استخدام وزن ثقيل جدًا.",
            "التأرجح بالجسم.",
            "رفع الكتفين أثناء الحركة."
        ]
    },

    {
        id:"front_raise",
        name:"Front Raise",
        arabic:"رفرفة أمامي",
        muscle:"الكتف",
        category:"shoulders",
        icon:"⬆️",
        primary:"الكتف الأمامي",
        secondary:"أعلى الصدر",
        type:"Isolation",
        steps:[
            "قف بشكل ثابت.",
            "ارفع الوزن للأمام بتحكم.",
            "توقف عند المستوى المناسب.",
            "ارجع ببطء."
        ],
        mistakes:[
            "التأرجح.",
            "الوزن الكبير.",
            "رفع الذراع بسرعة."
        ]
    },

    {
        id:"reverse_fly",
        name:"Reverse Fly",
        arabic:"رفرفة خلفي",
        muscle:"الكتف",
        category:"shoulders",
        icon:"🪽",
        primary:"الكتف الخلفي",
        secondary:"أعلى الظهر",
        type:"Isolation",
        steps:[
            "خذ وضعية ثابتة ومريحة.",
            "افتح الذراعين للخارج.",
            "حافظ على التحكم.",
            "ارجع ببطء."
        ],
        mistakes:[
            "استخدام وزن كبير.",
            "الحركة السريعة.",
            "رفع الكتفين."
        ]
    },


    /* ================= BICEPS ================= */

    {
        id:"db_curl",
        name:"Dumbbell Curl",
        arabic:"باي دمبل",
        muscle:"البايسبس",
        category:"biceps",
        icon:"💪",
        primary:"البايسبس",
        secondary:"الساعد",
        type:"Isolation",
        steps:[
            "ثبت الكوعين بجانب الجسم.",
            "ارفع الدمبل بتحكم.",
            "اضغط على العضلة في أعلى الحركة بشكل طبيعي.",
            "انزل ببطء."
        ],
        mistakes:[
            "تحريك الكوع للأمام.",
            "التأرجح بالجسم.",
            "استخدام وزن كبير."
        ]
    },

    {
        id:"hammer_curl",
        name:"Hammer Curl",
        arabic:"هامر كيرل",
        muscle:"البايسبس",
        category:"biceps",
        icon:"🔨",
        primary:"البايسبس والعضلة العضدية",
        secondary:"الساعد",
        type:"Isolation",
        steps:[
            "حافظ على قبضة محايدة.",
            "ارفع الدمبل بتحكم.",
            "ثبت الكوع بجانب الجسم.",
            "انزل ببطء."
        ],
        mistakes:[
            "التأرجح.",
            "تحريك الكوع.",
            "السرعة الزائدة."
        ]
    },

    {
        id:"cable_curl",
        name:"Cable Curl",
        arabic:"باي كيبل",
        muscle:"البايسبس",
        category:"biceps",
        icon:"💪",
        primary:"البايسبس",
        secondary:"الساعد",
        type:"Isolation",
        steps:[
            "ثبت الكابل على الوضع المناسب.",
            "حافظ على الكوعين ثابتين.",
            "ارفع المقبض بتحكم.",
            "ارجع ببطء."
        ],
        mistakes:[
            "تحريك الجسم.",
            "استخدام وزن كبير.",
            "ترك الوزن يسقط بسرعة."
        ]
    },


    /* ================= TRICEPS ================= */

    {
        id:"triceps_pushdown",
        name:"Triceps Pushdown",
        arabic:"ترايسبس كيبل",
        muscle:"الترايسبس",
        category:"triceps",
        icon:"💪",
        primary:"الترايسبس",
        secondary:"الساعد",
        type:"Isolation",
        steps:[
            "ثبت الكابل على ارتفاع مناسب.",
            "حافظ على الكوعين بجانب الجسم.",
            "ادفع المقبض لأسفل.",
            "ارجع بتحكم."
        ],
        mistakes:[
            "تحريك الكوعين.",
            "استخدام وزن كبير.",
            "الانحناء للأمام بشكل مبالغ."
        ]
    },

    {
        id:"overhead_extension",
        name:"Overhead Triceps Extension",
        arabic:"ترايسبس فوق الرأس",
        muscle:"الترايسبس",
        category:"triceps",
        icon:"⬆️",
        primary:"الترايسبس",
        secondary:"الكتف",
        type:"Isolation",
        steps:[
            "ثبت الجسم والذراعين في وضع مناسب.",
            "اخفض الوزن خلف الرأس بتحكم.",
            "مد الذراعين للعودة.",
            "حافظ على ثبات الكوعين."
        ],
        mistakes:[
            "فتح الكوعين بشكل كبير.",
            "وزن ثقيل.",
            "الحركة السريعة."
        ]
    },

    {
        id:"close_grip_press",
        name:"Close Grip Bench Press",
        arabic:"بنش قبضة ضيقة",
        muscle:"الترايسبس",
        category:"triceps",
        icon:"🏋️",
        primary:"الترايسبس",
        secondary:"الصدر + الكتف الأمامي",
        type:"Compound",
        steps:[
            "خذ قبضة مريحة وأقرب من البنش التقليدي.",
            "أنزل الوزن بتحكم.",
            "ادفع لأعلى.",
            "حافظ على ثبات الكتفين."
        ],
        mistakes:[
            "تقريب القبضة بشكل مبالغ.",
            "الوزن الزائد.",
            "عدم التحكم."
        ]
    },


    /* ================= LEGS ================= */

    {
        id:"squat",
        name:"Squat",
        arabic:"سكوات",
        muscle:"الرجل",
        category:"legs",
        icon:"🦵",
        primary:"الفخذين",
        secondary:"المؤخرة + الخلفية",
        type:"Compound",
        steps:[
            "ثبت القدمين في وضع مريح.",
            "ابدأ بالنزول مع الحفاظ على ثبات الجسم.",
            "انزل إلى مدى مريح ومناسب.",
            "ادفع للأعلى بتحكم."
        ],
        mistakes:[
            "استخدام وزن أكبر من القدرة.",
            "فقدان التوازن.",
            "الحركة بدون تحكم."
        ]
    },

    {
        id:"leg_press",
        name:"Leg Press",
        arabic:"ليج برس",
        muscle:"الرجل",
        category:"legs",
        icon:"🦵",
        primary:"الفخذين",
        secondary:"المؤخرة + الخلفية",
        type:"Compound",
        steps:[
            "ثبت ظهرك على الجهاز.",
            "ضع القدمين في وضع مريح.",
            "ادفع المنصة بتحكم.",
            "ارجع ببطء إلى وضع البداية."
        ],
        mistakes:[
            "نزول أعمق من المدى المريح.",
            "رفع الحوض عن المقعد.",
            "استخدام وزن كبير."
        ]
    },

    {
        id:"leg_extension",
        name:"Leg Extension",
        arabic:"ليج إكستنشن",
        muscle:"الرجل",
        category:"legs",
        icon:"🦵",
        primary:"الفخذ الأمامي",
        secondary:"-",
        type:"Isolation",
        steps:[
            "اضبط الجهاز على وضع مناسب.",
            "مد الرجلين بتحكم.",
            "توقف لحظة في أعلى الحركة.",
            "ارجع ببطء."
        ],
        mistakes:[
            "استخدام وزن ثقيل.",
            "الحركة السريعة.",
            "وضعية جهاز غير مناسبة."
        ]
    },

    {
        id:"leg_curl",
        name:"Leg Curl",
        arabic:"ليج كيرل",
        muscle:"الرجل",
        category:"legs",
        icon:"🦵",
        primary:"الفخذ الخلفي",
        secondary:"عضلات الساق",
        type:"Isolation",
        steps:[
            "ثبت الجسم على الجهاز.",
            "اثنِ الرجلين بتحكم.",
            "توقف عند نقطة الانقباض المناسبة.",
            "ارجع ببطء."
        ],
        mistakes:[
            "رفع الحوض.",
            "الحركة السريعة.",
            "الوزن الزائد."
        ]
    },

    {
        id:"calf_raise",
        name:"Calf Raise",
        arabic:"سمانة",
        muscle:"الرجل",
        category:"legs",
        icon:"🦶",
        primary:"عضلات السمانة",
        secondary:"-",
        type:"Isolation",
        steps:[
            "ثبت القدمين بشكل مريح.",
            "ارفع الكعبين بتحكم.",
            "توقف لحظة في أعلى الحركة.",
            "انزل ببطء."
        ],
        mistakes:[
            "الارتداد بسرعة.",
            "مدى حركة صغير جدًا.",
            "استخدام وزن غير مناسب."
        ]
    },


    /* ================= ABS ================= */

    {
        id:"crunch",
        name:"Crunch",
        arabic:"كرنش",
        muscle:"البطن",
        category:"abs",
        icon:"🔥",
        primary:"عضلات البطن",
        secondary:"-",
        type:"Bodyweight",
        steps:[
            "استلقِ على ظهرك.",
            "ثبت القدمين بشكل مريح.",
            "ارفع الجزء العلوي بتحكم.",
            "ارجع ببطء."
        ],
        mistakes:[
            "سحب الرقبة باليدين.",
            "الحركة السريعة.",
            "استخدام مدى غير مريح."
        ]
    },

    {
        id:"leg_raise",
        name:"Leg Raise",
        arabic:"رفع الرجلين",
        muscle:"البطن",
        category:"abs",
        icon:"🔥",
        primary:"عضلات البطن",
        secondary:"مثنيات الورك",
        type:"Bodyweight",
        steps:[
            "ثبت ظهرك في الوضع المناسب.",
            "ارفع الرجلين بتحكم.",
            "لا تستخدم الدفع أو التأرجح.",
            "أنزل الرجلين ببطء."
        ],
        mistakes:[
            "التأرجح.",
            "الحركة السريعة.",
            "فقدان التحكم في أسفل الظهر."
        ]
    },


    /* ================= FOREARMS ================= */

    {
        id:"reverse_curl",
        name:"Reverse Curl",
        arabic:"ريفيرس كيرل",
        muscle:"السواعد",
        category:"forearms",
        icon:"💪",
        primary:"الساعد",
        secondary:"البايسبس",
        type:"Isolation",
        steps:[
            "امسك البار بقبضة عكسية.",
            "ثبت الكوعين بجانب الجسم.",
            "ارفع الوزن بتحكم.",
            "انزل ببطء."
        ],
        mistakes:[
            "استخدام وزن ثقيل جدًا.",
            "تحريك الكوعين.",
            "التأرجح."
        ]
    },

    {
        id:"wrist_curl",
        name:"Wrist Curl",
        arabic:"تمرين رسغ",
        muscle:"السواعد",
        category:"forearms",
        icon:"✊",
        primary:"عضلات الساعد",
        secondary:"عضلات الرسغ",
        type:"Isolation",
        steps:[
            "ثبت الساعد في وضع مريح.",
            "حرّك الرسغ فقط.",
            "ارفع الوزن بتحكم.",
            "ارجع ببطء."
        ],
        mistakes:[
            "تحريك الساعد بالكامل.",
            "استخدام وزن كبير.",
            "الحركة السريعة."
        ]
    }

];


/* ================= MUSCLES ================= */

const muscles = [

    {
        id:"chest",
        name:"الصدر",
        icon:"🫁"
    },

    {
        id:"back",
        name:"الظهر",
        icon:"🔙"
    },

    {
        id:"shoulders",
        name:"الكتف",
        icon:"🏋️"
    },

    {
        id:"biceps",
        name:"الباي",
        icon:"💪"
    },

    {
        id:"triceps",
        name:"التراي",
        icon:"💪"
    },

    {
        id:"legs",
        name:"الرجل",
        icon:"🦵"
    },

    {
        id:"forearms",
        name:"السواعد",
        icon:"✊"
    },

    {
        id:"abs",
        name:"البطن",
        icon:"🔥"
    }

];


/* ================= VARIABLES ================= */

let currentExercise = null;

let currentProgram =
    JSON.parse(
        localStorage.getItem("saykoWorkoutProgram") || "[]"
    );

let editingProgramId = null;


/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded",()=>{

    renderMuscles();

    renderProgram();

    if(location.hash === "#program"){

        showProgram();

    }

});


/* ================= HOME ================= */

function goHome(){

    window.location.href="index.html";

}


/* ================= MUSCLES ================= */

function renderMuscles(){

    const grid =
        document.getElementById("muscleGrid");

    grid.innerHTML="";

    muscles.forEach(muscle=>{

        const card =
            document.createElement("div");

        card.className="muscleCard";

        card.innerHTML=`

            <div class="muscleIcon">
                ${muscle.icon}
            </div>

            <div class="muscleName">
                ${muscle.name}
            </div>

        `;

        card.onclick=()=>{

            selectMuscle(muscle.id);

        };

        grid.appendChild(card);

    });

}


/* ================= SELECT MUSCLE ================= */

function selectMuscle(id){

    document
        .querySelectorAll(".muscleCard")
        .forEach(card=>{
            card.classList.remove("active");
        });

    const index =
        muscles.findIndex(
            muscle=>muscle.id===id
        );

    if(index===-1) return;

    const cards =
        document.querySelectorAll(".muscleCard");

    if(cards[index]){
        cards[index].classList.add("active");
    }

    const muscle =
        muscles[index];

    document
        .getElementById("selectedMuscleTitle")
        .textContent=
        muscle.name;

    document
        .getElementById("selectedMuscleSubtitle")
        .textContent=
        `تمارين ${muscle.name}`;

    renderExercises(id);

    document
        .getElementById("exerciseSection")
        .classList.remove("hidden");

    document
        .getElementById("exerciseSection")
        .scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

}


/* ================= RENDER EXERCISES ================= */

function renderExercises(category){

    const grid =
        document.getElementById("exerciseGrid");

    const list =
        exercises.filter(
            exercise=>exercise.category===category
        );

    grid.innerHTML="";

    list.forEach(exercise=>{

        const card =
            document.createElement("div");

        card.className="exerciseCard";

        card.innerHTML=`

            <div class="exerciseTop">

                <div class="exerciseEmoji">
                    ${exercise.icon}
                </div>

                <div>

                    <div class="exerciseName">
                        ${exercise.arabic}
                    </div>

                    <div class="exerciseMuscle">
                        ${exercise.name}
                    </div>

                </div>

            </div>

            <div class="exerciseMeta">

                <span>
                    🎯 ${exercise.primary}
                </span>

                <span>
                    ${exercise.type}
                </span>

            </div>

        `;

        card.onclick=()=>{

            openExercise(exercise.id);

        };

        grid.appendChild(card);

    });

}


/* ================= ALL ================= */

function showAllExercises(){

    document
        .querySelectorAll(".muscleCard")
        .forEach(card=>{
            card.classList.remove("active");
        });

    document
        .getElementById("selectedMuscleTitle")
        .textContent=
        "كل التمارين";

    document
        .getElementById("selectedMuscleSubtitle")
        .textContent=
        "جميع التمارين المتاحة";

    const grid =
        document.getElementById("exerciseGrid");

    grid.innerHTML="";

    exercises.forEach(exercise=>{

        const card =
            document.createElement("div");

        card.className="exerciseCard";

        card.innerHTML=`

            <div class="exerciseTop">

                <div class="exerciseEmoji">
                    ${exercise.icon}
                </div>

                <div>

                    <div class="exerciseName">
                        ${exercise.arabic}
                    </div>

                    <div class="exerciseMuscle">
                        ${exercise.name}
                    </div>

                </div>

            </div>

            <div class="exerciseMeta">

                <span>
                    ${exercise.muscle}
                </span>

                <span>
                    ${exercise.type}
                </span>

            </div>

        `;

        card.onclick=()=>{
            openExercise(exercise.id);
        };

        grid.appendChild(card);

    });

    document
        .getElementById("exerciseSection")
        .classList.remove("hidden");

}


/* ================= OPEN EXERCISE ================= */

function openExercise(id){

    currentExercise =
        exercises.find(
            exercise=>exercise.id===id
        );

    if(!currentExercise) return;

    document
        .getElementById("modalMuscle")
        .textContent=
        currentExercise.muscle;

    document
        .getElementById("modalTitle")
        .textContent=
        currentExercise.arabic;

    document
        .getElementById("modalIcon")
        .textContent=
        currentExercise.icon;

    document
        .getElementById("modalPrimary")
        .textContent=
        currentExercise.primary;

    document
        .getElementById("modalSecondary")
        .textContent=
        currentExercise.secondary;

    document
        .getElementById("modalType")
        .textContent=
        currentExercise.type;


    const steps =
        document.getElementById("modalSteps");

    steps.innerHTML="";

    currentExercise.steps.forEach(
        (step,index)=>{

            const div =
                document.createElement("div");

            div.className="step";

            div.innerHTML=
                `<strong>${index+1}.</strong> ${step}`;

            steps.appendChild(div);

        }
    );


    const mistakes =
        document.getElementById("modalMistakes");

    mistakes.innerHTML="";

    currentExercise.mistakes.forEach(
        mistake=>{

            const div =
                document.createElement("div");

            div.className="mistake";

            div.textContent=
                "• "+mistake;

            mistakes.appendChild(div);

        }
    );


    const existing =
        currentProgram.find(
            item=>item.exerciseId===id
        );

    if(existing){

        document.getElementById("setsInput").value=
            existing.sets;

        document.getElementById("repsInput").value=
            existing.reps;

        document.getElementById("restInput").value=
            existing.rest;

        document.getElementById("addProgramBtn")
            .textContent=
            "✓ موجود في برنامجي";

    }else{

        document.getElementById("setsInput").value=3;
        document.getElementById("repsInput").value="8-12";
        document.getElementById("restInput").value=90;

        document.getElementById("addProgramBtn")
            .textContent=
            "⭐ أضف لبرنامجي";

    }


    document
        .getElementById("exerciseModal")
        .classList.add("show");

}


function closeExercise(){

    document
        .getElementById("exerciseModal")
        .classList.remove("show");

}


/* ================= ADD PROGRAM ================= */

function addCurrentToProgram(){

    if(!currentExercise) return;

    const sets =
        parseInt(
            document.getElementById("setsInput").value
        );

    const reps =
        document.getElementById("repsInput").value.trim();

    const rest =
        parseInt(
            document.getElementById("restInput").value
        );


    if(!sets || sets<1){

        showToast("أدخل عدد مجموعات صحيح");

        return;

    }

    if(!reps){

        showToast("أدخل عدد التكرارات");

        return;

    }


    const existingIndex =
        currentProgram.findIndex(
            item=>
                item.exerciseId===
                currentExercise.id
        );


    const item = {

        id:
            existingIndex>=0
            ? currentProgram[existingIndex].id
            : Date.now(),

        exerciseId:
            currentExercise.id,

        name:
            currentExercise.arabic,

        english:
            currentExercise.name,

        muscle:
            currentExercise.muscle,

        sets:sets,

        reps:reps,

        rest:
            Number.isFinite(rest)
            ? rest
            : 90

    };


    if(existingIndex>=0){

        currentProgram[existingIndex]=item;

        showToast("تم تحديث التمرين");

    }else{

        currentProgram.push(item);

        showToast("تمت إضافة التمرين لبرنامجك");

    }


    saveProgram();

    renderProgram();

    document
        .getElementById("addProgramBtn")
        .textContent=
        "✓ موجود في برنامجي";

}


/* ================= SAVE PROGRAM ================= */

function saveProgram(){

    localStorage.setItem(
        "saykoWorkoutProgram",
        JSON.stringify(currentProgram)
    );

}


/* ================= PROGRAM ================= */

function showProgram(){

    document
        .getElementById("exercisesPage")
        .classList.add("hidden");

    document
        .getElementById("programPage")
        .classList.remove("hidden");

    document
        .getElementById("exercisesTab")
        .classList.remove("active");

    document
        .getElementById("programTab")
        .classList.add("active");

    renderProgram();

}


function showExercises(){

    document
        .getElementById("programPage")
        .classList.add("hidden");

    document
        .getElementById("exercisesPage")
        .classList.remove("hidden");

    document
        .getElementById("programTab")
        .classList.remove("active");

    document
        .getElementById("exercisesTab")
        .classList.add("active");

}


/* ================= RENDER PROGRAM ================= */

function renderProgram(){

    const list =
        document.getElementById("programList");

    if(!list) return;

    list.innerHTML="";


    if(!currentProgram.length){

        list.innerHTML=`

            <div class="emptyProgram">

                <div style="font-size:40px;">
                    📋
                </div>

                <div>
                    برنامجك فارغ حاليًا
                </div>

                <div style="font-size:12px;">
                    اختر تمرينًا من قسم التمارين
                    واضغط «أضف لبرنامجي»
                </div>

            </div>

        `;

        return;

    }


    currentProgram.forEach(item=>{

        const div =
            document.createElement("div");

        div.className="programItem";

        div.innerHTML=`

            <div class="programItemTop">

                <div>

                    <div class="programName">
                        ${item.name}
                    </div>

                    <div class="programMuscle">
                        ${item.muscle}
                    </div>

                </div>

                <div>
                    ⭐
                </div>

            </div>


            <div class="programStats">

                <div class="programStat">

                    <span>
                        المجموعات
                    </span>

                    <strong>
                        ${item.sets}
                    </strong>

                </div>


                <div class="programStat">

                    <span>
                        التكرارات
                    </span>

                    <strong>
                        ${item.reps}
                    </strong>

                </div>


                <div class="programStat">

                    <span>
                        الراحة
                    </span>

                    <strong>
                        ${item.rest} ث
                    </strong>

                </div>

            </div>


            <div class="programActions">

                <button
                    class="programAction"
                    onclick="editProgram(${item.id})">
                    ✏️ تعديل
                </button>

                <button
                    class="programAction delete"
                    onclick="removeProgram(${item.id})">
                    🗑 حذف
                </button>

            </div>

        `;

        list.appendChild(div);

    });

}


/* ================= EDIT PROGRAM ================= */

function editProgram(id){

    const item =
        currentProgram.find(
            item=>item.id===id
        );

    if(!item) return;

    editingProgramId=id;

    document.getElementById("editSets").value=
        item.sets;

    document.getElementById("editReps").value=
        item.reps;

    document.getElementById("editRest").value=
        item.rest;

    document
        .getElementById("programEditModal")
        .classList.add("show");

}


function closeProgramEdit(){

    document
        .getElementById("programEditModal")
        .classList.remove("show");

    editingProgramId=null;

}


/* ================= SAVE EDIT ================= */

function saveProgramEdit(){

    if(editingProgramId===null) return;

    const item =
        currentProgram.find(
            item=>item.id===editingProgramId
        );

    if(!item) return;

    const sets =
        parseInt(
            document.getElementById("editSets").value
        );

    const reps =
        document.getElementById("editReps").value.trim();

    const rest =
        parseInt(
            document.getElementById("editRest").value
        );


    if(!sets || sets<1){

        showToast("أدخل عدد مجموعات صحيح");

        return;

    }

    if(!reps){

        showToast("أدخل التكرارات");

        return;

    }


    item.sets=sets;
    item.reps=reps;
    item.rest=
        Number.isFinite(rest)
        ? rest
        : 90;


    saveProgram();

    renderProgram();

    closeProgramEdit();

    showToast("تم حفظ التعديل");

}


/* ================= REMOVE ================= */

function removeProgram(id){

    currentProgram =
        currentProgram.filter(
            item=>item.id!==id
        );

    saveProgram();

    renderProgram();

    showToast("تم حذف التمرين");

}


/* ================= CLEAR ================= */

function clearProgram(){

    if(!currentProgram.length){

        showToast("برنامجك فارغ بالفعل");

        return;

    }

    currentProgram=[];

    saveProgram();

    renderProgram();

    showToast("تم مسح البرنامج");

}


/* ================= TOAST ================= */

function showToast(message){

    const toast =
        document.getElementById("toast");

    toast.textContent=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2200);

}


/* ================= CLOSE MODALS ================= */

document
    .querySelectorAll(".modalOverlay")
    .forEach(overlay=>{

        overlay.addEventListener(
            "click",
            event=>{

                if(event.target===overlay){

                    overlay.classList.remove("show");

                }

            }
        );

    });
