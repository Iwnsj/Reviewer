// ============================================
//  HTML & CSS REVIEWER QUIZ — LOGIC
// ============================================

(() => {
    'use strict';

    // --- 20 Quiz Questions ---
    const QUESTIONS = [
        {
            category: 'HTML',
            question: 'Which HTML5 element is used to define navigation links?',
            options: [
                '<code>&lt;navigate&gt;</code>',
                '<code>&lt;nav&gt;</code>',
                '<code>&lt;links&gt;</code>',
                '<code>&lt;menu&gt;</code>'
            ],
            answer: 1,
            explanation: 'The <nav> element represents a section of a page that contains navigation links, either within the current document or to other documents.'
        },
        {
            category: 'CSS',
            question: 'What does the CSS <code>box-sizing: border-box</code> property do?',
            options: [
                'Adds an extra border around the element',
                'Makes padding and border included in the element\'s total width and height',
                'Removes the element\'s box shadow',
                'Sets the element\'s display to block'
            ],
            answer: 1,
            explanation: 'With border-box, the width and height properties include the padding and border, but not the margin. This makes sizing elements much more predictable.'
        },
        {
            category: 'HTML',
            question: 'Which attribute is used to provide alternative text for an image if the image cannot be displayed?',
            options: [
                '<code>title</code>',
                '<code>src</code>',
                '<code>alt</code>',
                '<code>caption</code>'
            ],
            answer: 2,
            explanation: 'The alt attribute provides alternative text for screen readers and when images fail to load. It is essential for web accessibility (WCAG compliance).'
        },
        {
            category: 'CSS',
            question: 'Which CSS property is used to create space between an element\'s border and its content?',
            options: [
                '<code>margin</code>',
                '<code>spacing</code>',
                '<code>padding</code>',
                '<code>gap</code>'
            ],
            answer: 2,
            explanation: 'Padding creates space inside the element, between the content and the border. Margin creates space outside the element, between the border and surrounding elements.'
        },
        {
            category: 'CSS',
            question: 'In Flexbox, which property is used to align items along the cross axis?',
            options: [
                '<code>justify-content</code>',
                '<code>align-items</code>',
                '<code>flex-direction</code>',
                '<code>flex-wrap</code>'
            ],
            answer: 1,
            explanation: 'align-items controls alignment along the cross axis (perpendicular to the main axis). justify-content controls alignment along the main axis.'
        },
        {
            category: 'HTML',
            question: 'Which HTML element is the correct way to define an unordered list?',
            options: [
                '<code>&lt;ol&gt;</code>',
                '<code>&lt;list&gt;</code>',
                '<code>&lt;ul&gt;</code>',
                '<code>&lt;dl&gt;</code>'
            ],
            answer: 2,
            explanation: '<ul> defines an unordered (bulleted) list, while <ol> defines an ordered (numbered) list, and <dl> defines a description list.'
        },
        {
            category: 'CSS',
            question: 'What is the default value of the <code>position</code> property in CSS?',
            options: [
                '<code>relative</code>',
                '<code>absolute</code>',
                '<code>fixed</code>',
                '<code>static</code>'
            ],
            answer: 3,
            explanation: 'The default position value is static. Elements with static positioning are placed in the normal document flow and are not affected by top, bottom, left, or right properties.'
        },
        {
            category: 'HTML',
            question: 'Which input type in HTML5 is specifically designed for email addresses and provides built-in validation?',
            options: [
                '<code>type="text"</code>',
                '<code>type="email"</code>',
                '<code>type="mail"</code>',
                '<code>type="address"</code>'
            ],
            answer: 1,
            explanation: 'The email input type provides built-in browser validation that checks for a valid email format (containing @ symbol and domain). It also shows a specialized keyboard on mobile devices.'
        },
        {
            category: 'CSS',
            question: 'Which CSS selector targets all <code>&lt;p&gt;</code> elements that are direct children of a <code>&lt;div&gt;</code>?',
            options: [
                '<code>div p</code>',
                '<code>div > p</code>',
                '<code>div + p</code>',
                '<code>div ~ p</code>'
            ],
            answer: 1,
            explanation: 'The child combinator (>) selects only direct children. "div p" selects all descendants, "div + p" selects the adjacent sibling, and "div ~ p" selects all general siblings.'
        },
        {
            category: 'HTML',
            question: 'What is the purpose of the <code>&lt;meta charset="UTF-8"&gt;</code> tag?',
            options: [
                'It sets the page title',
                'It specifies the character encoding for the HTML document',
                'It links an external stylesheet',
                'It defines the document language'
            ],
            answer: 1,
            explanation: 'The charset meta tag tells the browser which character encoding to use. UTF-8 supports virtually all characters from all writing systems and is the recommended encoding for web pages.'
        },
        {
            category: 'CSS',
            question: 'Which property creates a flexible container so its children can be laid out using Flexbox?',
            options: [
                '<code>display: flex</code>',
                '<code>display: grid</code>',
                '<code>display: inline</code>',
                '<code>display: flexbox</code>'
            ],
            answer: 0,
            explanation: 'display: flex creates a flex container and enables the Flexbox layout model. Note that "display: flexbox" is not valid CSS — the correct value is simply "flex".'
        },
        {
            category: 'CSS',
            question: 'What does the <code>z-index</code> property control?',
            options: [
                'The horizontal position of an element',
                'The zoom level of an element',
                'The stacking order of overlapping elements',
                'The size of an element'
            ],
            answer: 2,
            explanation: 'z-index controls the stacking order of positioned elements. Elements with a higher z-index appear in front of elements with a lower z-index. It only works on positioned elements (not static).'
        },
        {
            category: 'HTML',
            question: 'Which HTML5 element is used to define a section of content that is self-contained and could be independently distributed, like a blog post?',
            options: [
                '<code>&lt;section&gt;</code>',
                '<code>&lt;div&gt;</code>',
                '<code>&lt;article&gt;</code>',
                '<code>&lt;aside&gt;</code>'
            ],
            answer: 2,
            explanation: '<article> represents a self-contained composition that could be distributed independently — such as a blog post, news story, or forum post. <section> is a thematic grouping, and <aside> is for tangentially related content.'
        },
        {
            category: 'CSS',
            question: 'Which CSS property is used to make text bold?',
            options: [
                '<code>text-style: bold</code>',
                '<code>font-weight: bold</code>',
                '<code>font-style: bold</code>',
                '<code>text-weight: bold</code>'
            ],
            answer: 1,
            explanation: 'font-weight controls the thickness (boldness) of text. Common values include "normal" (400), "bold" (700), or numeric values from 100 to 900.'
        },
        {
            category: 'HTML',
            question: 'What is the correct HTML element for defining the largest heading?',
            options: [
                '<code>&lt;head&gt;</code>',
                '<code>&lt;h6&gt;</code>',
                '<code>&lt;heading&gt;</code>',
                '<code>&lt;h1&gt;</code>'
            ],
            answer: 3,
            explanation: '<h1> defines the largest and most important heading. Headings range from <h1> (most important) to <h6> (least important). <head> is the document metadata container, not a heading.'
        },
        {
            category: 'CSS',
            question: 'Which CSS media query targets screens with a maximum width of 768 pixels?',
            options: [
                '<code>@media screen (max: 768px)</code>',
                '<code>@media (min-width: 768px)</code>',
                '<code>@media screen and (max-width: 768px)</code>',
                '<code>@responsive (768px)</code>'
            ],
            answer: 2,
            explanation: '@media screen and (max-width: 768px) applies styles only when the viewport is 768px or narrower. This is the standard syntax for responsive design breakpoints.'
        },
        {
            category: 'CSS',
            question: 'What is the correct CSS syntax to change the background color of all paragraphs to blue?',
            options: [
                '<code>p {background-color: blue;}</code>',
                '<code>all.p {background: blue;}</code>',
                '<code>&lt;p style="blue"&gt;</code>',
                '<code>p.all {color: blue;}</code>'
            ],
            answer: 0,
            explanation: 'The element selector "p" targets all <p> elements. background-color (or the shorthand background) sets the background. This is a basic type selector in CSS.'
        },
        {
            category: 'HTML',
            question: 'Which attribute is required on the <code>&lt;a&gt;</code> tag to create a hyperlink?',
            options: [
                '<code>link</code>',
                '<code>src</code>',
                '<code>href</code>',
                '<code>url</code>'
            ],
            answer: 2,
            explanation: 'The href (Hypertext REFerence) attribute specifies the URL the link points to. Without href, the <a> element does not function as a hyperlink.'
        },
        {
            category: 'CSS',
            question: 'Which pseudo-class applies styles when a user hovers over an element?',
            options: [
                '<code>:active</code>',
                '<code>:focus</code>',
                '<code>:hover</code>',
                '<code>:visited</code>'
            ],
            answer: 2,
            explanation: ':hover applies when the user places their cursor over an element. :active is for when the element is being clicked, :focus is when it has keyboard focus, and :visited is for links already visited.'
        },
        {
            category: 'HTML',
            question: 'Which HTML element is used to group and apply styles to inline elements within a block of text?',
            options: [
                '<code>&lt;div&gt;</code>',
                '<code>&lt;section&gt;</code>',
                '<code>&lt;span&gt;</code>',
                '<code>&lt;block&gt;</code>'
            ],
            answer: 2,
            explanation: '<span> is an inline container used to mark up part of a text or document. Unlike <div>, which is a block-level element, <span> does not create a line break and is used for inline styling or scripting.'
        }
    ];

    // --- STATE ---
    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let userAnswers = []; // track { selected, correct }

    // --- DOM ---
    const startScreen   = document.getElementById('startScreen');
    const quizScreen    = document.getElementById('quizScreen');
    const resultsScreen = document.getElementById('resultsScreen');

    const btnStart      = document.getElementById('btnStart');
    const btnNext       = document.getElementById('btnNext');
    const btnNextLabel  = document.getElementById('btnNextLabel');
    const btnRetry      = document.getElementById('btnRetry');

    const qCounter      = document.getElementById('qCounter');
    const qScore        = document.getElementById('qScore');
    const progressBar   = document.getElementById('progressBar');
    const qBadge        = document.getElementById('qBadge');
    const codeBlock     = document.getElementById('codeBlock');
    const codeSnippet   = document.getElementById('codeSnippet');
    const qText         = document.getElementById('qText');
    const optionsGrid   = document.getElementById('optionsGrid');
    const feedback      = document.getElementById('feedback');
    const feedbackIcon  = document.getElementById('feedbackIcon');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackExplain = document.getElementById('feedbackExplain');

    const ringProgress  = document.getElementById('ringProgress');
    const ringScore     = document.getElementById('ringScore');
    const rCorrect      = document.getElementById('rCorrect');
    const rWrong        = document.getElementById('rWrong');
    const rPercent      = document.getElementById('rPercent');
    const resultsTitle  = document.getElementById('resultsTitle');
    const resultsSubtitle = document.getElementById('resultsSubtitle');

    const btnReviewToggle = document.getElementById('btnReviewToggle');
    const reviewSection   = document.getElementById('reviewSection');

    // --- SCREEN TRANSITIONS ---
    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.style.animation = 'none';
        });
        screen.offsetHeight; // reflow
        screen.style.animation = '';
        screen.classList.add('active');
    }

    // --- RENDER QUESTION ---
    function renderQuestion() {
        const q = QUESTIONS[currentIndex];
        answered = false;

        // Update header
        qCounter.textContent = `Question ${currentIndex + 1} / ${QUESTIONS.length}`;
        qScore.textContent = `Score: ${score}`;
        progressBar.style.width = `${((currentIndex) / QUESTIONS.length) * 100}%`;

        // Badge
        qBadge.textContent = q.category;
        qBadge.className = 'q-badge' + (q.category === 'CSS' ? ' css-badge' : '');

        // Code block
        if (q.code) {
            codeBlock.style.display = 'block';
            codeSnippet.textContent = q.code;
        } else {
            codeBlock.style.display = 'none';
        }

        // Question text
        qText.innerHTML = q.question;

        // Options
        const letters = ['A', 'B', 'C', 'D'];
        optionsGrid.innerHTML = q.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}" id="opt-${i}">
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            </button>
        `).join('');

        // Attach click handlers
        optionsGrid.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });

        // Hide feedback & next
        feedback.style.display = 'none';
        btnNext.style.display = 'none';

        // Entry animation for options
        optionsGrid.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(12px)';
            setTimeout(() => {
                btn.style.transition = `all 0.35s ${0.05 * i}s var(--ease-out)`;
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 50);
        });
    }

    // --- HANDLE ANSWER ---
    function handleAnswer(selectedIndex) {
        if (answered) return;
        answered = true;

        const q = QUESTIONS[currentIndex];
        const isCorrect = selectedIndex === q.answer;

        if (isCorrect) score++;

        userAnswers.push({
            questionIndex: currentIndex,
            selected: selectedIndex,
            correct: q.answer,
            isCorrect
        });

        // Disable all options
        optionsGrid.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.answer) btn.classList.add('correct');
            if (i === selectedIndex && !isCorrect) btn.classList.add('wrong');
        });

        // Show feedback
        feedback.style.display = 'flex';
        feedback.className = 'feedback ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
        feedbackIcon.textContent = isCorrect ? '✓' : '✗';
        feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        feedbackExplain.textContent = q.explanation;

        // Update score
        qScore.textContent = `Score: ${score}`;

        // Show next button
        btnNext.style.display = 'inline-flex';
        btnNextLabel.textContent = currentIndex < QUESTIONS.length - 1 ? 'Next Question' : 'View Results';
    }

    // --- NEXT QUESTION ---
    btnNext.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < QUESTIONS.length) {
            renderQuestion();
        } else {
            showResults();
        }
    });

    // --- SHOW RESULTS ---
    function showResults() {
        showScreen(resultsScreen);

        const total = QUESTIONS.length;
        const wrong = total - score;
        const pct = Math.round((score / total) * 100);

        // Animate ring
        const circumference = 326.73;
        const offset = circumference - (score / total) * circumference;
        setTimeout(() => {
            ringProgress.style.strokeDashoffset = offset;
        }, 200);

        // Animate score number
        animateNumber(ringScore, 0, score, 1200);
        animateNumber(rCorrect, 0, score, 800);
        animateNumber(rWrong, 0, wrong, 800);

        setTimeout(() => {
            rPercent.textContent = pct + '%';
        }, 600);

        // Title & subtitle
        if (pct === 100) {
            resultsTitle.textContent = '🏆 Perfect Score!';
            resultsSubtitle.textContent = 'You absolutely nailed it! HTML & CSS master!';
        } else if (pct >= 80) {
            resultsTitle.textContent = '🌟 Excellent Work!';
            resultsSubtitle.textContent = 'You have a strong grasp of HTML & CSS fundamentals!';
        } else if (pct >= 60) {
            resultsTitle.textContent = '👍 Good Job!';
            resultsSubtitle.textContent = 'Solid understanding, but there\'s room to improve.';
        } else if (pct >= 40) {
            resultsTitle.textContent = '📖 Keep Studying!';
            resultsSubtitle.textContent = 'Review the topics you missed and try again.';
        } else {
            resultsTitle.textContent = '💪 Don\'t Give Up!';
            resultsSubtitle.textContent = 'Practice makes perfect. Review the fundamentals and retry!';
        }

        // Progress bar full
        progressBar.style.width = '100%';

        // Build review
        buildReview();

        // Reset review toggle
        reviewSection.style.display = 'none';
        btnReviewToggle.classList.remove('open');
    }

    function animateNumber(el, from, to, duration) {
        const start = performance.now();
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(from + (to - from) * eased);
            el.textContent = current;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    // --- BUILD REVIEW ---
    function buildReview() {
        const letters = ['A', 'B', 'C', 'D'];
        let html = '';

        userAnswers.forEach((ua, i) => {
            const q = QUESTIONS[ua.questionIndex];
            // Strip HTML from option text for review display
            const strip = (s) => s.replace(/<[^>]*>/g, '');

            html += `<div class="review-item ${ua.isCorrect ? 'review-correct' : 'review-wrong'}">
                <div class="review-q"><span class="review-num">#${i + 1}</span>${q.question.replace(/<[^>]*>/g, '')}</div>
                <div class="review-answer">`;

            if (ua.isCorrect) {
                html += `<strong>✓ ${letters[ua.correct]}. ${strip(q.options[ua.correct])}</strong>`;
            } else {
                html += `<span class="user-wrong">✗ ${letters[ua.selected]}. ${strip(q.options[ua.selected])}</span>`;
                html += `<strong>→ ${letters[ua.correct]}. ${strip(q.options[ua.correct])}</strong>`;
            }

            html += `</div></div>`;
        });

        reviewSection.innerHTML = html;
    }

    // --- REVIEW TOGGLE ---
    btnReviewToggle.addEventListener('click', () => {
        const isOpen = reviewSection.style.display !== 'none';
        reviewSection.style.display = isOpen ? 'none' : 'block';
        btnReviewToggle.classList.toggle('open');
    });

    // --- START ---
    btnStart.addEventListener('click', () => {
        currentIndex = 0;
        score = 0;
        userAnswers = [];
        showScreen(quizScreen);
        renderQuestion();
    });

    // --- RETRY ---
    btnRetry.addEventListener('click', () => {
        currentIndex = 0;
        score = 0;
        userAnswers = [];
        // Reset ring
        ringProgress.style.strokeDashoffset = 326.73;
        showScreen(quizScreen);
        renderQuestion();
    });

    // --- KEYBOARD SUPPORT ---
    document.addEventListener('keydown', (e) => {
        if (!quizScreen.classList.contains('active')) return;

        const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        const key = e.key.toLowerCase();

        if (key in keyMap && !answered) {
            handleAnswer(keyMap[key]);
        }

        if ((key === 'enter' || key === ' ') && answered) {
            e.preventDefault();
            btnNext.click();
        }
    });

})();
