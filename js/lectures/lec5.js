DataStore.lectures.push({
    id: 5,
    title: "Reading Skills & Comprehension (Exam Focus)",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - STRICTLY EXAM FOCUSED
    // =========================================================================
    revision: [
        // --- Part 1: Reading Skills Definitions ---
        { type: 'title', content: 'Part 1: The 6 Reading Skills (Keywords for Exams)' },
        { type: 'text', content: 'Memorize the keywords for each reading skill to answer definition questions:' },
        {
            type: 'table',
            headers: ['Reading Skill', 'Definition / Keywords'],
            rows: [
                ['<b>1. Decoding</b>', 'Sounding out words heard before but haven\'t seen written.'],
                ['<b>2. Phonics</b>', 'The connection between sounds and letters (mapping sounds to written words).'],
                ['<b>3. Vocabulary</b>', 'Understanding the meaning of words and their definitions in context.'],
                ['<b>4. Sentence Construction & Cohesion</b>', 'Connecting ideas between and within sentences.'],
                ['<b>5. Reasoning & Background Knowledge</b>', 'Making inferences, drawing conclusions, and reading between the lines.'],
                ['<b>6. Working Memory & Attention</b>', 'Attention absorbs info; working memory retains it (executive function).']
            ]
        },

        // --- Part 2: Reading Passages ---
        { type: 'title', content: 'Part 2: Reading Comprehension Texts' },
        
        { type: 'rule', title: 'Text 1: Student Life (Glasgow University)', content: 'For those who are new to the city, Glasgow is a wonderful place to explore, develop skills and get an excellent education. Those already living in Glasgow will now experience it as a new student. You will find something for every taste: dancing until 3am, shopping for latest fashions, local music, or relaxing in coffee shops.<br><br>Get involved: Join one of two Student Unions. Become a member of a club or society (or start your own). Make a difference by standing for election in the Students’ Representative Council. Become a Student Ambassador.' },
        
        { type: 'rule', title: 'Text 2: The New Park', content: 'Max and his dog, Spot, love to go to the park near their house. The park is big and green. It has a playground with swings, a red slide, and a small pond. Spot likes to chase yellow butterflies on the grass, while Max likes to swing. Yesterday, the weather was warm. Max and Spot spent two hours playing outside before walking back home for dinner.' },
        
        { type: 'rule', title: 'Text 3: Cooking Pizza', content: 'Maya and her dad are making homemade pizza for dinner. First, Maya rolls out the dough into a large circle. Next, her dad spreads red tomato sauce. Maya\'s favorite part is adding the toppings (shredded cheese, small pieces of chicken, green peppers). Her dad puts the pizza into the hot oven. After 15 minutes, it is ready and smells delicious!' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC TRANSLATION) - الخلاصة والترجمة
    // =========================================================================
    revisionAr: [
        // --- Part 1: Reading Skills Definitions ---
        { type: 'title', content: 'الجزء الأول: مهارات القراءة الـ 6 (كلمات مفتاحية للامتحان)' },
        { type: 'text', content: 'احفظ الكلمات المفتاحية لكل مهارة عشان لو جات اختياري أو توصيل:' },
        {
            type: 'table',
            headers: ['المهارة (Reading Skill)', 'التعريف والكلمات الدالة'],
            rows: [
                ['<b>1. Decoding (فك الشفرة)</b>', 'نطق الكلمات (Sounding out) التي سمعتها من قبل ولم ترها مكتوبة.'],
                ['<b>2. Phonics (الصوتيات)</b>', 'الربط بين الأصوات والحروف (sounds and letters).'],
                ['<b>3. Vocabulary (المفردات)</b>', 'فهم معاني الكلمات وتعريفاتها وسياقها.'],
                ['<b>4. Cohesion (التماسك/الترابط)</b>', 'ربط الأفكار (Connecting ideas) داخل وبين الجمل.'],
                ['<b>5. Reasoning (الاستنتاج / الخلفية المعرفية)</b>', 'استخلاص النتائج (drawing conclusions) والقراءة بين السطور.'],
                ['<b>6. Working Memory (الذاكرة والانتباه)</b>', 'الانتباه يمتص المعلومات، والذاكرة تحتفظ بها (retains it).']
            ]
        },

        // --- Part 2: Reading Passages ---
        { type: 'title', content: 'الجزء الثاني: قطع القراءة (مترجمة)' },
        
        { type: 'rule', title: 'القطعة الأولى: الحياة الطلابية (جامعة جلاسكو)', content: 'بالنسبة للجدد، جلاسكو مكان رائع للاستكشاف والتعليم. وحتى المقيمين فيها سيعيشون تجربة طالب جديد. بها كل الأذواق: الرقص حتى 3 صباحاً، تسوق أحدث الأزياء، الموسيقى، أو الاسترخاء في المقاهي.<br><br>شارك في الأنشطة: انضم لاتحادات الطلاب، أو لنادي/جمعية (أو أسس ناديك الخاص). اصنع فارقاً بالترشح لانتخابات مجلس الطلاب. كن سفيراً للطلاب.' },
        
        { type: 'rule', title: 'القطعة الثانية: الحديقة الجديدة', content: 'يحب (ماكس) وكلبه (سبوت) الذهاب للحديقة الكبيرة الخضراء. بها مراجيح وزحليقة حمراء وبركة صغيرة. يحب الكلب (سبوت) مطاردة الفراشات الصفراء. أمس كان الجو دافئاً، وقضى ماكس وسبوت ساعتين في اللعب قبل العودة لتناول العشاء.' },
        
        { type: 'rule', title: 'القطعة الثالثة: طبخ البيتزا', content: '(مايا) ووالدها يصنعان بيتزا للعشاء. أولاً، تفرد مايا العجينة. ثانياً، يوزع والدها صلصة الطماطم. الجزء المفضل لمايا هو وضع الإضافات (الجبن، الدجاج، الفلفل). يضع والدها البيتزا في الفرن، وتصبح جاهزة بعد 15 دقيقة.' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (12 Questions directly from the PDF)
    // =========================================================================
    quiz: [
        // --- Text 1: Student Life ---
        {
            question: "1. Who is the article (Student life) for?",
            questionAr: "١. لمن كُتب مقال (الحياة الطلابية)؟",
            options: [
                "A. Students who are new to the city",
                "B. Students from Glasgow who are new to the university",
                "C. All new students"
            ],
            optionsAr: [
                "أ. للطلاب الجدد في المدينة فقط",
                "ب. لطلاب مدينة جلاسكو الجدد في الجامعة فقط",
                "ج. لجميع الطلاب الجدد"
            ],
            correct: 2,
            hint: "The text addresses BOTH those new to the city AND those already living there who are starting as new students.",
            hintAr: "النص يوجه خطابه للجدد على المدينة وللمقيمين فيها أيضاً، إذاً هو لكل الطلاب الجدد (All new students)."
        },
        {
            question: "2. What activities are mentioned in the text?",
            questionAr: "٢. ما هي الأنشطة المذكورة في النص؟",
            options: [
                "A. Local dance classes and playing music.",
                "B. Shopping until late and relaxing in the local bars.",
                "C. Night life and clothes shopping"
            ],
            optionsAr: [
                "أ. فصول رقص وعزف موسيقى.",
                "ب. التسوق لوقت متأخر والاسترخاء في الحانات.",
                "ج. الحياة الليلية وتسوق الملابس"
            ],
            correct: 2,
            hint: "The text says: 'dancing until 3am' (Night life) and 'shopping for the latest fashions' (clothes shopping).",
            hintAr: "النص ذكر الرقص حتى 3 صباحاً (حياة ليلية) وشراء أحدث الأزياء (تسوق ملابس)."
        },
        {
            question: "3. Which of the following can students do to get involved in student life?",
            questionAr: "٣. أي مما يلي يمكن للطلاب فعله للمشاركة في الحياة الطلابية؟",
            options: [
                "A. Create a club or society",
                "B. Join both student unions",
                "C. Start your own band"
            ],
            optionsAr: [
                "أ. إنشاء نادي أو جمعية",
                "ب. الانضمام لكلا الاتحادين الطلابيين معاً",
                "ج. تأسيس فرقة موسيقية"
            ],
            correct: 0,
            hint: "The text literally says: 'Become a member of a club or society or start your own'.",
            hintAr: "النص ذكر صراحة أنه يمكنك الانضمام لنادي أو تأسيس ناديك الخاص (Start your own)."
        },
        {
            question: "4. According to the text, you can make a difference by:",
            questionAr: "٤. وفقاً للنص، يمكنك أن تصنع فارقاً من خلال:",
            options: [
                "A. becoming a member of a society",
                "B. getting involved in student elections",
                "C. organizing campus visits"
            ],
            optionsAr: [
                "أ. أن تصبح عضواً في جمعية",
                "ب. المشاركة في الانتخابات الطلابية",
                "ج. تنظيم زيارات الحرم الجامعي"
            ],
            correct: 1,
            hint: "The text says: 'Make a difference by standing for election in the Students’ Representative Council.'",
            hintAr: "النص يقول بالنص: اصنع فارقاً بالترشح للانتخابات."
        },

        // --- Text 2: The New Park ---
        {
            question: "5. Who is Spot?",
            questionAr: "٥. من هو Spot (سبوت)؟",
            options: [
                "A) Max's brother",
                "B) Max's dog",
                "C) Max's cat",
                "D) Max's friend"
            ],
            optionsAr: [
                "أ) أخو ماكس",
                "ب) كلب ماكس",
                "ج) قطة ماكس",
                "د) صديق ماكس"
            ],
            correct: 1,
            hint: "The text starts with: 'Max and his dog, Spot...'",
            hintAr: "النص يبدأ بعبارة: ماكس وكلبه سبوت."
        },
        {
            question: "6. What color is the slide at the park?",
            questionAr: "٦. ما هو لون الزحليقة في الحديقة؟",
            options: [
                "A) Yellow",
                "B) Green",
                "C) Red",
                "D) Blue"
            ],
            optionsAr: [
                "أ) أصفر",
                "ب) أخضر",
                "ج) أحمر",
                "د) أزرق"
            ],
            correct: 2,
            hint: "The text mentions: '...a red slide...'",
            hintAr: "مذكور في النص أنها (زحليقة حمراء)."
        },
        {
            question: "7. What does Spot like to chase?",
            questionAr: "٧. ماذا يحب سبوت أن يطارد؟",
            options: [
                "A) Balls",
                "B) Yellow butterflies",
                "C) Other dogs",
                "D) Birds"
            ],
            optionsAr: [
                "أ) الكرات",
                "ب) الفراشات الصفراء",
                "ج) الكلاب الأخرى",
                "د) الطيور"
            ],
            correct: 1,
            hint: "The text says: 'Spot likes to chase yellow butterflies.'",
            hintAr: "مذكور في النص: يحب مطاردة الفراشات الصفراء."
        },
        {
            question: "8. How long did Max and Spot play at the park?",
            questionAr: "٨. ما هي المدة التي لعب فيها ماكس وسبوت في الحديقة؟",
            options: [
                "A) One hour",
                "B) Two hours",
                "C) Three hours",
                "D) All day"
            ],
            optionsAr: [
                "أ) ساعة واحدة",
                "ب) ساعتين",
                "ج) ثلاث ساعات",
                "د) طوال اليوم"
            ],
            correct: 1,
            hint: "The text mentions: 'spent two hours playing outside.'",
            hintAr: "مذكور في النص أنهما قضيا (ساعتين) في اللعب."
        },

        // --- Text 3: Cooking Pizza ---
        {
            question: "9. What are Maya and her dad making for dinner?",
            questionAr: "٩. ماذا يصنع مايا ووالدها للعشاء؟",
            options: [
                "A) Pasta",
                "B) Tacos",
                "C) Homemade pizza",
                "D) Sandwiches"
            ],
            optionsAr: [
                "أ) مكرونة",
                "ب) تاكوز",
                "ج) بيتزا منزلية",
                "د) سندويشات"
            ],
            correct: 2,
            hint: "They are making homemade pizza.",
            hintAr: "مكتوب في السطر الثاني: homemade pizza."
        },
        {
            question: "10. What is the first step in making the pizza?",
            questionAr: "١٠. ما هي الخطوة الأولى في صنع البيتزا؟",
            options: [
                "A) Spreading tomato sauce",
                "B) Rolling out the dough",
                "C) Adding the cheese",
                "D) Putting it in the oven"
            ],
            optionsAr: [
                "أ) توزيع صلصة الطماطم",
                "ب) فرد العجينة",
                "ج) إضافة الجبن",
                "د) وضعها في الفرن"
            ],
            correct: 1,
            hint: "The text says: 'First, Maya rolls out the dough...'",
            hintAr: "أول كلمة First جاء بعدها: فرد العجينة (rolls out the dough)."
        },
        {
            question: "11. What is Maya's favorite part?",
            questionAr: "١١. ما هو الجزء المفضل بالنسبة لمايا؟",
            options: [
                "A) Eating the pizza",
                "B) Spreading the sauce",
                "C) Adding the toppings",
                "D) Rolling out dough"
            ],
            optionsAr: [
                "أ) أكل البيتزا",
                "ب) توزيع الصلصة",
                "ج) إضافة الإضافات (الجبن والدجاج)",
                "د) فرد العجينة"
            ],
            correct: 2,
            hint: "The text says: 'Maya's favorite part is adding the toppings.'",
            hintAr: "مكتوب بالنص أن الجزء المفضل لها هو إضافة الـ toppings."
        },
        {
            question: "12. How long does the pizza bake in the oven?",
            questionAr: "١٢. ما المدة التي تُخبز فيها البيتزا في الفرن؟",
            options: [
                "A) 10 minutes",
                "B) 15 minutes",
                "C) 20 minutes",
                "D) 30 minutes"
            ],
            optionsAr: [
                "أ) 10 دقائق",
                "ب) 15 دقيقة",
                "ج) 20 دقيقة",
                "د) 30 دقيقة"
            ],
            correct: 1,
            hint: "The text states: 'After fifteen minutes, the pizza is ready.'",
            hintAr: "مكتوب بالنص أنها تصبح جاهزة بعد (15 دقيقة)."
        }
    ]
});