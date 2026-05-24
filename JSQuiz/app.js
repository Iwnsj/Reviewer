// ============================================
//  JAVASCRIPT QUIZ — APPLICATION LOGIC
// ============================================

(() => {
    'use strict';

    // ---- STATE ----
    let currentIdx = 0;
    let score = 0;
    let answered = false;
    let history = []; // { qIdx, selected, correct, isCorrect }

    // ---- DOM REFS ----
    const $ = id => document.getElementById(id);

    const startScreen   = $('startScreen');
    const quizScreen    = $('quizScreen');
    const resultsScreen = $('resultsScreen');

    const btnStart  = $('btnStart');
    const btnNext   = $('btnNext');
    const nextLabel = $('nextLabel');
    const btnRetry  = $('btnRetry');

    const qNum          = $('qNum');
    const qCatPill      = $('qCatPill');
    const liveScore     = $('liveScore');
    const scoreBadge    = $('scoreBadge');
    const progressFill  = $('progressFill');
    const qTypeBadge    = $('qTypeBadge');
    const qDiff         = $('qDiff');
    const qText         = $('qText');
    const codePanel     = $('codePanel');
    const codeLabel     = $('codeLabel');
    const codeContent   = $('codeContent');
    const optionsContainer = $('optionsContainer');
    const feedback      = $('feedback');
    const fbStripe      = $('fbStripe');
    const fbIcon        = $('fbIcon');
    const fbTitle       = $('fbTitle');
    const fbExplain     = $('fbExplain');

    const ringArc       = $('ringArc');
    const ringNum       = $('ringNum');
    const statCorrect   = $('statCorrect');
    const statWrong     = $('statWrong');
    const statPct       = $('statPct');
    const resTitle      = $('resTitle');
    const resSub        = $('resSub');
    const catBreakdown  = $('catBreakdown');
    const btnToggleReview = $('btnToggleReview');
    const reviewList    = $('reviewList');

    // ---- SYNTAX HIGHLIGHTING ----
    function highlightJS(code) {
        // Simple token-based highlighter
        let html = code
            // Strings (must be first to prevent inner matches)
            .replace(/(["'`])(?:(?!\1|\\).|\\.)*\1/g, '<span class="str">$&</span>')
            // Comments
            .replace(/(\/\/.*)/g, '<span class="cm">$1</span>')
            // Keywords
            .replace(/\b(const|let|var|function|return|if|else|for|while|new|typeof|async|await|try|catch|finally|throw|class|extends|import|export|from|of|in)\b/g, '<span class="kw">$1</span>')
            // Booleans & null/undefined
            .replace(/\b(true|false)\b/g, '<span class="bool">$1</span>')
            .replace(/\b(null|undefined)\b/g, '<span class="null">$1</span>')
            // Numbers
            .replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>')
            // console.log
            .replace(/\b(console)\.(log|error|warn)\b/g, '<span class="log">$1</span>.<span class="fn">$2</span>')
            // Function calls
            .replace(/\b([a-zA-Z_]\w*)\s*(?=\()/g, '<span class="fn">$1</span>')
            // Arrow
            .replace(/=&gt;/g, '<span class="op">=&gt;</span>');

        return html;
    }

    // ---- SCREEN NAV ----
    function showScreen(screen) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.style.animation = 'none';
        });
        void screen.offsetHeight;
        screen.style.animation = '';
        screen.classList.add('active');
    }

    // ---- RENDER QUESTION ----
    function renderQuestion() {
        const q = QUESTIONS[currentIdx];
        answered = false;

        // Header
        qNum.textContent = `${currentIdx + 1} / ${QUESTIONS.length}`;
        qCatPill.textContent = q.category;
        liveScore.textContent = score;
        progressFill.style.width = `${(currentIdx / QUESTIONS.length) * 100}%`;

        // Type badge
        if (q.type === 'code') {
            qTypeBadge.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Code Analysis`;
            qTypeBadge.className = 'q-type-badge code-type';
        } else {
            qTypeBadge.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/></svg> Concept`;
            qTypeBadge.className = 'q-type-badge';
        }

        // Difficulty
        qDiff.textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
        qDiff.className = 'q-diff ' + q.difficulty;

        // Question
        qText.innerHTML = q.question;

        // Code panel
        if (q.code) {
            codePanel.style.display = 'block';
            codeLabel.textContent = q.type === 'code' ? 'What is the output?' : 'Analyze this code';
            codeContent.innerHTML = highlightJS(escapeHTML(q.code));
        } else {
            codePanel.style.display = 'none';
        }

        // Options
        const letters = ['A', 'B', 'C', 'D'];
        optionsContainer.innerHTML = q.options.map((opt, i) => `
            <button class="opt-btn" data-idx="${i}" id="quiz-opt-${i}">
                <span class="opt-ltr">${letters[i]}</span>
                <span class="opt-body">${opt}</span>
            </button>
        `).join('');

        // Attach handlers
        optionsContainer.querySelectorAll('.opt-btn').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx)));
        });

        // Hide feedback & next
        feedback.style.display = 'none';
        btnNext.style.display = 'none';

        // Stagger entrance
        optionsContainer.querySelectorAll('.opt-btn').forEach((btn, i) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(10px)';
            setTimeout(() => {
                btn.style.transition = `all .35s ${0.04 * i}s var(--ease)`;
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 60);
        });
    }

    function escapeHTML(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ---- HANDLE ANSWER ----
    function handleAnswer(sel) {
        if (answered) return;
        answered = true;

        const q = QUESTIONS[currentIdx];
        const ok = sel === q.answer;
        if (ok) score++;

        history.push({ qIdx: currentIdx, selected: sel, correct: q.answer, isCorrect: ok });

        // Lock options
        optionsContainer.querySelectorAll('.opt-btn').forEach((btn, i) => {
            btn.classList.add('locked');
            if (i === q.answer) btn.classList.add('correct');
            if (i === sel && !ok) btn.classList.add('wrong');
        });

        // Feedback
        feedback.style.display = 'flex';
        feedback.className = 'feedback ' + (ok ? 'fb-correct' : 'fb-wrong');
        fbStripe.className = 'fb-stripe ' + (ok ? 'green' : 'red');
        fbIcon.textContent = ok ? '✓' : '✗';
        fbTitle.textContent = ok ? 'Correct!' : 'Incorrect';
        fbExplain.innerHTML = q.explanation;

        // Update score live
        liveScore.textContent = score;

        // Flash badge
        scoreBadge.style.transform = 'scale(1.15)';
        setTimeout(() => { scoreBadge.style.transition = 'transform .3s'; scoreBadge.style.transform = 'scale(1)'; }, 200);

        // Show next
        btnNext.style.display = 'inline-flex';
        nextLabel.textContent = currentIdx < QUESTIONS.length - 1 ? 'Next' : 'Results';
    }

    // ---- NEXT ----
    btnNext.addEventListener('click', () => {
        currentIdx++;
        if (currentIdx < QUESTIONS.length) {
            renderQuestion();
        } else {
            showResults();
        }
    });

    // ---- RESULTS ----
    function showResults() {
        showScreen(resultsScreen);

        const total = QUESTIONS.length;
        const wrong = total - score;
        const pct = Math.round((score / total) * 100);

        // Ring
        const circ = 351.86;
        setTimeout(() => { ringArc.style.strokeDashoffset = circ - (score / total) * circ; }, 250);

        animNum(ringNum, 0, score, 1200);
        animNum(statCorrect, 0, score, 900);
        animNum(statWrong, 0, wrong, 900);
        setTimeout(() => { statPct.textContent = pct + '%'; }, 700);

        progressFill.style.width = '100%';

        // Title
        if (pct === 100) { resTitle.textContent = '🏆 Perfect Score!'; resSub.textContent = 'JavaScript master! Flawless run.'; }
        else if (pct >= 85) { resTitle.textContent = '🌟 Outstanding!'; resSub.textContent = 'You really know your JavaScript!'; }
        else if (pct >= 70) { resTitle.textContent = '👏 Great Job!'; resSub.textContent = 'Strong fundamentals — keep sharpening.'; }
        else if (pct >= 50) { resTitle.textContent = '👍 Not Bad!'; resSub.textContent = 'Decent, but review the topics you missed.'; }
        else if (pct >= 30) { resTitle.textContent = '📖 Keep Learning!'; resSub.textContent = 'Practice closures, async, and scope.'; }
        else { resTitle.textContent = '💪 Don\'t Give Up!'; resSub.textContent = 'Start with the fundamentals and build up!'; }

        // Category breakdown
        buildCategoryBreakdown();

        // Review
        buildReview();
        reviewList.style.display = 'none';
        btnToggleReview.classList.remove('open');
    }

    function animNum(el, from, to, dur) {
        const t0 = performance.now();
        (function tick(now) {
            const p = Math.min((now - t0) / dur, 1);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(from + (to - from) * e);
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
    }

    // ---- CATEGORY BREAKDOWN ----
    function buildCategoryBreakdown() {
        const cats = {};
        history.forEach(h => {
            const cat = QUESTIONS[h.qIdx].category;
            if (!cats[cat]) cats[cat] = { total: 0, correct: 0 };
            cats[cat].total++;
            if (h.isCorrect) cats[cat].correct++;
        });

        const colors = {
            'Variables & Scope': '#38bdf8',
            'Type Coercion': '#f59e0b',
            'Functions': '#a78bfa',
            'Arrays': '#22d3ee',
            'Objects': '#fb923c',
            'ES6+': '#facc15',
            'Closures': '#f472b6',
            'Async': '#4ade80',
            'DOM': '#818cf8',
            'Error Handling': '#f87171'
        };

        let html = '';
        for (const [cat, data] of Object.entries(cats)) {
            const pct = Math.round((data.correct / data.total) * 100);
            const color = colors[cat] || '#818cf8';
            html += `
                <div class="cat-row">
                    <span class="cat-name">${cat}</span>
                    <div class="cat-bar-track">
                        <div class="cat-bar-fill" style="width:0%;background:${color}" data-target="${pct}"></div>
                    </div>
                    <span class="cat-score">${data.correct}/${data.total}</span>
                </div>`;
        }
        catBreakdown.innerHTML = html;

        // Animate bars
        setTimeout(() => {
            catBreakdown.querySelectorAll('.cat-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.target + '%';
            });
        }, 400);
    }

    // ---- REVIEW ----
    function buildReview() {
        const letters = ['A', 'B', 'C', 'D'];
        const strip = s => s.replace(/<[^>]*>/g, '');

        let html = '';
        history.forEach((h, i) => {
            const q = QUESTIONS[h.qIdx];
            html += `<div class="rv-item ${h.isCorrect ? 'rv-correct' : 'rv-wrong'}">
                <div class="rv-q"><span class="rv-n">#${i + 1}</span>${strip(q.question)}</div>
                <div class="rv-a">`;
            if (h.isCorrect) {
                html += `<strong>✓ ${letters[h.correct]}. ${strip(q.options[h.correct])}</strong>`;
            } else {
                html += `<span class="rv-wrong-pick">✗ ${letters[h.selected]}. ${strip(q.options[h.selected])}</span>`;
                html += `<strong>→ ${letters[h.correct]}. ${strip(q.options[h.correct])}</strong>`;
            }
            html += `</div></div>`;
        });
        reviewList.innerHTML = html;
    }

    btnToggleReview.addEventListener('click', () => {
        const open = reviewList.style.display !== 'none';
        reviewList.style.display = open ? 'none' : 'block';
        btnToggleReview.classList.toggle('open');
    });

    // ---- START / RETRY ----
    btnStart.addEventListener('click', startQuiz);
    btnRetry.addEventListener('click', startQuiz);

    function startQuiz() {
        currentIdx = 0;
        score = 0;
        history = [];
        ringArc.style.strokeDashoffset = 351.86;
        showScreen(quizScreen);
        renderQuestion();
    }

    // ---- KEYBOARD ----
    document.addEventListener('keydown', e => {
        if (!quizScreen.classList.contains('active')) return;

        const map = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
        const k = e.key.toLowerCase();

        if (k in map && !answered) handleAnswer(map[k]);
        if ((k === 'enter' || k === ' ') && answered) { e.preventDefault(); btnNext.click(); }
    });

})();
