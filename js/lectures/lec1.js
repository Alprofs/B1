DataStore.lectures.push({
    id: 1,
    title: "Introductory",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - STRICTLY EXAM FOCUSED
    // =========================================================================
    revision: [
        { type: 'title', content: '1. Language Skills (Input vs Output)' },
        { type: 'rule', title: 'Input (Reception)', content: 'Listening (Spoken) & Reading (Written).' },
        { type: 'rule', title: 'Output (Production)', content: 'Speaking (Spoken) & Writing (Written).' },

        { type: 'title', content: '2. Parts of Speech (Exam Exact Passage)' },
        { type: 'text', content: 'Passage: "Yesterday, Mia and her friend Kai walked quickly to the sunny park. They brought a big map and some tasty snacks. \'Let’s explore!\' Mia exclaimed, smiling at the blue sky."' },
        {
            type: 'table',
            headers: ['Word', 'Part of Speech', 'Word', 'Part of Speech'],
            rows: [
                ['Yesterday', 'Adverb', 'big', 'Adjective'],
                ['Mia / Kai / friend', 'Noun', 'map / snacks', 'Noun'],
                ['and', 'Conjunction', 'some', 'Determiner / Quantifier'],
                ['her / They', 'Det / Pronoun', 'tasty', 'Adjective'],
                ['walked / brought', 'Verb', '\'Let’s', 'Interjection / Contraction'],
                ['quickly', 'Adverb', 'explore / exclaimed / smiling', 'Verb'],
                ['to / at', 'Preposition', 'the / a', 'Determiner'],
                ['sunny / blue', 'Adjective', 'park / sky', 'Noun']
            ]
        },

        { type: 'title', content: '3. Nouns: Countable vs Uncountable' },
        {
            type: 'table',
            headers: ['Countable (C)', 'Uncountable (U)'],
            rows: [
                ['Can be counted (one dog, two dogs).', 'Cannot be counted (liquids, abstract).'],
                ['Has singular & plural forms.', 'Used with a SINGULAR verb. No plural form.'],
                ['Takes "a" or "an" in singular.', 'NEVER takes "a/an".'],
                ['Question: <b>How many?</b>', 'Question: <b>How much?</b>'],
                ['Ex: dogs, scientists, windows, waiters, glasses.', 'Ex: milk, tea, butter, glue, bread, information.']
            ]
        },

        { type: 'title', content: '4. Quantifying Uncountable Nouns' },
        {
            type: 'table',
            headers: ['Container / Unit', 'Used with'],
            rows: [
                ['a bottle / a glass / a jug', 'water, milk'],
                ['a cup / a packet', 'tea'],
                ['a jar', 'honey'],
                ['a loaf / a slice', 'bread'],
                ['a carton', 'milk'],
                ['a can', 'Coke'],
                ['a bowl', 'sugar'],
                ['a kilo', 'meat'],
                ['a bar', 'soap, chocolate'],
                ['a piece', 'chocolate, cheese, furniture']
            ]
        },

        { type: 'title', content: '5. Adjectives & Dates Rules' },
        { type: 'rule', title: 'Adjectives Plural', content: 'NEVER add "s" to an adjective. (Right: short boys | Wrong: shorts boys).' },
        { type: 'rule', title: 'Adjectives Order', content: 'Size comes BEFORE Colour. (Right: big, blue ball).' },
        { type: 'rule', title: 'Dates & Years', content: 'Days/Months = Capital letters. Dates = Ordinal numbers (10th). Years = read with "hundred", NOT thousand (1987 = nineteen eighty-seven OR nineteen hundred and eighty-seven).' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC) - الخلاصة للامتحان مترجمة بالكامل
    // =========================================================================
    revisionAr: [
        { type: 'title', content: '١. مهارات اللغة (موضع امتحان)' },
        { type: 'rule', title: 'المدخلات / الاستقبال (Input / Reception)', content: 'الاستماع Listening (منطوق) ، القراءة Reading (مكتوب).' },
        { type: 'rule', title: 'المخرجات / الإنتاج (Output / Production)', content: 'التحدث Speaking (منطوق) ، الكتابة Writing (مكتوب).' },

        { type: 'title', content: '٢. أجزاء الكلام (تفكيك القطعة المقررة بالنص في الـ PDF)' },
        { type: 'text', content: 'قطعة الامتحان: "Yesterday, Mia and her friend Kai walked quickly to the sunny park. They brought a big map and some tasty snacks. \'Let’s explore!\' Mia exclaimed, smiling at the blue sky."' },
        {
            type: 'table',
            headers: ['الكلمة', 'نوعها في الجرمر', 'الكلمة', 'نوعها في الجرمر'],
            rows: [
                ['Yesterday (أمس)', 'Adverb (ظرف زمان)', 'big (كبير)', 'Adjective (صفة)'],
                ['Mia / Kai / friend (أسماء)', 'Noun (اسم)', 'map / snacks (خريطة/وجبات)', 'Noun (اسم)'],
                ['and (و)', 'Conjunction (أداة ربط)', 'some (بعض)', 'Determiner / Quantifier (أداة كمية)'],
                ['her / They (هم/هي)', 'Det / Pronoun (ضمير)', 'tasty (لذيذ)', 'Adjective (صفة)'],
                ['walked / brought (مشى/أحضر)', 'Verb (فعل)', '\'Let’s (هيا بنا)', 'Interjection (صيغة تعجب)'],
                ['quickly (بسرعة)', 'Adverb (ظرف/حال)', 'explore / exclaimed / smiling', 'Verb (فعل)'],
                ['to / at (إلى / في)', 'Preposition (حرف جر)', 'the / a (الـ / أداة نكرة)', 'Determiner (أداة تحديد)'],
                ['sunny / blue (مشمس/أزرق)', 'Adjective (صفة)', 'park / sky (حديقة/سماء)', 'Noun (اسم)']
            ]
        },

        { type: 'title', content: '٣. الأسماء: المعدود (C) وغير المعدود (U)' },
        {
            type: 'table',
            headers: ['المعدود Countable (C)', 'غير المعدود Uncountable (U)'],
            rows: [
                ['يُعد بالأرقام وله مفرد وجمع.', 'لا يُعد (سوائل، ومفاهيم). ليس له جمع.'],
                ['يأخذ a أو an في المفرد.', 'لا يأخذ a أو an أبداً.'],
                ['الفعل مع الجمع يكون جمع (are).', 'يعامل معاملة المفرد دائماً ويأخذ فعل مفرد (is / has).'],
                ['نسأل عنه بـ: <b>How many?</b>', 'نسأل عنه بـ: <b>How much?</b>'],
                ['كلمات هامة: scientists (علماء)، windows (نوافذ)، waiters (جرسونات)، glasses (أكواب/نظارات).', 'كلمات هامة: milk, tea, butter (زبدة), glue (صمغ), bread (خبز), information (معلومات).']
            ]
        },

        { type: 'title', content: '٤. قياس وتجزئة الأسماء غير المعدودة (حفظ لمعرفة الكلمة مع ما يناسبها)' },
        {
            type: 'table',
            headers: ['الوحدة / العبوة', 'تُستخدم مع'],
            rows: [
                ['a bottle (زجاجة) / a glass (كوب) / a jug (إبريق)', 'water (ماء), milk (حليب)'],
                ['a cup (فنجان) / a packet (باكو/كيس)', 'tea (شاي)'],
                ['a jar (برطمان)', 'honey (عسل)'],
                ['a loaf (رغيف) / a slice (شريحة)', 'bread (خبز)'],
                ['a carton (علبة كرتون)', 'milk (حليب)'],
                ['a can (علبة صفيح / كانز)', 'Coke (كوكاكولا)'],
                ['a bowl (وعاء / سلطانية)', 'sugar (سكر)'],
                ['a kilo (كيلو)', 'meat (لحم)'],
                ['a bar (قالب / لوح)', 'soap (صابون), chocolate (شوكولاتة)'],
                ['a piece (قطعة)', 'chocolate, cheese (جبن), furniture (أثاث)']
            ]
        },

        { type: 'title', content: '٥. قواعد في الجون (الصفات والتواريخ)' },
        { type: 'rule', title: '١. جمع الصفات (Adjectives)', content: 'الصفة في الإنجليزي **لا تُجمع أبداً** ولا نضع لها s. (صح: short boys | خطأ: shorts boys).' },
        { type: 'rule', title: '٢. ترتيب الصفات', content: 'إذا اجتمع الحجم واللون، نضع **الحجم أولاً ثم اللون**. (مثال: big, blue ball).' },
        { type: 'rule', title: '٣. التواريخ (Dates)', content: 'الأيام والشهور لازم تبدأ بحرف Capital. السنين بتتقري بالـ hundred وممنوع استخدام كلمة thousand. (مثال 1987 تتقري: nineteen eighty-seven).' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (الأسئلة دي جاية من الـ PDF بالنص)
    // =========================================================================
    quiz: [
        // --- 1. Language Skills & Parts of Speech ---
        {
            question: "1. Listening and Reading are classified as:",
            questionAr: "١. يُصنف الاستماع والقراءة على أنهما:",
            options: ["Input (Reception)", "Output (Production)", "Spoken production", "Written output"],
            optionsAr: ["مدخلات / استقبال (Input)", "مخرجات / إنتاج (Output)", "إنتاج منطوق", "مخرجات مكتوبة"],
            correct: 0,
            hint: "You receive information when you listen or read.",
            hintAr: "أنت تستقبل المعلومات عندما تستمع أو تقرأ (مدخلات)."
        },
        {
            question: "2. Speaking and Writing are classified as:",
            questionAr: "٢. يُصنف التحدث والكتابة على أنهما:",
            options: ["Output (Production)", "Input (Reception)", "Written reception", "Grammar"],
            optionsAr: ["مخرجات / إنتاج (Output)", "مدخلات / استقبال (Input)", "استقبال مكتوب", "قواعد"],
            correct: 0,
            hint: "You produce language when you speak or write.",
            hintAr: "أنت تنتج اللغة عندما تتحدث أو تكتب (مخرجات)."
        },
        {
            question: "3. In the sentence: 'They brought a big map and some tasty snacks', what part of speech is 'tasty'?",
            questionAr: "٣. في جملة 'They brought a big map and some tasty snacks'، ما هو تصنيف كلمة 'tasty' (لذيذ)؟",
            options: ["Adjective", "Noun", "Adverb", "Verb"],
            optionsAr: ["صفة (Adjective)", "اسم (Noun)", "ظرف/حال (Adverb)", "فعل (Verb)"],
            correct: 0,
            hint: "'Tasty' describes the noun 'snacks'.",
            hintAr: "كلمة tasty تصف الاسم (الوجبات الخفيفة) إذاً هي صفة."
        },
        {
            question: "4. In the sentence: 'Mia walked quickly to the sunny park', what part of speech is 'quickly'?",
            questionAr: "٤. في جملة 'Mia walked quickly to the sunny park'، ما تصنيف كلمة 'quickly' (بسرعة)؟",
            options: ["Adverb", "Adjective", "Verb", "Preposition"],
            optionsAr: ["ظرف / حال (Adverb)", "صفة (Adjective)", "فعل (Verb)", "حرف جر (Preposition)"],
            correct: 0,
            hint: "'Quickly' describes the verb 'walked'.",
            hintAr: "تصف كيف حدث الفعل (المشي) إذاً هي ظرف/حال (Adverb)."
        },

        // --- 2. Countable (C) vs Uncountable (U) [Page 12 PDF Exactly] ---
        {
            question: "5. Decide if the noun is Countable (C) or Uncountable (U): 'The children are playing in the garden.' -> children",
            questionAr: "٥. حدد إذا كان الاسم معدوداً أم لا: كلمة 'children' (أطفال):",
            options: ["Countable (C)", "Uncountable (U)"],
            optionsAr: ["معدود (Countable)", "غير معدود (Uncountable)"],
            correct: 0,
            hint: "Child -> Children. It can be counted.",
            hintAr: "مفردها طفل وتُجمع أطفال، لذا هي معدودة."
        },
        {
            question: "6. Decide if the noun is Countable (C) or Uncountable (U): 'I don't like milk.' -> milk",
            questionAr: "٦. كلمة 'milk' (حليب) هي اسم:",
            options: ["Uncountable (U)", "Countable (C)"],
            optionsAr: ["غير معدود (Uncountable)", "معدود (Countable)"],
            correct: 0,
            hint: "Liquids are uncountable.",
            hintAr: "السوائل دائماً غير معدودة."
        },
        {
            question: "7. Decide if the noun is Countable (C) or Uncountable (U): 'Scientists say that the environment is threatened.' -> Scientists",
            questionAr: "٧. كلمة 'Scientists' (علماء) هي اسم:",
            options: ["Countable (C)", "Uncountable (U)"],
            optionsAr: ["معدود (Countable)", "غير معدود (Uncountable)"],
            correct: 0,
            hint: "Scientist -> Scientists. Can be counted.",
            hintAr: "عالم -> علماء. يمكن عدهم."
        },
        {
            question: "8. Decide if the noun is Countable (C) or Uncountable (U): 'My mother uses butter to prepare cakes.' -> butter",
            questionAr: "٨. كلمة 'butter' (زبدة) هي اسم:",
            options: ["Uncountable (U)", "Countable (C)"],
            optionsAr: ["غير معدود (Uncountable)", "معدود (Countable)"],
            correct: 0,
            hint: "Butter is a mass/substance.",
            hintAr: "الزبدة مادة لا تتجزأ إلا بوحدات قياس، لذا هي غير معدودة."
        },
        {
            question: "9. Decide if the noun is Countable (C) or Uncountable (U): 'We need some glue to fix this vase.' -> glue",
            questionAr: "٩. كلمة 'glue' (صمغ) هي اسم:",
            options: ["Uncountable (U)", "Countable (C)"],
            optionsAr: ["غير معدود (Uncountable)", "معدود (Countable)"],
            correct: 0,
            hint: "Glue is a liquid/substance.",
            hintAr: "الصمغ مادة سائلة، لذا هو غير معدود."
        },
        {
            question: "10. Decide if the noun is Countable (C) or Uncountable (U): 'The bread my mother prepares is delicious.' -> bread",
            questionAr: "١٠. كلمة 'bread' (خبز) هي اسم:",
            options: ["Uncountable (U)", "Countable (C)"],
            optionsAr: ["غير معدود (Uncountable)", "معدود (Countable)"],
            correct: 0,
            hint: "In English, 'bread' is uncountable. We count 'loaves' or 'slices'.",
            hintAr: "في الإنجليزية الخبز لا يجمع ولا يعد، بل نعد (أرغفة الخبز)."
        },

        // --- 3. Find the mistake [Pages 13-14 PDF Exactly] ---
        {
            question: "11. Find the mistake: 'Each of the dogs have a collar.'",
            questionAr: "١١. أوجد الخطأ وصححه: 'Each of the dogs have a collar.'",
            options: [
                "Each of the dogs has a collar.",
                "All of the dogs has a collar.",
                "Each of the dogs are having a collar.",
                "Each of dog have a collar."
            ],
            optionsAr: [
                "Each of the dogs has a collar.",
                "All of the dogs has a collar.",
                "Each of the dogs are having a collar.",
                "Each of dog have a collar."
            ],
            correct: 0,
            hint: "'Each' takes a singular verb (has).",
            hintAr: "كلمة Each (كل واحد) تعامل كمفرد وتأخذ (has) وليس (have)."
        },
        {
            question: "12. Find the mistake: 'The committee are voting on the proposal.'",
            questionAr: "١٢. أوجد الخطأ وصححه: 'The committee are voting on the proposal.'",
            options: [
                "The committee is voting on the proposal.",
                "The committees is voting on the proposal.",
                "The committee have voted on the proposal.",
                "The committee voting on the proposal."
            ],
            optionsAr: [
                "The committee is voting on the proposal.",
                "The committees is voting on the proposal.",
                "The committee have voted on the proposal.",
                "The committee voting on the proposal."
            ],
            correct: 0,
            hint: "The committee is treated as a single unit, so it takes a singular verb (is).",
            hintAr: "اللجنة (The committee) كيان واحد يعامل كمفرد ويأخذ (is)."
        },
        {
            question: "13. Find the mistake: 'The childrens played outside after the rain.'",
            questionAr: "١٣. أوجد الخطأ وصححه: 'The childrens played outside after the rain.'",
            options: [
                "The children played outside after the rain.",
                "The childs played outside after the rain.",
                "The childes played outside after the rain.",
                "The children's played outside after the rain."
            ],
            optionsAr: [
                "The children played outside after the rain.",
                "The childs played outside after the rain.",
                "The childes played outside after the rain.",
                "The children's played outside after the rain."
            ],
            correct: 0,
            hint: "'Children' is already plural. Do not add 's'.",
            hintAr: "كلمة children هي جمع أصلاً (أطفال) ولا نضيف لها s."
        },
        {
            question: "14. Find the mistake: 'She visited many Paris during her trip.'",
            questionAr: "١٤. أوجد الخطأ وصححه: 'She visited many Paris during her trip.'",
            options: [
                "She visited Paris during her trip.",
                "She visited a lot Paris during her trip.",
                "She visited much Paris during her trip.",
                "She visited Paris's during her trip."
            ],
            optionsAr: [
                "She visited Paris during her trip.",
                "She visited a lot Paris during her trip.",
                "She visited much Paris during her trip.",
                "She visited Paris's during her trip."
            ],
            correct: 0,
            hint: "Paris is a proper noun (one city). You cannot use 'many' with it.",
            hintAr: "باريس اسم علم لمدينة واحدة ولا يصح استخدام (many) معها."
        },
        {
            question: "15. Find the mistake (one mother): 'My mothers' cooking is famous.'",
            questionAr: "١٥. أوجد الخطأ وصححه (المقصود أم واحدة): 'My mothers' cooking is famous.'",
            options: [
                "My mother's cooking is famous.",
                "My mother cooking is famous.",
                "My mothers cooking' is famous.",
                "My mothers's cooking is famous."
            ],
            optionsAr: [
                "My mother's cooking is famous.",
                "My mother cooking is famous.",
                "My mothers cooking' is famous.",
                "My mothers's cooking is famous."
            ],
            correct: 0,
            hint: "Singular possessive is formed by adding 's (mother's).",
            hintAr: "ملكية الاسم المفرد تُكتب بوضع الفاصلة قبل الـ s لتصبح (mother's)."
        },
        {
            question: "16. Find the mistake: 'She adopted a new dog and cat.'",
            questionAr: "١٦. أوجد الخطأ وصححه: 'She adopted a new dog and cat.'",
            options: [
                "She adopted a new dog and a cat.",
                "She adopted new dog and cat.",
                "She adopted a new dogs and cat.",
                "She adopted the new dog and the cats."
            ],
            optionsAr: [
                "She adopted a new dog and a cat.",
                "She adopted new dog and cat.",
                "She adopted a new dogs and cat.",
                "She adopted the new dog and the cats."
            ],
            correct: 0,
            hint: "Every singular countable noun needs its own article ('a cat').",
            hintAr: "الاسم المفرد المعدود يحتاج لأداة نكرة خاصة به، لذلك يجب وضع (a) قبل (cat)."
        },
        {
            question: "17. Find the mistake: 'These informations are outdated.'",
            questionAr: "١٧. أوجد الخطأ وصححه: 'These informations are outdated.'",
            options: [
                "This information is outdated.",
                "These information are outdated.",
                "This informations is outdated.",
                "A information is outdated."
            ],
            optionsAr: [
                "This information is outdated.",
                "These information are outdated.",
                "This informations is outdated.",
                "A information is outdated."
            ],
            correct: 0,
            hint: "'Information' is uncountable. Use 'This' and 'is' without 's'.",
            hintAr: "المعلومات (information) لا تُجمع ولا يضاف لها s وتعامل كمفرد (This ... is)."
        },
        {
            question: "18. Find the mistake: 'The men team won the match.'",
            questionAr: "١٨. أوجد الخطأ وصححه: 'The men team won the match.'",
            options: [
                "The men's team won the match.",
                "The mens' team won the match.",
                "The man's team won the match.",
                "The mens team won the match."
            ],
            optionsAr: [
                "The men's team won the match.",
                "The mens' team won the match.",
                "The man's team won the match.",
                "The mens team won the match."
            ],
            correct: 0,
            hint: "Irregular plurals take 's for possession (men's).",
            hintAr: "الجمع الشاذ الذي لا ينتهي بـ s نضع له ('s) للملكية لتصبح (men's)."
        },
        {
            question: "19. Find the mistake: 'I have a little problems.'",
            questionAr: "١٩. أوجد الخطأ وصححه: 'I have a little problems.'",
            options: [
                "I have a few problems.",
                "I have much problems.",
                "I have a bit problems.",
                "I have a lot problems."
            ],
            optionsAr: [
                "I have a few problems.",
                "I have much problems.",
                "I have a bit problems.",
                "I have a lot problems."
            ],
            correct: 0,
            hint: "'Problems' is countable, so use 'a few'.",
            hintAr: "المشاكل معدودة لذا نستخدم معها (a few) وليس (a little)."
        },
        {
            question: "20. Find the mistake: 'The team are practicing every day.'",
            questionAr: "٢٠. أوجد الخطأ وصححه: 'The team are practicing every day.'",
            options: [
                "The team is practicing every day.",
                "The team were practicing every day.",
                "The teams is practicing every day.",
                "The team practicing every day."
            ],
            optionsAr: [
                "The team is practicing every day.",
                "The team were practicing every day.",
                "The teams is practicing every day.",
                "The team practicing every day."
            ],
            correct: 0,
            hint: "'Team' is considered a single entity here -> 'is'.",
            hintAr: "الفريق وحدة واحدة مفردة فتأخذ (is)."
        },

        // --- 4. Adjectives & Dates Rules ---
        {
            question: "21. Choose the correct sentence (Adjective Rule):",
            questionAr: "٢١. اختر الجملة الصحيحة (قاعدة الصفات):",
            options: [
                "We've got three black cats.",
                "We've got three blacks cats.",
                "We've got three cats blacks.",
                "We've got three cats black."
            ],
            optionsAr: [
                "We've got three black cats.",
                "We've got three blacks cats.",
                "We've got three cats blacks.",
                "We've got three cats black."
            ],
            correct: 0,
            hint: "Adjectives NEVER take an 's' for plural.",
            hintAr: "قاعدة ثابتة: الصفة لا تُجمع في اللغة الإنجليزية ولا نضع لها s."
        },
        {
            question: "22. Choose the correct order of adjectives:",
            questionAr: "٢٢. اختر الترتيب الصحيح للصفات:",
            options: [
                "I've got a big, blue ball.",
                "I've got a blue, big ball.",
                "I've got a ball big blue.",
                "I've got big blue a ball."
            ],
            optionsAr: [
                "I've got a big, blue ball.",
                "I've got a blue, big ball.",
                "I've got a ball big blue.",
                "I've got big blue a ball."
            ],
            correct: 0,
            hint: "Size comes before colour.",
            hintAr: "قاعدة: صفة الحجم (big) تُكتب قبل اللون (blue)."
        },
        {
            question: "23. Which phrase represents the correct way to read the year 1987?",
            questionAr: "٢٣. ما هي الطريقة الصحيحة لقراءة السنة (1987)؟",
            options: [
                "nineteen eighty-seven",
                "one thousand nine hundred eighty-seven",
                "nineteen thousand eighty-seven",
                "nineteen hundred eighty"
            ],
            optionsAr: [
                "nineteen eighty-seven",
                "one thousand nine hundred eighty-seven",
                "nineteen thousand eighty-seven",
                "nineteen hundred eighty"
            ],
            correct: 0,
            hint: "Do not use 'thousand' when reading years like 1987. Read as two parts.",
            hintAr: "السنين نقرأها كرقمين منفصلين أو بكلمة hundred، وممنوع استخدام thousand للسنوات القديمة."
        }
    ]
});