DataStore.lectures.push({
    id: 4,
    title: "Verb To Be, Simple Present, Sentence Structure & Jobs",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - EXAM FOCUSED
    // =========================================================================
    revision: [
        // --- Verb To Be ---
        { type: 'title', content: '1. The Verb "To Be"' },
        { type: 'text', content: 'The verb "Be" is an irregular verb with several forms:' },
        {
            type: 'table',
            headers: ['Pronoun', 'Present', 'Past', 'Participles'],
            rows: [
                ['<b>I</b>', 'am', 'was', '<b>-ed form:</b> been'],
                ['<b>he, she, it</b>', 'is', 'was', '<b>-ing form:</b> being'],
                ['<b>you, we, they</b>', 'are', 'were', '']
            ]
        },

        // --- Simple Present ---
        { type: 'title', content: '2. Simple Present Tense' },
        { type: 'rule', title: 'Usage', content: 'Used to talk about <b>habits</b>, <b>unchanging situations</b>, <b>facts</b>, and <b>planned events</b>.' },
        { type: 'rule', title: 'Form', content: 'Most verbs use the infinitive form (e.g., "sing").<br>However, for <b>he, she, it (3rd person singular)</b>, we add an <b>"s"</b> (e.g., "writes").' },
        {
            type: 'table',
            headers: ['Affirmative', 'Negative', 'Interrogative (Question)'],
            rows: [
                ['I / You / We / They <b>drink</b>', 'I / You / We / They <b>don\'t drink</b>', '<b>Do</b> I / you / we / they <b>drink?</b>'],
                ['He / She / It <b>drinks</b>', 'He / She / It <b>doesn\'t drink</b>', '<b>Does</b> he / she / it <b>drink?</b>']
            ]
        },

        // --- Sentence Structure ---
        { type: 'title', content: '3. Sentence Structure' },
        { type: 'text', content: 'Every complete English sentence MUST have a <b>Subject (S)</b> and a <b>Verb (V)</b>. Sometimes, it is followed by an <b>Object (O)</b>.' },
        { type: 'rule', title: 'Subject (S)', content: 'Usually comes before the verb. It can be a noun or pronoun. (e.g., <b>The girls</b> had been swimming).' },
        { type: 'rule', title: 'Verb Phrase (V)', content: 'The main action, sometimes with auxiliary verbs. (e.g., The girls <b>had been swimming</b>).' },
        { type: 'rule', title: 'Object (O)', content: 'Receives the action. (e.g., Rajiv was reading <b>a new novel</b>).' },

        // --- Vocabulary: Jobs ---
        { type: 'title', content: '4. Vocabulary: Jobs (What they do & Where they work)' },
        {
            type: 'table',
            headers: ['Job', 'What do they do?', 'Where do they work?'],
            rows: [
                ['<b>Accountants</b>', 'Look after the finances.', 'In an office.'],
                ['<b>Chambermaids</b>', 'Clean and tidy rooms.', 'In a hotel.'],
                ['<b>Surgeons</b>', 'Operate on people who are sick.', 'In a hospital.'],
                ['<b>Lawyers</b>', 'Defend and prosecute people.', 'In a law court / office.'],
                ['<b>Tailors</b>', 'Design, make, alter or repair garments.', 'In factories and shops.'],
                ['<b>Vets</b>', 'Look after people\'s animals.', 'In a veterinary surgery.'],
                ['<b>Porters</b>', 'Carry other people\'s bags and luggage.', 'In a hotel or train station.'],
                ['<b>Welders</b>', 'Weld metal to make things.', 'In factories and construction.'],
                ['<b>Fishmongers</b>', 'Prepare and sell fish.', 'In a fishmongers.'],
                ['<b>Flight attendants</b>', 'Look after passengers.', 'In an aeroplane.']
            ]
        }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC) - الخلاصة للامتحان مترجمة
    // =========================================================================
    revisionAr: [
        // --- Verb To Be ---
        { type: 'title', content: '١. فعل يكون (Verb "To Be")' },
        {
            type: 'table',
            headers: ['الضمير', 'المضارع (Present)', 'الماضي (Past)', 'التصريفات الأخرى'],
            rows: [
                ['<b>I (أنا)</b>', 'am', 'was', '<b>التصريف الثالث:</b> been'],
                ['<b>he, she, it (المفرد)</b>', 'is', 'was', '<b>المضاف له ing:</b> being'],
                ['<b>you, we, they (الجمع)</b>', 'are', 'were', '']
            ]
        },

        // --- Simple Present ---
        { type: 'title', content: '٢. زمن المضارع البسيط (Simple Present)' },
        { type: 'rule', title: 'الاستخدام', content: 'يُستخدم للتعبير عن <b>العادات</b>، <b>الحقائق الثابتة</b>، والمواقف التي لا تتغير.' },
        { type: 'rule', title: 'التكوين', content: 'الفعل في المصدر مع (I, You, We, They).<br>ونضيف للفعل <b>(s / es)</b> مع المفرد الغائب <b>(He, She, It)</b>.' },
        {
            type: 'table',
            headers: ['الإثبات (Affirmative)', 'النفي (Negative)', 'السؤال (Question)'],
            rows: [
                ['I / You / We / They <b>drink</b>', 'نستخدم <b>don\'t + المصدر</b>', 'نسأل بـ <b>Do + المصدر</b>'],
                ['He / She / It <b>drinks</b>', 'نستخدم <b>doesn\'t + المصدر</b>', 'نسأل بـ <b>Does + المصدر</b>']
            ]
        },

        // --- Sentence Structure ---
        { type: 'title', content: '٣. تكوين الجملة (مهم جداً لسؤال الاستخراج)' },
        { type: 'text', content: 'أي جملة إنجليزية صحيحة لابد أن تحتوي على <b>فاعل (Subject)</b> و<b>فعل (Verb)</b>، وأحياناً يأتي بعدها <b>مفعول به (Object)</b>.' },
        { type: 'rule', title: 'الفاعل (Subject)', content: 'هو من يقوم بالفعل ويأتي في بداية الجملة غالباً (مثل: <b>The girls</b>).' },
        { type: 'rule', title: 'الفعل (Verb)', content: 'هو الحدث أو الحركة في الجملة (مثل: <b>played, works, cross</b>).' },
        { type: 'rule', title: 'المفعول به (Object)', content: 'هو من يقع عليه الفعل (مثل: يقرأ <b>رواية جديدة</b>).' },

        // --- Vocabulary: Jobs ---
        { type: 'title', content: '٤. الوظائف (ماذا يفعلون وأين يعملون؟)' },
        {
            type: 'table',
            headers: ['الوظيفة (Job)', 'ماذا يفعل؟', 'أين يعمل؟'],
            rows: [
                ['<b>Accountants (المحاسبون)</b>', 'يعتنون بالأمور المالية (finances).', 'في مكتب (office).'],
                ['<b>Chambermaids (عاملات النظافة)</b>', 'ينظفون ويرتبون الغرف.', 'في فندق (hotel).'],
                ['<b>Surgeons (الجراحون)</b>', 'يجرون عمليات جراحية للمرضى.', 'في مستشفى (hospital).'],
                ['<b>Lawyers (المحامون)</b>', 'يدافعون ويقاضون الأشخاص.', 'في المحكمة (law court).'],
                ['<b>Tailors (الخياطون)</b>', 'يصممون ويصلحون الملابس (garments).', 'في المصانع والمتاجر.'],
                ['<b>Vets (الأطباء البيطريون)</b>', 'يعتنون بالحيوانات.', 'في عيادة بيطرية.'],
                ['<b>Porters (الشيالون/الحمالون)</b>', 'يحملون حقائب وأمتعة الآخرين.', 'في الفندق أو محطة القطار.'],
                ['<b>Welders (اللحامون)</b>', 'يلحمون المعادن (Weld metal).', 'في المصانع ومواقع البناء.'],
                ['<b>Flight attendants (مضيفو الطيران)</b>', 'يعتنون بالمسافرين (passengers).', 'في الطائرة (aeroplane).']
            ]
        }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (أسئلة من الـ PDF مباشرة - Practice)
    // =========================================================================
    quiz: [
        // --- 1. Simple Present Practice (Page 5 exactly) ---
        {
            question: "1. I usually ________ to school.",
            questionAr: "١. أنا عادة ________ إلى المدرسة.",
            options: ["go", "goes", "going", "am go"],
            optionsAr: ["go (مع أنا والجمع)", "goes (مع المفرد)", "going", "am go"],
            correct: 0,
            hint: "With 'I', we use the base form of the verb without 's'.",
            hintAr: "مع الضمير I لا نضع s للفعل في المضارع البسيط."
        },
        {
            question: "2. They ________ us often.",
            questionAr: "٢. هم ________ غالباً.",
            options: ["visits", "visiting", "visit", "are visit"],
            optionsAr: ["visits", "visiting", "visit (مع الجمع)", "are visit"],
            correct: 2,
            hint: "With 'They', we use the base form without 's'.",
            hintAr: "مع الضمير They (جمع) الفعل يبقى في المصدر بدون s."
        },
        {
            question: "3. You ________ basketball once a week.",
            questionAr: "٣. أنت ________ كرة السلة مرة في الأسبوع.",
            options: ["plays", "playing", "are play", "play"],
            optionsAr: ["plays", "playing", "are play", "play"],
            correct: 3,
            hint: "With 'You', the verb does not take an 's'.",
            hintAr: "مع الضمير You نستخدم الفعل في المصدر (play)."
        },
        {
            question: "4. Tom ________ every day.",
            questionAr: "٤. توم ________ كل يوم.",
            options: ["work", "works", "working", "is work"],
            optionsAr: ["work", "works (مع المفرد)", "working", "is work"],
            correct: 1,
            hint: "Tom is a singular subject (he), so the verb takes an 's'.",
            hintAr: "توم (مفرد غائب) لذلك نضيف للفعل s لتصبح (works)."
        },
        {
            question: "5. He always ________ us funny stories.",
            questionAr: "٥. هو دائماً ________ لنا قصصاً مضحكة.",
            options: ["tell", "telling", "tells", "is tell"],
            optionsAr: ["tell", "telling", "tells", "is tell"],
            correct: 2,
            hint: "With 'He', add 's' to the verb in the simple present.",
            hintAr: "مع الضمير He نضيف s للفعل لتصبح tells."
        },
        {
            question: "6. She never ________ me with that!",
            questionAr: "٦. هي لا ________ أبداً في ذلك!",
            options: ["help", "helps", "helping", "helped"],
            optionsAr: ["help", "helps", "helping", "helped"],
            correct: 1,
            hint: "Even with 'never', the verb takes 's' because the subject is 'She'.",
            hintAr: "لوجود الضمير She، نضع s للفعل (helps)."
        },
        {
            question: "7. Martha and Kevin ________ twice a week.",
            questionAr: "٧. مارثا وكيفن ________ مرتين في الأسبوع.",
            options: ["swims", "swim", "swimming", "is swim"],
            optionsAr: ["swims", "swim (جمع)", "swimming", "is swim"],
            correct: 1,
            hint: "Martha and Kevin are plural (they), so no 's'.",
            hintAr: "مارثا وكيفن شخصان (جمع = They)، لذلك الفعل في المصدر بدون s (swim)."
        },
        {
            question: "8. In this club people usually ________ a lot.",
            questionAr: "٨. في هذا النادي، الناس عادة ________ كثيراً.",
            options: ["dances", "dancing", "dance", "are dance"],
            optionsAr: ["dances", "dancing", "dance", "are dance"],
            correct: 2,
            hint: "'People' is a plural noun, so the verb is without 's'.",
            hintAr: "كلمة People (الناس) جمع، لذلك لا نضع للفعل s (dance)."
        },
        {
            question: "9. Linda ________ of her sister.",
            questionAr: "٩. ليندا ________ بشقيقتها.",
            options: ["take care", "takes care", "taking care", "is take care"],
            optionsAr: ["take care", "takes care", "taking care", "is take care"],
            correct: 1,
            hint: "Linda is singular (she), so 'take' becomes 'takes'.",
            hintAr: "ليندا مفرد (She)، لذلك نضيف s للفعل الأول (takes)."
        },
        {
            question: "10. John rarely ________ the country.",
            questionAr: "١٠. جون نادراً ما ________ البلاد.",
            options: ["leave", "leaving", "leaves", "is leave"],
            optionsAr: ["leave", "leaving", "leaves", "is leave"],
            correct: 2,
            hint: "John is singular (he) -> leaves.",
            hintAr: "جون مفرد (He) لذلك نضيف s للفعل (leaves)."
        },

        // --- 2. Sentence Structure Practice (Page 8 exactly) ---
        {
            question: "11. Identify the SUBJECT in this sentence: 'Bridges cross rivers.'",
            questionAr: "١١. حدد الفاعل (Subject) في هذه الجملة: 'Bridges cross rivers.'",
            options: ["cross", "rivers", "Bridges", "cross rivers"],
            optionsAr: ["cross", "rivers", "Bridges", "cross rivers"],
            correct: 2,
            hint: "The subject is the doer of the action, usually at the beginning.",
            hintAr: "الفاعل هو من يقوم بالفعل ويأتي أول الجملة (Bridges - الجسور)."
        },
        {
            question: "12. Identify the VERB in this sentence: 'A terrible earthquake occurred in Turkey.'",
            questionAr: "١٢. حدد الفعل (Verb) في هذه الجملة: 'A terrible earthquake occurred in Turkey.'",
            options: ["earthquake", "occurred", "terrible", "Turkey"],
            optionsAr: ["earthquake", "occurred", "terrible", "Turkey"],
            correct: 1,
            hint: "The verb describes the action (occurred = happened).",
            hintAr: "الفعل هو الحدث (occurred بمعنى حدث / وقع)."
        },
        {
            question: "13. Identify the OBJECT in this sentence: 'Trucks carry large loads.'",
            questionAr: "١٣. حدد المفعول به (Object) في هذه الجملة: 'Trucks carry large loads.'",
            options: ["Trucks", "carry", "large loads", "large"],
            optionsAr: ["Trucks", "carry", "large loads", "large"],
            correct: 2,
            hint: "The object receives the action (What do they carry? large loads).",
            hintAr: "المفعول به يقع عليه الفعل (ماذا تحمل الشاحنات؟ حمولات كبيرة)."
        },
        {
            question: "14. Identify the SUBJECT in this sentence: 'Salespeople treat customers with courtesy.'",
            questionAr: "١٤. حدد الفاعل (Subject) في الجملة: 'Salespeople treat customers with courtesy.'",
            options: ["Salespeople", "treat", "customers", "courtesy"],
            optionsAr: ["Salespeople", "treat", "customers", "courtesy"],
            correct: 0,
            hint: "Who treats the customers? The Salespeople.",
            hintAr: "الفاعل يأتي في البداية (مندوبو المبيعات - Salespeople)."
        },
        {
            question: "15. Identify the OBJECT in this sentence: 'Helmets protect bicyclists.'",
            questionAr: "١٥. حدد المفعول به (Object) في الجملة: 'Helmets protect bicyclists.'",
            options: ["Helmets", "protect", "bicyclists", "There is no object"],
            optionsAr: ["Helmets", "protect", "bicyclists", "There is no object"],
            correct: 2,
            hint: "Who is being protected? The bicyclists (object).",
            hintAr: "المفعول به هو من تمت حمايته (راكبو الدراجات - bicyclists)."
        },

        // --- 3. Jobs Vocabulary (Pages 13-14) ---
        {
            question: "16. Who designs, makes, or repairs garments?",
            questionAr: "١٦. من الذي يصمم ويصنع ويصلح الملابس (garments)؟",
            options: ["Tailor", "Welder", "Accountant", "Chambermaid"],
            optionsAr: ["Tailor (الخياط)", "Welder (اللحام)", "Accountant (المحاسب)", "Chambermaid (عاملة النظافة)"],
            correct: 0,
            hint: "A tailor makes or alters clothes.",
            hintAr: "الخياط هو من يصنع ويصلح الملابس."
        },
        {
            question: "17. What does a chambermaid do?",
            questionAr: "١٧. ما هو عمل عاملة الفندق (Chambermaid)؟",
            options: ["Operates on sick people.", "Cleans and tidies rooms.", "Bakes bread.", "Serves drinks."],
            optionsAr: ["تجري عمليات جراحية.", "تنظف وترتب الغرف.", "تخبز الخبز.", "تقدم المشروبات."],
            correct: 1,
            hint: "Chambermaids work in hotels cleaning rooms.",
            hintAr: "الـ Chambermaid تعمل في الفنادق لتنظيف الغرف."
        },
        {
            question: "18. Where does a surgeon work?",
            questionAr: "١٨. أين يعمل الجراح (surgeon)؟",
            options: ["Law court", "Veterinary surgery", "Hospital", "Office"],
            optionsAr: ["في المحكمة", "في عيادة بيطرية", "في مستشفى", "في مكتب"],
            correct: 2,
            hint: "Surgeons operate on people in hospitals.",
            hintAr: "الجراح يعمل في المستشفى (Hospital)."
        },
        {
            question: "19. Who carries other people's bags and luggage?",
            questionAr: "١٩. من الذي يحمل حقائب وأمتعة الآخرين؟",
            options: ["Porter", "Receptionist", "Technician", "Optician"],
            optionsAr: ["Porter (الشيال / الحمال)", "Receptionist", "Technician", "Optician"],
            correct: 0,
            hint: "A porter helps with luggage at hotels or stations.",
            hintAr: "الـ Porter هو الشيال الذي يحمل الأمتعة (luggage)."
        },
        {
            question: "20. Who welds metal to make things?",
            questionAr: "٢٠. من الذي يلحم المعادن لصنع الأشياء؟",
            options: ["Builder", "Carpenter", "Welder", "Plumber"],
            optionsAr: ["Builder (البناء)", "Carpenter (النجار)", "Welder (اللحام)", "Plumber (السباك)"],
            correct: 2,
            hint: "A welder joins metal parts together.",
            hintAr: "الـ Welder هو اللحام الذي يلحم المعادن (metal)."
        }
    ]
});