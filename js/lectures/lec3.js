DataStore.lectures.push({
    id: 3,
    title: "Pronouns, Sounds & Listening Skills",
    isPlaceholder: false,

    // =========================================================================
    // 1. REVISION SECTION (ENGLISH) - STRICTLY EXAM FOCUSED
    // =========================================================================
    revision: [
        // --- Pronouns Table ---
        { type: 'title', content: '1. Pronouns & Possessives (Master Table)' },
        {
            type: 'table',
            headers: ['Subject', 'Object', 'Possessive Adjective', 'Possessive Pronoun'],
            rows: [
                ['<b>I</b>', 'me', 'my', 'mine'],
                ['<b>You</b>', 'you', 'your', 'yours'],
                ['<b>He</b>', 'him', 'his', 'his'],
                ['<b>She</b>', 'her', 'her', 'hers'],
                ['<b>It</b>', 'it', 'its', 'its'],
                ['<b>We</b>', 'us', 'our', 'ours'],
                ['<b>They</b>', 'them', 'their', 'theirs']
            ]
        },

        // --- Pronouns Rules ---
        { type: 'title', content: '2. Grammar Rules (How to choose in exams)' },
        { type: 'rule', title: 'Subject Pronouns', content: 'Come <b>BEFORE</b> the verb. (e.g., <b>She</b> needs help).' },
        { type: 'rule', title: 'Object Pronouns', content: 'Come <b>AFTER</b> the verb or <b>AFTER</b> a preposition. (e.g., Can you help <b>me</b>? / I am waiting for <b>him</b>).' },
        { type: 'rule', title: 'Possessive Adjectives', content: 'Must be followed by a <b>NOUN</b>. (e.g., This is <b>her</b> package).' },
        { type: 'rule', title: 'Possessive Pronouns', content: 'Replace the noun. They stand <b>ALONE</b> (usually at the end). (e.g., This package is <b>hers</b>).' },

        // --- Phonetics ---
        { type: 'title', content: '3. Consonants & Vowels' },
        { type: 'rule', title: 'Voiceless Sounds', content: 'Your throat <b>doesn\'t vibrate</b>. Examples: /p, t, k, f, s, ʃ, tʃ, ɵ/ (e.g., <b>p</b>ig, <b>l</b>amp).' },
        { type: 'rule', title: 'Voiced Sounds', content: 'Your throat <b>vibrates</b>. Examples: /b, d, g, v, z, m, n, l, r, ð/ (e.g., <b>b</b>oy, <b>t</b>able).' },
        { type: 'rule', title: 'Vowels', content: 'Air leaves the mouth without blockage. The vowel letters are: <b>a, e, i, o, u</b>. They can be short or long.' },

        // --- Listening Skills ---
        { type: 'title', content: '4. Ways to Improve Listening Skill' },
        { type: 'text', content: '1. Practice Active Listening.<br>2. Practice Pronunciation.<br>3. Make listening part of your routine.' }
    ],

    // =========================================================================
    // 2. REVISION SECTION (ARABIC) - الخلاصة للامتحان
    // =========================================================================
    revisionAr: [
        { type: 'title', content: '١. جدول الضمائر والملكيات (مهم جداً للحفظ)' },
        {
            type: 'table',
            headers: ['فاعل (Subject)', 'مفعول (Object)', 'صفة ملكية (Poss. Adj)', 'ضمير ملكية (Poss. Pronoun)'],
            rows: [
                ['<b>I</b> (أنا)', 'me', 'my', 'mine (ملكي)'],
                ['<b>You</b> (أنت)', 'you', 'your', 'yours'],
                ['<b>He</b> (هو)', 'him', 'his', 'his'],
                ['<b>She</b> (هي)', 'her', 'her', 'hers'],
                ['<b>It</b> (هو/هي لغير العاقل)', 'it', 'its', 'its'],
                ['<b>We</b> (نحن)', 'us', 'our', 'ours'],
                ['<b>They</b> (هم)', 'them', 'their', 'theirs']
            ]
        },
        { type: 'note', content: '<b>تصحيح هام:</b> في ملف الـ PDF صفحة 8، مكتوب ضمير الملكية لـ I كلمة (nine) وهذا خطأ مطبعي، الصحيح هو (mine).' },

        { type: 'title', content: '٢. مفاتيح الحل في الامتحان (إزاي تختار صح؟)' },
        { type: 'rule', title: 'ضمائر الفاعل (Subject)', content: 'نختارها لو النقط <b>قبل الفعل</b>. (مثال: <b>She</b> plays).' },
        { type: 'rule', title: 'ضمائر المفعول (Object)', content: 'نختارها لو النقط <b>بعد الفعل</b> أو <b>بعد حرف جر</b> (with, to, for, at).<br>(مثال: I sent <b>her</b> chocolate / Look at <b>me</b>).' },
        { type: 'rule', title: 'صفات الملكية (Possessive Adjectives)', content: 'نختارها لو <b>بعد النقط اسم (مملوك)</b>. لا تأتي بمفردها أبداً.<br>(مثال: This is <b>her</b> package).' },
        { type: 'rule', title: 'ضمائر الملكية (Possessive Pronouns)', content: 'نختارها لو <b>النقط في آخر الجملة ولا يوجد بعدها اسم</b> (تعوض عن الاسم).<br>(مثال: This package is <b>hers</b>).' },

        { type: 'title', content: '٣. الأصوات (الصامتة والمجهورة وحروف العلة)' },
        { type: 'rule', title: 'Voiceless (أصوات غير مهتزة / صامتة)', content: 'عند نطقها <b>لا تهتز الحنجرة</b> (doesn\'t vibrate).<br>أمثلة: الأصوات /p, t, k, f, s/ مثل كلمات (pig, lamp).' },
        { type: 'rule', title: 'Voiced (أصوات مجهورة)', content: 'عند نطقها <b>تهتز الحنجرة</b> (throat vibrates).<br>أمثلة: الأصوات /b, d, g, v, z, m, n, l, r/ مثل كلمات (table, rabbit).' },
        { type: 'rule', title: 'Vowels (حروف العلة/المتحركة)', content: 'هي الأصوات التي يخرج فيها الهواء بدون أي عائق في الفم. حروفها هي: <b>a, e, i, o, u</b> وتنقسم إلى قصيرة (Short) وطويلة (Long).' },

        { type: 'title', content: '٤. مهارات الاستماع (تأتي كخيارات)' },
        { type: 'text', content: 'طرق تحسين الاستماع:<br>1. الاستماع النشط (Active Listening).<br>2. التدرب على النطق (Practice Pronunciation).<br>3. جعل الاستماع جزءاً من روتينك (Make it part of your routine).' }
    ],

    // =========================================================================
    // 3. QUIZ SECTION (All PDF Questions Included)
    // =========================================================================
    quiz: [
        // --- Subject Pronouns (PDF Page 3) ---
        {
            question: "1. ________ kicked the ball so hard that his shoe came off.",
            questionAr: "١. ________ ركل الكرة بقوة لدرجة أن حذاءه طار.",
            options: ["She", "They", "He", "It"],
            optionsAr: ["She", "They", "He", "It"],
            correct: 2,
            hint: "The sentence says 'his shoe' (male possessive), so the subject must be 'He'.",
            hintAr: "الجملة تحتوي على 'his shoe' (حذاءه للمذكر)، لذلك الفاعل يجب أن يكون He."
        },
        {
            question: "2. Correct me if I'm wrong, but I think ________ enjoy studying.",
            questionAr: "٢. صحح لي إن كنت مخطئاً، لكن أعتقد أن ________ تستمتع بالمذاكرة.",
            options: ["He", "She", "You", "I"],
            optionsAr: ["He", "She", "You", "I"],
            correct: 2,
            hint: "'He' and 'She' take 'enjoys' (with s). 'You' takes 'enjoy'. Also contextually fits.",
            hintAr: "الفعل 'enjoy' بدون (s)، لذلك لا يمكن استخدام He أو She. الضمير المناسب هنا هو You."
        },
        {
            question: "3. The dog stole Tara's ice cream before ________ ran away.",
            questionAr: "٣. سرق الكلب آيس كريم تارا قبل أن يهرب ________.",
            options: ["You", "I", "They", "It"],
            optionsAr: ["You", "I", "They", "It"],
            correct: 3,
            hint: "The pronoun is replacing 'The dog' (an animal), so we use 'It'.",
            hintAr: "الضمير يعود على الكلب (The dog) وهو غير عاقل، لذا نستخدم It."
        },
        {
            question: "4. ________ enjoys going to the gym early each morning.",
            questionAr: "٤. ________ تستمتع بالذهاب إلى صالة الألعاب الرياضية مبكراً كل صباح.",
            options: ["I", "She", "They", "We"],
            optionsAr: ["I", "She", "They", "We"],
            correct: 1,
            hint: "The verb is 'enjoys' (with an s), so it requires a third-person singular subject (He/She/It).",
            hintAr: "الفعل (enjoys) به حرف s الخاص بالمفرد الغائب، لذا نختار She."
        },

        // --- Object Pronouns (PDF Page 4) ---
        {
            question: "5. Mary wants to talk to ________ about your homework.",
            questionAr: "٥. ماري تريد التحدث إليكِ/إليك عن واجبك المنزلي.",
            options: ["Him", "Her", "You", "Them"],
            optionsAr: ["Him", "Her", "You", "Them"],
            correct: 2,
            hint: "The clue is 'your homework', which means Mary wants to talk to 'You'.",
            hintAr: "الدليل في الجملة هو 'your homework' (واجبك)، مما يعني أنها تريد التحدث إليك أنت (You)."
        },
        {
            question: "6. The plate shattered when John dropped ________ on the floor.",
            questionAr: "٦. تحطم الطبق عندما أسقطه جون على الأرض.",
            options: ["Him", "Her", "Them", "It"],
            optionsAr: ["Him", "Her", "Them", "It"],
            correct: 3,
            hint: "The pronoun replaces 'The plate' (singular, non-human object) -> 'It'.",
            hintAr: "الضمير يعود على 'الطبق' (The plate) وهو جماد مفرد، لذا نختار It."
        },
        {
            question: "7. Be careful; he lied to ________ before and he may do it again.",
            questionAr: "٧. كن حذراً؛ لقد كذب علينا من قبل وقد يفعل ذلك مرة أخرى.",
            options: ["Us", "It", "We", "They"],
            optionsAr: ["Us", "It", "We", "They"],
            correct: 0,
            hint: "We need an object pronoun after the preposition 'to'. Only 'Us' and 'It' are object pronouns, and 'Us' makes sense here.",
            hintAr: "نحتاج ضمير مفعول بعد حرف الجر (to). الضمير المنطقي هنا هو Us (علينا)."
        },
        {
            question: "8. Where are Jill and Cherie? Didn't you invite ________?",
            questionAr: "٨. أين جيل وشيري؟ ألم تدعهم؟",
            options: ["Us", "Them", "They", "Her"],
            optionsAr: ["Us", "Them", "They", "Her"],
            correct: 1,
            hint: "Jill and Cherie are two people (plural). The object pronoun for 'they' is 'them'.",
            hintAr: "جيل وشيري هما شخصان (جمع). ضمير المفعول للجمع هو Them."
        },

        // --- Possessives (PDF Page 9) ---
        {
            question: "9. She's not his friend, she's ________.",
            questionAr: "٩. إنها ليست صديقته، إنها ________.",
            options: ["my", "mine", "me", "I"],
            optionsAr: ["my (لازم بعدها اسم)", "mine (تأتي وحدها)", "me", "I"],
            correct: 1,
            hint: "No noun after the blank, so we need a possessive pronoun (mine).",
            hintAr: "لا يوجد اسم بعد النقطة، لذا نحتاج لضمير ملكية مستقل (mine)."
        },
        {
            question: "10. Robert didn't drink his own coffee. He drank ________.",
            questionAr: "١٠. لم يشرب روبرت قهوته الخاصة. لقد شرب ________.",
            options: ["her", "hers", "she", "him"],
            optionsAr: ["her", "hers", "she", "him"],
            correct: 1,
            hint: "No noun after the blank -> possessive pronoun (hers).",
            hintAr: "جاءت في آخر الجملة بدون اسم مملوك بعدها -> hers."
        },
        {
            question: "11. That is one of ________ friends.",
            questionAr: "١١. هذا واحد من أصدقائها.",
            options: ["hers", "her", "she", "mine"],
            optionsAr: ["hers", "her", "she", "mine"],
            correct: 1,
            hint: "There is a noun 'friends' after the blank, so we need a possessive adjective (her).",
            hintAr: "يوجد اسم (friends) بعد النقط، لذا نحتاج صفة ملكية (her)."
        },
        {
            question: "12. His neighborhood is safe, while ________ neighborhood isn't.",
            questionAr: "١٢. حيه السكني آمن، بينما حيي السكني ليس كذلك.",
            options: ["my", "mine", "me", "I"],
            optionsAr: ["my", "mine", "me", "I"],
            correct: 0,
            hint: "Followed by the noun 'neighborhood' -> possessive adjective (my).",
            hintAr: "يوجد اسم (neighborhood) بعد النقط، لذا نختار my."
        },
        {
            question: "13. His neighborhood is safe, while ________ isn't.",
            questionAr: "١٣. حيه السكني آمن، بينما خاصتي ليس كذلك.",
            options: ["my", "mine", "me", "I"],
            optionsAr: ["my", "mine", "me", "I"],
            correct: 1,
            hint: "NO noun after the blank. It replaces 'my neighborhood' -> mine.",
            hintAr: "لا يوجد اسم بعد النقطة، الكلمة تحل محل الاسم -> mine."
        },
        {
            question: "14. Did ________ mother call?",
            questionAr: "١٤. هل اتصلت والدتك؟",
            options: ["your", "yours", "you", "yours'"],
            optionsAr: ["your", "yours", "you", "yours'"],
            correct: 0,
            hint: "Followed by the noun 'mother' -> possessive adjective (your).",
            hintAr: "يوجد اسم (mother) بعد النقط، لذا نختار your."
        },
        {
            question: "15. Our garden looks terrible, while ________ looks incredible.",
            questionAr: "١٥. حديقتنا تبدو مريعة، بينما حديقتهم تبدو مذهلة.",
            options: ["theirs", "their", "them", "they"],
            optionsAr: ["theirs", "their", "them", "they"],
            correct: 0,
            hint: "No noun after the blank. It replaces 'their garden' -> theirs.",
            hintAr: "لا يوجد اسم مملوك بعد النقطة -> theirs."
        },
        {
            question: "16. I don't know ________ daughter very well.",
            questionAr: "١٦. أنا لا أعرف ابنتهم جيداً.",
            options: ["theirs", "their", "them", "they"],
            optionsAr: ["theirs", "their", "them", "they"],
            correct: 1,
            hint: "Followed by the noun 'daughter' -> possessive adjective (their).",
            hintAr: "يوجد اسم (daughter) بعد النقط، لذا نختار their."
        },
        {
            question: "17. I talked to ________ grandmother for three hours last night.",
            questionAr: "١٧. تحدثت إلى جدتي لمدة 3 ساعات الليلة الماضية.",
            options: ["my", "me", "mine", "I"],
            optionsAr: ["my", "me", "mine", "I"],
            correct: 0,
            hint: "Followed by the noun 'grandmother' -> possessive adjective (my).",
            hintAr: "يوجد اسم (grandmother) بعد النقط، لذا نختار my."
        },
        {
            question: "18. I think I got my notes mixed up with ________.",
            questionAr: "١٨. أعتقد أن ملاحظاتي اختلطت بملاحظاتك.",
            options: ["your", "yours", "you", "yours'"],
            optionsAr: ["your", "yours", "you", "yours'"],
            correct: 1,
            hint: "No noun after the blank. It replaces 'your notes' -> yours.",
            hintAr: "لا يوجد اسم بعد النقطة و تأتي في آخر الجملة -> yours."
        },

        // --- Phonetics & Listening (Extra specific PDF concepts) ---
        {
            question: "19. When you make a ________ sound, your throat doesn't vibrate.",
            questionAr: "١٩. عندما تصدر صوتاً ________، فإن حنجرتك لا تهتز.",
            options: ["Voiced", "Voiceless", "Vowel", "Loud"],
            optionsAr: ["Voiced (مجهور)", "Voiceless (صامت / غير مهتز)", "Vowel (حرف علة)", "Loud (مرتفع)"],
            correct: 1,
            hint: "Voiceless = no vibration in the throat.",
            hintAr: "الأصوات الصامتة (Voiceless) لا تسبب اهتزازاً في الحنجرة."
        },
        {
            question: "20. Which of the following is an example of a Voiced sound?",
            questionAr: "٢٠. أي من التالي يعتبر مثالاً على صوت مجهور (Voiced) تهتز معه الحنجرة؟",
            options: ["/p/ as in pig", "/k/ as in kite", "/b/ as in table", "/s/ as in sun"],
            optionsAr: ["/p/ as in pig", "/k/ as in kite", "/b/ as in table", "/s/ as in sun"],
            correct: 2,
            hint: "If you touch your throat, /b/ makes it vibrate, so it is Voiced.",
            hintAr: "صوت /b/ يسبب اهتزازاً في الحنجرة (Voiced)، بينما الباقي Voiceless."
        },
        {
            question: "21. ________ are letters that represent speech sounds where air leaves the mouth without any blockage.",
            questionAr: "٢١. ________ هي حروف تمثل أصوات كلامية حيث يخرج الهواء من الفم دون أي عائق.",
            options: ["Consonants", "Vowels", "Syllables", "Pronouns"],
            optionsAr: ["Consonants (حروف ساكنة)", "Vowels (حروف متحركة / علة)", "Syllables (مقاطع لفظية)", "Pronouns (ضمائر)"],
            correct: 1,
            hint: "The letters a, e, i, o, u are vowels (no air blockage).",
            hintAr: "هذا هو التعريف الحرفي لحروف العلة (المتحركة) Vowels."
        },
        {
            question: "22. According to the lecture, which of the following is a way to improve listening skills?",
            questionAr: "٢٢. وفقاً للمحاضرة، أي مما يلي يعد طريقة لتحسين مهارات الاستماع؟",
            options: ["Practice Active Listening", "Stop practicing pronunciation", "Memorize the dictionary", "Read silently"],
            optionsAr: ["ممارسة الاستماع النشط", "التوقف عن ممارسة النطق", "حفظ القاموس", "القراءة بصمت"],
            correct: 0,
            hint: "The three ways mentioned are: Active Listening, Pronunciation, and Routine.",
            hintAr: "من الطرق المذكورة في المحاضرة لتحسين الاستماع: الاستماع النشط (Active Listening)."
        }
    ]
});