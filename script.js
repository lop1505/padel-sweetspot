(() => {
  const translations = {
    de: {
      themeDark: "Dark",
      themeLight: "Light",
      pageTitle: "Padel Sweetspot Selector",
      metaDescription: "Finde deinen idealen Padel-Schläger-Sweetspot in Sekunden.",

      heroEyebrow: "Padel Racket Tool",
      heroTitle: "Finde deinen echten Padel Sweetspot",
      heroCopy: "Viele Spieler wählen die falsche Schlägerform. Nicht wegen fehlender Technik — sondern weil der Sweetspot nicht zu ihrem Spiel passt.",
      heroCta: "Selector starten",

      whyEyebrow: "Warum das wichtig ist",
      whyTitle: "Dein Schläger sollte dazu passen, wie du wirklich spielst.",
      whyCopy: "Beantworte drei kurze Fragen. Der Selector kombiniert Treffqualität, Spielstil und Position zu einer visuellen Empfehlung.",

      q1Label: "01 · Treffqualität",
      q1Title: "Wie konstant triffst du den Ball?",
      q1RoundTitle: "Oft unsauber / Off-Center",
      q1RoundCopy: "Ich brauche maximale Fehlerverzeihung.",
      q1TeardropTitle: "Meistens sauber",
      q1TeardropCopy: "Ich treffe gut, aber nicht immer perfekt.",
      q1DiamondTitle: "Sehr konstant",
      q1DiamondCopy: "Ich treffe präzise und kann mehr Risiko nehmen.",

      q2Label: "02 · Spiel-Fokus",
      q2Title: "Was ist dein primärer Fokus?",
      q2RoundTitle: "Kontrolle & Sicherheit",
      q2RoundCopy: "Weniger Fehler, bessere Platzierung.",
      q2TeardropTitle: "Ausgewogen",
      q2TeardropCopy: "Kontrolle behalten, aber mehr Druck machen.",
      q2DiamondTitle: "Attacke & Smash",
      q2DiamondCopy: "Ich will Punkte aktiver beenden.",

      q3Label: "03 · Position",
      q3Title: "Wo spielst du häufiger?",
      q3RoundTitle: "Rechts / Aufbau",
      q3RoundCopy: "Ich kontrolliere Ballwechsel und bereite vor.",
      q3TeardropTitle: "Flexibel / beide Seiten",
      q3TeardropCopy: "Ich brauche ein breites Einsatzfenster.",
      q3DiamondTitle: "Links / offensiver",
      q3DiamondCopy: "Ich spiele öfter Abschluss und Druck.",

      resetButton: "Zurücksetzen",
      logicNote: "Sonderregel: Wenn du oft Off-Center triffst, gewinnt Rund automatisch.",

      statShapeLabel: "Form",
      statSpotLabel: "Sweetspot",
      statForgivenessLabel: "Fehlerverzeihung",

      footerAuthor: "Built by Patrick Lohmann",
      footerLicense: "MIT License",

      scoreOffCenter: "Off-Center-Regel aktiv",
      scoreSignals: "{score} / 3 Signale",
      scoreFallback: "Balance-Fallback",

      svgLabel: "Padel-Schläger mit Sweetspot",
      svgText: "Sweetspot",

      results: {
        round: {
          badge: "Rund",
          title: "Runde Form",
          description: "Runde Schläger haben eine nahezu kreisförmige Kopfform mit großem, zentralem Sweetspot. Das macht sie besonders kontrolliert und fehlerverzeihend.",
          shape: "Rund",
          spot: "zentral & groß",
          forgiveness: "sehr hoch",
          label: "Rund"
        },
        teardrop: {
          badge: "Tropfen",
          title: "Tropfenform",
          description: "Tropfenförmige Schläger sind sichtbar länger als runde Schläger, bleiben aber harmonisch ausgewogen. Der Sweetspot liegt mittelgroß und leicht über der Mitte.",
          shape: "Tropfen",
          spot: "leicht erhöht",
          forgiveness: "mittel bis gut",
          label: "Tropfen"
        },
        diamond: {
          badge: "Diamant",
          title: "Diamantform",
          description: "Diamantförmige Schläger wirken oben breiter und kopflastiger, unten schmaler. Der Sweetspot liegt hoch und quer im oberen Treffbereich — ideal für Power, aber weniger fehlerverzeihend.",
          shape: "Diamant",
          spot: "hoch & kleiner",
          forgiveness: "niedriger",
          label: "Diamant"
        }
      }
    },

    en: {
      themeDark: "Dark",
      themeLight: "Light",
      pageTitle: "Padel Sweetspot Selector",
      metaDescription: "Find your ideal padel racket sweetspot in seconds.",

      heroEyebrow: "Padel Racket Tool",
      heroTitle: "Find Your Real Padel Sweetspot",
      heroCopy: "Most players choose the wrong racket shape. Not because of skill — but because the sweetspot does not fit their game.",
      heroCta: "Start the Selector",

      whyEyebrow: "Why it matters",
      whyTitle: "Your racket should match how you actually play.",
      whyCopy: "Answer three quick questions. The selector combines your consistency, playstyle and court position into a visual recommendation.",

      q1Label: "01 · Shot quality",
      q1Title: "How consistently do you hit the ball?",
      q1RoundTitle: "Often off-center",
      q1RoundCopy: "I need maximum forgiveness.",
      q1TeardropTitle: "Mostly clean",
      q1TeardropCopy: "I hit well, but not perfectly every time.",
      q1DiamondTitle: "Very consistent",
      q1DiamondCopy: "I hit precisely and can take more risk.",

      q2Label: "02 · Play focus",
      q2Title: "What is your primary focus?",
      q2RoundTitle: "Control & safety",
      q2RoundCopy: "Fewer mistakes, better placement.",
      q2TeardropTitle: "Balanced",
      q2TeardropCopy: "Keep control while adding more pressure.",
      q2DiamondTitle: "Attack & smash",
      q2DiamondCopy: "I want to finish points more actively.",

      q3Label: "03 · Position",
      q3Title: "Where do you play more often?",
      q3RoundTitle: "Right side / build-up",
      q3RoundCopy: "I control rallies and set up the point.",
      q3TeardropTitle: "Flexible / both sides",
      q3TeardropCopy: "I need a broad performance window.",
      q3DiamondTitle: "Left side / attacking",
      q3DiamondCopy: "I play more finishing shots and pressure.",

      resetButton: "Reset",
      logicNote: "Special rule: If you often hit off-center, Round wins automatically.",

      statShapeLabel: "Shape",
      statSpotLabel: "Sweetspot",
      statForgivenessLabel: "Forgiveness",

      footerAuthor: "Built by Patrick Lohmann",
      footerLicense: "MIT License",

      scoreOffCenter: "Off-center rule active",
      scoreSignals: "{score} / 3 signals",
      scoreFallback: "Balance fallback",

      svgLabel: "Padel racket with sweetspot",
      svgText: "Sweetspot",

      results: {
        round: {
          badge: "Round",
          title: "Round Shape",
          description: "Round rackets have an almost circular head shape with a large, centered sweetspot. This makes them especially controlled and forgiving.",
          shape: "Round",
          spot: "centered & large",
          forgiveness: "very high",
          label: "Round"
        },
        teardrop: {
          badge: "Teardrop",
          title: "Teardrop Shape",
          description: "Teardrop rackets are visibly longer than round rackets while staying balanced. The sweetspot is medium-sized and sits slightly above the center.",
          shape: "Teardrop",
          spot: "slightly higher",
          forgiveness: "medium to good",
          label: "Teardrop"
        },
        diamond: {
          badge: "Diamond",
          title: "Diamond Shape",
          description: "Diamond rackets look wider and more head-heavy at the top, while narrowing toward the throat. The sweetspot sits high and horizontally across the upper hitting zone — ideal for power, but less forgiving.",
          shape: "Diamond",
          spot: "high & smaller",
          forgiveness: "lower",
          label: "Diamond"
        }
      }
    }
  };

  const storage = {
    get(key, fallback) {
      try {
        return window.localStorage.getItem(key) || fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        return false;
      }
      return true;
    }
  };

  const dom = {};

  const state = {
    lang: storage.get("sweetspotLanguage", "de"),
    theme: storage.get("sweetspotTheme", getSystemTheme())
  };

  function init() {
    dom.form = document.querySelector("#sweetspotForm");
    dom.languageButtons = document.querySelectorAll(".language-button");
    dom.themeToggle = document.querySelector("#themeToggle");
    dom.themeIcon = document.querySelector("#themeIcon");
    dom.themeText = document.querySelector("#themeText");

    dom.resultBadge = document.querySelector("#resultBadge");
    dom.resultScore = document.querySelector("#resultScore");
    dom.resultTitle = document.querySelector("#resultTitle");
    dom.resultDescription = document.querySelector("#resultDescription");
    dom.statShape = document.querySelector("#statShape");
    dom.statSpot = document.querySelector("#statSpot");
    dom.statForgiveness = document.querySelector("#statForgiveness");
    dom.racketStage = document.querySelector("#racketStage");

    if (!dom.form || !dom.themeToggle || !dom.racketStage) {
      return;
    }

    dom.languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.lang = button.dataset.lang || "de";
        storage.set("sweetspotLanguage", state.lang);
        applyLanguage();
      });
    });

    dom.themeToggle.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      storage.set("sweetspotTheme", state.theme);
      applyTheme();
    });

    dom.form.addEventListener("change", renderResult);
    dom.form.addEventListener("reset", () => {
      window.setTimeout(renderResult, 0);
    });

    applyLanguage();
    applyTheme();
    renderResult();
  }

  function copy() {
    return translations[state.lang] || translations.de;
  }

  function getSystemTheme() {
    try {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  }

  function applyLanguage() {
    const text = copy();

    document.documentElement.lang = state.lang;
    document.title = text.pageTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", text.metaDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (text[key]) {
        element.textContent = text[key];
      }
    });

    dom.languageButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === state.lang);
    });

    applyTheme();
    renderResult();
  }

  function applyTheme() {
    const text = copy();
    const isDark = state.theme === "dark";

    document.documentElement.dataset.theme = state.theme;

    if (dom.themeIcon) {
      dom.themeIcon.textContent = isDark ? "☼" : "☾";
    }

    if (dom.themeText) {
      dom.themeText.textContent = isDark ? text.themeLight : text.themeDark;
    }

    if (dom.themeToggle) {
      dom.themeToggle.setAttribute("aria-pressed", String(isDark));
    }
  }

  function getSelectedValue(name) {
    const selected = dom.form.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : "teardrop";
  }

  function calculateResult() {
    const hit = getSelectedValue("hit");
    const style = getSelectedValue("style");
    const side = getSelectedValue("side");

    if (hit === "round") {
      return {
        key: "round",
        scoreText: copy().scoreOffCenter
      };
    }

    const scores = { round: 0, teardrop: 0, diamond: 0 };

    [hit, style, side].forEach((value) => {
      if (Object.prototype.hasOwnProperty.call(scores, value)) {
        scores[value] += 1;
      }
    });

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const winner = sortedScores[0][0];
    const score = sortedScores[0][1];

    if (score >= 2) {
      return {
        key: winner,
        scoreText: copy().scoreSignals.replace("{score}", String(score))
      };
    }

    return {
      key: "teardrop",
      scoreText: copy().scoreFallback
    };
  }

  function renderResult() {
    if (!dom.form) {
      return;
    }

    const { key, scoreText } = calculateResult();
    const result = copy().results[key];

    dom.resultBadge.textContent = result.badge;
    dom.resultScore.textContent = scoreText;
    dom.resultTitle.textContent = result.title;
    dom.resultDescription.textContent = result.description;
    dom.statShape.textContent = result.shape;
    dom.statSpot.textContent = result.spot;
    dom.statForgiveness.textContent = result.forgiveness;
    dom.racketStage.innerHTML = createRacketSvg(key, result.label);
  }

  function createRacketSvg(shape, label) {
    const config = getRacketConfig(shape);
    const holes = createHoles(config);

    return `
      <svg viewBox="0 0 360 430" class="racket-shadow" role="img" aria-label="${copy().svgLabel}">
        <defs>
          <linearGradient id="faceGrad" x1="74" y1="22" x2="286" y2="304" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#4A4A50"/>
            <stop offset=".46" stop-color="#2A2A2E"/>
            <stop offset="1" stop-color="#151517"/>
          </linearGradient>
          <linearGradient id="rimGrad" x1="72" y1="18" x2="288" y2="306" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#FAF8F4"/>
            <stop offset=".48" stop-color="#D4CFC8"/>
            <stop offset="1" stop-color="#8D8580"/>
          </linearGradient>
          <linearGradient id="gripGrad" x1="154" y1="258" x2="206" y2="405" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#FAF8F4"/>
            <stop offset=".35" stop-color="#D4CFC8"/>
            <stop offset="1" stop-color="#8B817A"/>
          </linearGradient>
          <radialGradient id="spotGrad" cx="50%" cy="50%" r="65%">
            <stop offset="0" stop-color="#D9954F" stop-opacity=".88"/>
            <stop offset=".52" stop-color="#C07B3A" stop-opacity=".44"/>
            <stop offset="1" stop-color="#C07B3A" stop-opacity="0"/>
          </radialGradient>
          <pattern id="carbon" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <rect width="14" height="14" fill="transparent"/>
            <path d="M0 0H14" stroke="#FAF8F4" stroke-opacity=".045" stroke-width="4"/>
          </pattern>
        </defs>

        <path d="M160 256 C164 286 164 333 160 394 C171 406 189 406 200 394 C196 333 196 286 200 256Z" fill="url(#gripGrad)"/>
        <path d="M164 305 L196 286 M164 331 L196 312 M164 357 L196 338 M164 383 L196 364" stroke="#0E0E0F" stroke-width="4" opacity=".35" stroke-linecap="round"/>
        <path d="M150 252 C166 264 194 264 210 252" fill="none" stroke="#C07B3A" stroke-width="5" stroke-linecap="round"/>

        ${config.face}
        ${config.innerLine}
        <path d="${config.overlayPath}" fill="url(#carbon)" opacity=".9"/>
        ${holes}

        <ellipse cx="180" cy="${config.spotY}" rx="${config.spotRx}" ry="${config.spotRy}" fill="url(#spotGrad)" class="copper-glow"/>
        <ellipse cx="180" cy="${config.spotY}" rx="${Math.round(config.spotRx * 0.43)}" ry="${Math.round(config.spotRy * 0.43)}" fill="#C07B3A" opacity=".52"/>
        <circle cx="180" cy="${config.spotY}" r="9" fill="#D9954F"/>

        <text x="180" y="335" text-anchor="middle" class="shape-label">${label}</text>
        <text x="180" y="355" text-anchor="middle" fill="#FAF8F4" font-family="DM Mono" font-size="15">${copy().svgText}</text>
      </svg>
    `;
  }

  function getRacketConfig(shape) {
    if (shape === "round") {
      const facePath = "M180 31 C243 31 294 82 294 145 C294 208 243 259 180 259 C117 259 66 208 66 145 C66 82 117 31 180 31Z";
      return {
        spotY: 145,
        spotRx: 76,
        spotRy: 76,
        centerY: 145,
        radiusX: 108,
        radiusY: 108,
        overlayPath: facePath,
        face: `<path class="racket-face racket-rim" d="${facePath}" fill="url(#faceGrad)" stroke="url(#rimGrad)" stroke-width="8"/>`,
        innerLine: '<path class="edge-line" d="M180 53 C231 53 272 94 272 145 C272 196 231 237 180 237 C129 237 88 196 88 145 C88 94 129 53 180 53Z" fill="none" stroke="#FAF8F4" stroke-width="2"/>'
      };
    }

    if (shape === "diamond") {
      const facePath = "M180 28 C224 28 264 51 282 91 C304 140 281 205 230 255 C211 274 193 289 180 302 C167 289 149 274 130 255 C79 205 56 140 78 91 C96 51 136 28 180 28Z";
      return {
        spotY: 98,
        spotRx: 76,
        spotRy: 38,
        centerY: 137,
        radiusX: 98,
        radiusY: 116,
        overlayPath: facePath,
        face: `<path class="racket-face racket-rim" d="${facePath}" fill="url(#faceGrad)" stroke="url(#rimGrad)" stroke-width="8"/>`,
        innerLine: '<path class="edge-line" d="M180 54 C218 54 251 73 266 105 C283 144 263 195 222 235 C205 251 190 264 180 274 C170 264 155 251 138 235 C97 195 77 144 94 105 C109 73 142 54 180 54Z" fill="none" stroke="#FAF8F4" stroke-width="2"/>'
      };
    }

    const facePath = "M180 27 C238 27 278 74 282 132 C287 207 232 261 180 301 C128 261 73 207 78 132 C82 74 122 27 180 27Z";
    return {
      spotY: 122,
      spotRx: 68,
      spotRy: 48,
      centerY: 145,
      radiusX: 100,
      radiusY: 123,
      overlayPath: facePath,
      face: `<path class="racket-face racket-rim" d="${facePath}" fill="url(#faceGrad)" stroke="url(#rimGrad)" stroke-width="8"/>`,
      innerLine: '<path class="edge-line" d="M180 53 C225 53 253 89 256 134 C260 191 217 235 180 268 C143 235 100 191 104 134 C107 89 135 53 180 53Z" fill="none" stroke="#FAF8F4" stroke-width="2"/>'
    };
  }

  function createHoles(config) {
    const holes = [];

    for (let y = 62; y <= 226; y += 24) {
      for (let x = 108; x <= 252; x += 24) {
        const dx = (x - 180) / config.radiusX;
        const dy = (y - config.centerY) / config.radiusY;

        if (dx * dx + dy * dy < 0.72) {
          holes.push(`<circle class="hole" cx="${x}" cy="${y}" r="4.6"/>`);
        }
      }
    }

    return holes.join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
