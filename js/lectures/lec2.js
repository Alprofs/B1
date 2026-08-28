DataStore.lectures.push({
    id: 2,
    title: "Adverbs, Phonics, Family & Idioms",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - EXAM FOCUSED
    // =========================================================================
    revision: [
        { type: 'title', content: '1. Verbs & Adverbs' },
        { type: 'rule', title: 'Verbs (الأفعال)', content: 'A verb shows action or state. Tenses show time: Present (walks), Past (walked), Future (will walk).' },
        { type: 'rule', title: 'Adverbs (الظروف / الأحوال)', content: 'An adverb modifies a verb, an adjective, or another adverb. It answers: <b>How? When? Where? Why? To what extent?</b>' },
        {
            type: 'table',
            headers: ['Adjective (Describes Nouns)', 'Adverb (Describes Verbs/Adjectives)'],
            rows: [
                ['slow / careful / angry', 'slowly / carefully / angrily'],
                ['excellent / easy', 'excellently / easily'],
                ['<b>good (Irregular)</b>', '<b>well</b>'],
                ['awful', 'awfully (e.g., awfully cold)']
            ]
        },
        { type: 'mistake', content: '<b>EXAM TRAP (Verbs of Senses):</b><br>Verbs like (look, smell, taste, feel, sound) take an <b>ADJECTIVE</b> if they describe the <i>subject</i>, but take an <b>ADVERB</b> if they describe an <i>action</i>.<br>- The food smells <b>terrible</b>. (Adjective - State)<br>- He looked at me <b>sadly</b>. (Adverb - Action)' },

        { type: 'title', content: '2. Phonics & Alphabet' },
        { type: 'text', content: '• There are <b>26 letters</b> in the English alphabet (5 Vowels + 21 Consonants).<br>• There are <b>44 English sounds</b>.<br>• Example: The letter "w" makes a "woo" sound.' },

        { type: 'title', content: '3. Family Vocabulary' },
        { type: 'text', content: 'Key words: <b>Siblings</b> (brothers and sisters), <b>Twins</b> (born at the same time), <b>Niece</b> (brother/sister\'s daughter), <b>Nephew</b> (brother/sister\'s son), <b>Groom & Bride</b> (getting married).' },

        { type: 'title', content: '4. Family Idioms (Crucial for Exams)' },
        {
            type: 'table',
            headers: ['Idiom', 'Meaning'],
            rows: [
                ['<b>Blood is thicker than water</b>', 'Family relationships are stronger than any other.'],
                ['<b>A close-knit family</b>', 'A family that is very close and supportive.'],
                ['<b>Cut from the same cloth</b>', 'Very similar in personality or behavior.'],
                ['<b>The apple doesn\'t fall far from the tree</b>', 'A child is similar to their parent in behavior.'],
                ['<b>To take after someone</b>', 'To be like a parent/relative (e.g., in hobbies).'],
                ['<b>Spitting image</b>', 'Extremely similar or identical in appearance.'],
                ['<b>Like father, like son</b>', 'Child behaves exactly like the parent.']
            ]
        },

        { type: 'title', content: '5. Numerals (Cardinal vs Ordinal)' },
        { type: 'text', content: 'Cardinal (1, 2, 3...) vs Ordinal (1st = First, 2nd = Second, 3rd = Third, 12th = Twelfth, 20th = Twentieth).' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC) - الخلاصة للامتحان
    // =========================================================================
    revisionAr: [
        { type: 'title', content: '١. الأفعال والظروف (تركات الامتحان)' },
        { type: 'rule', title: 'Adverbs (الظروف أو الأحوال)', content: 'الظرف يصف الفعل (كيف حدث؟) أو يصف الصفة. غالباً ينتهي بـ (ly) مثل slowly.' },
        { type: 'rule', title: 'شواذ هامة جداً', content: 'الصفة من جيد هي (good) ولكن الظرف منها هو (well). <br>نقول: He is a <b>good</b> singer. He sings <b>well</b>.' },
        { type: 'mistake', content: '<b>خدعة الامتحان (أفعال الحواس):</b><br>أفعال مثل (smell يشم/يبدو رائحته, taste يتذوق/يبدو طعمه, look ينظر/يبدو) تأخذ <b>صفة</b> وليس ظرف إذا كانت تصف حالة الشيء، وتأخذ <b>ظرف</b> إذا كانت تصف حركة الشخص.<br>- الكلب يبدو غاضباً: The dog looks <b>angry</b> (صفة).<br>- الكلب ينظر لي بغضب: The dog looks at me <b>angrily</b> (ظرف).' },

        { type: 'title', content: '٢. الصوتيات والحروف (أسئلة حفظ)' },
        { type: 'text', content: '• اللغة الإنجليزية بها <b>26 حرفاً</b> (5 حروف متحركة vowels و 21 حرف ساكن consonants).<br>• اللغة الإنجليزية بها <b>44 صوتاً (Sounds)</b>.' },

        { type: 'title', content: '٣. كلمات العائلة' },
        { type: 'text', content: '• <b>Siblings</b>: الإخوة والأخوات.<br>• <b>Twins</b>: التوائم.<br>• <b>Niece</b>: ابنة الأخ أو الأخت.<br>• <b>Nephew</b>: ابن الأخ أو الأخت.<br>• <b>Bride</b>: العروسة / <b>Groom</b>: العريس.' },

        { type: 'title', content: '٤. مصطلحات العائلة (مهمة جداً في الاختياري)' },
        {
            type: 'table',
            headers: ['المصطلح (Idiom)', 'المعنى في الامتحان'],
            rows: [
                ['<b>Blood is thicker than water</b>', 'الدم عمره ما يبقى ميه (العائلة أهم من أي علاقة أخرى).'],
                ['<b>A close-knit family</b>', 'عائلة مترابطة جداً وتدعم بعضها.'],
                ['<b>Cut from the same cloth</b>', 'من نفس الطينة / متشابهان في الشخصية أو السلوك.'],
                ['<b>The apple doesn\'t fall far from the tree</b>', 'ابن الوز عوام / الطفل يشبه والديه في السلوك.'],
                ['<b>Take after someone</b>', 'يأخذ طباع أو صفات أحد أقاربه.'],
                ['<b>Spitting image</b>', 'فولة وانقسمت نصين / متطابق تماماً في <b>الشكل</b>.'],
                ['<b>Like father, like son</b>', 'من شابه أباه فما ظلم / الابن يشبه الأب.']
            ]
        },

        { type: 'title', content: '٥. الأرقام' },
        { type: 'text', content: 'الأرقام العادية (1,2,3) تسمى Cardinal.<br>الأرقام الترتيبية تسمى Ordinal (الأول First, الثاني Second, الثالث Third, الثاني عشر Twelfth, العشرين Twentieth).' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (أسئلة مأخوذة بالنص من تدريبات الـ PDF)
    // =========================================================================
    quiz: [
        // --- Adjectives vs Adverbs (Page 4 Ex) ---
        {
            question: "1. Tom is ________ . He works ________ .",
            questionAr: "١. توم ________ . هو يعمل ________ .",
            options: ["slow / slow", "slowly / slow", "slow / slowly", "slowly / slowly"],
            optionsAr: ["slow / slow", "slowly / slow", "slow / slowly", "slowly / slowly"],
            correct: 2,
            hint: "The first blank describes Tom (noun -> adjective: slow). The second describes his work (verb -> adverb: slowly).",
            hintAr: "الأولى تصف توم كاسم (صفة: slow)، والثانية تصف طريقة عمله كفعل (ظرف: slowly)."
        },
        {
            question: "2. Sue is a ________ girl. She climbed up the ladder ________ .",
            questionAr: "٢. سو فتاة ________ . لقد تسلقت السلم ________ .",
            options: ["carefully / careful", "careful / carefully", "careful / careful", "carefully / carefully"],
            optionsAr: ["carefully / careful", "careful / carefully", "careful / careful", "carefully / carefully"],
            correct: 1,
            hint: "A careful girl (adjective). Climbed carefully (adverb).",
            hintAr: "فتاة حذرة (صفة careful). تسلقت بحذر (ظرف carefully)."
        },
        {
            question: "3. Max is a ________ singer. He sings ________ .",
            questionAr: "٣. ماكس مغني ________ . هو يغني ________ .",
            options: ["good / good", "well / good", "good / well", "well / well"],
            optionsAr: ["good / good", "well / good", "good / well", "well / well"],
            correct: 2,
            hint: "'Good' is an adjective. The adverb form of good is 'well'.",
            hintAr: "الصفة هي good، ولكن الظرف (الحال) منها شاذ وهو well."
        },
        {
            question: "4. It's ________ cold today. The cold wind is ________ .",
            questionAr: "٤. الجو بارد ________ اليوم. الرياح الباردة ________ .",
            options: ["awful / awfully", "awfully / awful", "awful / awful", "awfully / awfully"],
            optionsAr: ["awful / awfully", "awfully / awful", "awful / awful", "awfully / awfully"],
            correct: 1,
            hint: "'Awfully cold' (adverb modifying adjective). 'Wind is awful' (adjective modifying noun).",
            hintAr: "الأولى ظرف يصف شدة البرد (awfully)، والثانية صفة تصف الرياح (awful)."
        },
        {
            question: "5. Dogs rely on their noses as they can smell extremely ________. If that is true, why does dog food smell so ________?",
            questionAr: "٥. تعتمد الكلاب على أنفها لأنها تستطيع الشم بشكل ________ للغاية. إذا كان ذلك صحيحًا، فلماذا رائحة طعام الكلاب ________ جدًا؟",
            options: ["good / terribly", "well / terrible", "good / terrible", "well / terribly"],
            optionsAr: ["good / terribly", "well / terrible", "good / terrible", "well / terribly"],
            correct: 1,
            hint: "Smell well (ability to smell = action -> adverb). Smell terrible (the food's scent = state -> adjective).",
            hintAr: "القدرة على الشم (فعل حركي) نستخدم الظرف well. أما طعام الكلاب (رائحته) حالة فنستخدم الصفة terrible."
        },
        {
            question: "6. The little boy looked ________ . I went over to comfort him and he looked at me ________ .",
            questionAr: "٦. بدا الصبي الصغير ________ . ذهبت لمواساته ونظر إليّ ________ .",
            options: ["sad / sadly", "sadly / sad", "sad / sad", "sadly / sadly"],
            optionsAr: ["sad / sadly", "sadly / sad", "sad / sad", "sadly / sadly"],
            correct: 0,
            hint: "Looked sad (appeared = state -> adj). Looked at me sadly (action -> adverb).",
            hintAr: "الفعل look إذا كان بمعنى (يبدو) يأخذ صفة sad، وإذا كان بمعنى (ينظر) كفعل حركي يأخذ ظرف sadly."
        },
        {
            question: "7. I tasted the soup ________ but it tasted ________ .",
            questionAr: "٧. تذوقت الحساء ________ لكن طعمه كان ________ .",
            options: ["careful / wonderfully", "carefully / wonderful", "careful / wonderful", "carefully / wonderfully"],
            optionsAr: ["careful / wonderfully", "carefully / wonderful", "careful / wonderful", "carefully / wonderfully"],
            correct: 1,
            hint: "I tasted (action -> carefully). Soup tasted (state -> wonderful).",
            hintAr: "تذوقت (حركة) -> carefully. طعمه (حالة) -> wonderful (صفة)."
        },

        // --- Phonics ---
        {
            question: "8. How many letters and sounds are there in the English alphabet?",
            questionAr: "٨. كم عدد الحروف والأصوات في الأبجدية الإنجليزية؟",
            options: [
                "26 letters and 26 sounds",
                "44 letters and 26 sounds",
                "26 letters and 44 sounds",
                "21 letters and 5 sounds"
            ],
            optionsAr: [
                "26 حرفاً و 26 صوتاً",
                "44 حرفاً و 26 صوتاً",
                "26 حرفاً و 44 صوتاً",
                "21 حرفاً و 5 أصوات"
            ],
            correct: 2,
            hint: "There are 26 letters (5 vowels, 21 consonants) which represent 44 sounds.",
            hintAr: "يوجد 26 حرفاً يمثلون 44 صوتاً مختلفاً."
        },

        // --- Idioms ---
        {
            question: "9. I know my cousin can be difficult, but ________, so I will always be there for her.",
            questionAr: "٩. أعلم أن التعامل مع ابنة عمي قد يكون صعباً، لكن ________، لذلك سأكون دائماً بجانبها.",
            options: [
                "a close-knit family",
                "blood is thicker than water",
                "like father, like son",
                "spitting image"
            ],
            optionsAr: [
                "a close-knit family",
                "blood is thicker than water (الدم أثقل من الماء)",
                "like father, like son",
                "spitting image"
            ],
            correct: 1,
            hint: "This idiom means family relationships are the strongest.",
            hintAr: "المصطلح يعني أن العائلة والدم أهم من أي شيء (الدم عمره ما يبقى ميه)."
        },
        {
            question: "10. My brother and I are ________. We have the same sense of humor and love of music.",
            questionAr: "١٠. أخي وأنا ________. لدينا نفس حس الدعابة وحب الموسيقى.",
            options: [
                "spitting image",
                "cut from the same cloth",
                "like father, like son",
                "the apple doesn't fall far from the tree"
            ],
            optionsAr: [
                "spitting image (متطابقان شكلاً)",
                "cut from the same cloth (من نفس الطينة)",
                "like father, like son",
                "the apple doesn't fall far from the tree"
            ],
            correct: 1,
            hint: "Similar in personality or behavior = cut from the same cloth.",
            hintAr: "متشابهان في الشخصية والطباع (من نفس الطينة / نفس القماش)."
        },
        {
            question: "11. My nephew is the ________ of his father when he was young. They look exactly the same!",
            questionAr: "١١. ابن أخي هو ________ لوالده عندما كان صغيراً. يبدوان متطابقين تماماً!",
            options: [
                "spitting image",
                "close-knit",
                "take after",
                "cut from the same cloth"
            ],
            optionsAr: [
                "spitting image (نسخة طبق الأصل)",
                "close-knit",
                "take after",
                "cut from the same cloth"
            ],
            correct: 0,
            hint: "Extremely similar in appearance = spitting image.",
            hintAr: "متطابق تماماً في الشكل (فولة وانقسمت نصين)."
        },
        {
            question: "12. My niece ________ her grandma in her love of gardening.",
            questionAr: "١٢. ابنة أخي ________ جدتها في حبها للبستنة (زراعة الحدائق).",
            options: [
                "takes after",
                "spitting image",
                "is thicker than",
                "falls from"
            ],
            optionsAr: [
                "takes after (طالعة لـ / تشبه)",
                "spitting image",
                "is thicker than",
                "falls from"
            ],
            correct: 0,
            hint: "'Take after' means to be like a parent or relative in some way.",
            hintAr: "يأخذ من صفات أو هوايات أحد أقاربه = take after."
        },
        {
            question: "13. What is the correct ordinal number for 12?",
            questionAr: "١٣. ما هي الكتابة الصحيحة للرقم الترتيبي (الثاني عشر)؟",
            options: [
                "twelveth",
                "twelfth",
                "twelth",
                "twelfe"
            ],
            optionsAr: [
                "twelveth",
                "twelfth",
                "twelth",
                "twelfe"
            ],
            correct: 1,
            hint: "Twelve becomes twelfth (drop 've' and add 'fth').",
            hintAr: "رقم 12 يُكتب twelve، ولكن في الترتيب يُكتب twelfth (نحول ve إلى f)."
        },
        {
            question: "14. A family that is very close and supportive of each other is called a ________ family.",
            questionAr: "١٤. العائلة المترابطة جداً وتدعم بعضها البعض تسمى عائلة ________.",
            options: [
                "blood",
                "close-knit",
                "spitting",
                "cloth"
            ],
            optionsAr: [
                "blood",
                "close-knit (مترابطة)",
                "spitting",
                "cloth"
            ],
            correct: 1,
            hint: "Close-knit means closely linked and supportive.",
            hintAr: "مترابطة ومتماسكة تعني close-knit."
        }
    ]
});