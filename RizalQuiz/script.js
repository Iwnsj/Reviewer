// =========================================================================
//  RIZAL NOVELS QUIZ — ENGINE LOGIC
// =========================================================================

(() => {
    'use strict';

    // --- NOVEL CONFIGURATIONS ---
    const NOVEL_CONFIG = {
        noli: {
            title: 'Noli Me Tangere',
            tagline: 'Book I • 1887',
            desc: 'Test your understanding of Jose Rizal\'s first brilliant masterpiece. Answer 50 detailed questions spanning the social abuses, Crisostomo Ibarra\'s hopes, Sisa\'s tragic loss, and Elias\'s profound patriotism.',
            icon: '🌸',
            topics: ['Crisostomo Ibarra', 'Maria Clara', 'Padre Damaso', 'Elias & Salome', 'Sisa, Basilio & Crispin', 'Social Cancer', 'San Diego Abuses', 'Berlin Publication'],
            themeClass: 'noli-theme',
            gradColors: ['#10b981', '#059669'] // emerald green
        },
        fili: {
            title: 'El Filibusterismo',
            tagline: 'Book II • 1891',
            desc: 'Challenge yourself with Rizal\'s dark, explosive sequel. Answer 50 detailed questions regarding the jeweler Simoun\'s conspiracies, Kabesang Tales\' descent into rebellion, Juli\'s sacrifice, and the philosophical warnings of freedom.',
            icon: '💎',
            topics: ['Simoun the Jeweler', 'Basilio\'s Medical Path', 'Isagani\'s Idealism', 'Kabesang Tales (Matanglawin)', 'Juli\'s Sacrifice', 'The Bapor Tabo Metaphor', 'Nitroglycerin Bomb Plot', 'Ghent Publication'],
            themeClass: 'fili-theme',
            gradColors: ['#ef4444', '#dc2626'] // crimson red
        }
    };

    // --- EXTRACT NOVEL PARAMETER ---
    const urlParams = new URLSearchParams(window.location.search);
    let selectedNovel = urlParams.get('novel');

    // Default fallback to Noli if param is missing or incorrect
    if (!selectedNovel || !RIZAL_QUESTIONS[selectedNovel]) {
        selectedNovel = 'noli';
    }

    const CONFIG = NOVEL_CONFIG[selectedNovel];
    const QUESTIONS = RIZAL_QUESTIONS[selectedNovel];

    // --- STATE VARIABLES ---
    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let userAnswers = []; // track { questionIndex, selected, correct, isCorrect }

    // --- DOM ELEMENTS ---
    const quizBody      = document.getElementById('quizBody');
    const startScreen   = document.getElementById('startScreen');
    const quizScreen    = document.getElementById('quizScreen');
    const resultsScreen = document.getElementById('resultsScreen');

    const novelTitle    = document.getElementById('novelTitle');
    const novelDesc     = document.getElementById('novelDesc');
    const novelTopics   = document.getElementById('novelTopics');
    const startIcon     = document.getElementById('startIcon');

    const btnStart      = document.getElementById('btnStart');
    const btnNext       = document.getElementById('btnNext');
    const btnNextLabel  = document.getElementById('btnNextLabel');
    const btnRetry      = document.getElementById('btnRetry');

    const qCounter      = document.getElementById('qCounter');
    const qScore        = document.getElementById('qScore');
    const progressBar   = document.getElementById('progressBar');
    const qBadge        = document.getElementById('qBadge');
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
    const gradStop1     = document.getElementById('gradStop1');
    const gradStop2     = document.getElementById('gradStop2');

    const btnReviewToggle = document.getElementById('btnReviewToggle');
    const reviewSection   = document.getElementById('reviewSection');

    // --- INITIALIZE THEME AND METADATA ---
    function initApp() {
        // Set body class
        quizBody.className = CONFIG.themeClass;

        // Set document and start screen metadata
        document.title = `${CONFIG.title} Quiz — Literary Reviewer`;
        novelTitle.innerHTML = `${CONFIG.title}<br><span>Reviewer Quiz</span>`;
        novelDesc.textContent = CONFIG.desc;
        startIcon.textContent = CONFIG.icon;

        // Set topics
        novelTopics.innerHTML = CONFIG.topics.map(topic => `
            <span class="topic-tag">${topic}</span>
        `).join('');

        // Configure Results gradient color
        gradStop1.setAttribute('stop-color', CONFIG.gradColors[0]);
        gradStop2.setAttribute('stop-color', CONFIG.gradColors[1]);
        
        // Update Ring total indicator text
        document.querySelector('.ring-total').textContent = `/ ${QUESTIONS.length}`;
    }

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

        // Update header info
        qCounter.textContent = `Question ${currentIndex + 1} / ${QUESTIONS.length}`;
        qScore.textContent = `Score: ${score}`;
        progressBar.style.width = `${((currentIndex) / QUESTIONS.length) * 100}%`;

        // Set category badge
        qBadge.textContent = q.category;

        // Set question text
        qText.innerHTML = q.question;

        // Populate options list
        const letters = ['A', 'B', 'C', 'D'];
        optionsGrid.innerHTML = q.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}" id="opt-${i}">
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
            </button>
        `).join('');

        // Attach click handlers to options
        optionsGrid.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });

        // Hide feedback and next actions
        feedback.style.display = 'none';
        btnNext.style.display = 'none';

        // Animate options sliding in smoothly
        optionsGrid.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(12px)';
            setTimeout(() => {
                btn.style.transition = `all 0.35s ${0.04 * i}s var(--ease-out)`;
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 30);
        });
    }

    // --- ANSWER HANDLER ---
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

        // Disable all options and style correct/incorrect selections
        optionsGrid.querySelectorAll('.option-btn').forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.answer) btn.classList.add('correct');
            if (i === selectedIndex && !isCorrect) btn.classList.add('wrong');
        });

        // Populate and show the feedback card
        feedback.style.display = 'flex';
        feedback.className = 'feedback ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
        feedbackIcon.textContent = isCorrect ? '✓' : '✗';
        feedbackTitle.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        feedbackExplain.innerHTML = q.explanation;

        // Live update score
        qScore.textContent = `Score: ${score}`;

        // Show Next Button or Results Button
        btnNext.style.display = 'inline-flex';
        btnNextLabel.textContent = currentIndex < QUESTIONS.length - 1 ? 'Next Question' : 'View Results';
    }

    // --- PROCEDE TO NEXT QUESTION OR VIEW RESULTS ---
    btnNext.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < QUESTIONS.length) {
            renderQuestion();
        } else {
            showResults();
        }
    });

    // --- DISPLAY RESULTS SCREEN ---
    function showResults() {
        showScreen(resultsScreen);

        const total = QUESTIONS.length;
        const wrong = total - score;
        const pct = Math.round((score / total) * 100);

        // Animate circular progress ring
        const circumference = 326.73; // 2 * pi * 52
        const offset = circumference - (score / total) * circumference;
        setTimeout(() => {
            ringProgress.style.strokeDashoffset = offset;
        }, 200);

        // Animate count-up metrics numbers
        animateNumber(ringScore, 0, score, 1200);
        animateNumber(rCorrect, 0, score, 800);
        animateNumber(rWrong, 0, wrong, 800);

        setTimeout(() => {
            rPercent.textContent = pct + '%';
        }, 600);

        // Custom titles and messages based on performance
        if (pct === 100) {
            resultsTitle.textContent = '🏆 Perfect Score!';
            resultsSubtitle.textContent = `You are a true scholar of Rizal! You got a flawless mark on ${CONFIG.title}!`;
        } else if (pct >= 85) {
            resultsTitle.textContent = '🌟 Outstanding Mark!';
            resultsSubtitle.textContent = `Excellent understanding! Your knowledge of ${CONFIG.title} is deep and highly commendable.`;
        } else if (pct >= 70) {
            resultsTitle.textContent = '👍 Good Job!';
            resultsSubtitle.textContent = `Solid work. You have a good grasp of the characters and major plot details.`;
        } else if (pct >= 50) {
            resultsTitle.textContent = '📖 Review Recommended';
            resultsSubtitle.textContent = `You passed, but there are details that need reviewing. Go through the answers below.`;
        } else {
            resultsTitle.textContent = '💪 Keep Studying!';
            resultsSubtitle.textContent = `Take some time to read up on the characters and key chapters of ${CONFIG.title} and try again!`;
        }

        // Complete the progress track width
        progressBar.style.width = '100%';

        // Generate the detailed reviews section
        buildReview();

        // Reset review panel toggle states
        reviewSection.style.display = 'none';
        btnReviewToggle.classList.remove('open');
    }

    // Number counting animator
    function animateNumber(el, from, to, duration) {
        const start = performance.now();
        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic curve
            const current = Math.round(from + (to - from) * eased);
            el.textContent = current;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    // --- CONSTRUCT THE REVIEW COMPONENT ---
    function buildReview() {
        const letters = ['A', 'B', 'C', 'D'];
        let html = '';

        userAnswers.forEach((ua, i) => {
            const q = QUESTIONS[ua.questionIndex];
            
            // Clean HTML code tags from options text for clean text rendering in review lists
            const stripTags = (s) => s.replace(/<[^>]*>/g, '');

            html += `
                <div class="review-item ${ua.isCorrect ? 'review-correct' : 'review-wrong'}">
                    <div class="review-q">
                        <span class="review-num">#${i + 1}</span>
                        <span class="review-badge-cat">${q.category}</span>
                        <div class="review-q-text">${stripTags(q.question)}</div>
                    </div>
                    <div class="review-answer">
            `;

            if (ua.isCorrect) {
                html += `
                    <div class="rev-ans-pill correct">
                        <span class="indicator">✓ Your Answer:</span> 
                        <strong>${letters[ua.correct]}. ${stripTags(q.options[ua.correct])}</strong>
                    </div>
                `;
            } else {
                html += `
                    <div class="rev-ans-pill wrong">
                        <span class="indicator">✗ Your Answer:</span> 
                        <span>${letters[ua.selected]}. ${stripTags(q.options[ua.selected])}</span>
                    </div>
                    <div class="rev-ans-pill correct">
                        <span class="indicator">→ Correct Answer:</span> 
                        <strong>${letters[ua.correct]}. ${stripTags(q.options[ua.correct])}</strong>
                    </div>
                `;
            }

            html += `
                    </div>
                    <div class="review-explanation-text">
                        <strong>Explanation:</strong> ${q.explanation}
                    </div>
                </div>
            `;
        });

        reviewSection.innerHTML = html;
    }

    // --- ACCORDION SLIDER FOR REVIEW SECTION ---
    btnReviewToggle.addEventListener('click', () => {
        const isOpen = reviewSection.style.display !== 'none';
        reviewSection.style.display = isOpen ? 'none' : 'block';
        btnReviewToggle.classList.toggle('open');
        
        if (!isOpen) {
            setTimeout(() => {
                reviewSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 80);
        }
    });

    // --- START BUTTON EVENT ---
    btnStart.addEventListener('click', () => {
        currentIndex = 0;
        score = 0;
        userAnswers = [];
        showScreen(quizScreen);
        renderQuestion();
    });

    // --- RETRY BUTTON EVENT ---
    btnRetry.addEventListener('click', () => {
        currentIndex = 0;
        score = 0;
        userAnswers = [];
        // Reset circular SVG stroke offsets
        ringProgress.style.strokeDashoffset = 326.73;
        showScreen(quizScreen);
        renderQuestion();
    });

    // --- ACCESSABILITY KEYBOARD BINDINGS ---
    document.addEventListener('keydown', (e) => {
        if (!quizScreen.classList.contains('active')) return;

        const keyMap = { 
            '1': 0, '2': 1, '3': 2, '4': 3, 
            'a': 0, 'b': 1, 'c': 2, 'd': 3 
        };
        const key = e.key.toLowerCase();

        // If options are active and player presses 1-4 or A-D, record their answer selection
        if (key in keyMap && !answered) {
            handleAnswer(keyMap[key]);
        }

        // If options are answered, press Enter or Space to go to next question or results screen
        if ((key === 'enter' || key === ' ') && answered) {
            e.preventDefault();
            btnNext.click();
        }
    });

    // --- LOAD ON STARTUP ---
    initApp();

})();
