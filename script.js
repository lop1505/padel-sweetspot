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
      sliderLabel: "02 · Spieltyp",
      sliderTitle: "Wo liegst du zwischen Kontrolle und Power?",
      sliderControl: "Kontrolle",
      sliderPower: "Power",
      sliderControlValue: "Kontrolle",
      sliderMixValue: "Mix",
      sliderPowerValue: "Power",
      q2Label: "03 · Spiel-Fokus",
      q2Title: "Was ist dein primärer Fokus?",
      q2RoundTitle: "Kontrolle & Sicherheit",
      q2RoundCopy: "Weniger Fehler, bessere Platzierung.",
      q2TeardropTitle: "Ausgewogen",
      q2TeardropCopy: "Kontrolle behalten, aber mehr Druck machen.",
      q2DiamondTitle: "Attacke & Smash",
      q2DiamondCopy: "Ich will Punkte aktiver beenden.",
      q3Label: "04 · Position",
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
      scoreSignals: "{score} / 4 Signale",
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
      sliderLabel: "02 · Play type",
      sliderTitle: "Where are you between control and power?",
      sliderControl: "Control",
      sliderPower: "Power",
      sliderControlValue: "Control",
      sliderMixValue: "Mix",
      sliderPowerValue: "Power",
      q2Label: "03 · Play focus",
      q2Title: "What is your primary focus?",
      q2RoundTitle: "Control & safety",
      q2RoundCopy: "Fewer mistakes, better placement.",
      q2TeardropTitle: "Balanced",
      q2TeardropCopy: "Keep control while adding more pressure.",
      q2DiamondTitle: "Attack & smash",
      q2DiamondCopy: "I want to finish points more actively.",
      q3Label: "04 · Position",
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
      scoreSignals: "{score} / 4 signals",
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

  const store = {
    get(key, fallback) {
      try { return window.localStorage.getItem(key) || fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); } catch { return; }
    }
  };

  const dom = {};
  const state = {
    lang: store.get("sweetspotLanguage", "de"),
    theme: store.get("sweetspotTheme", getSystemTheme())
  };

  function init() {
    dom.form = document.querySelector("#sweetspotForm");
    dom.languageButtons = document.querySelectorAll(".language-button");
    dom.themeToggle = document.querySelector("#themeToggle");
    dom.themeIcon = document.querySelector("#themeIcon");
    dom.themeText = document.querySelector("#themeText");
    dom.range = document.querySelector("#playstyleRange");
    dom.sliderValue = document.querySelector("#sliderValue");
    dom.resultBadge = document.querySelector("#resultBadge");
    dom.resultScore = document.querySelector("#resultScore");
    dom.resultTitle = document.querySelector("#resultTitle");
    dom.resultDescription = document.querySelector("#resultDescription");
    dom.statShape = document.querySelector("#statShape");
    dom.statSpot = document.querySelector("#statSpot");
    dom.statForgiveness = document.querySelector("#statForgiveness");
    dom.racketStage = document.querySelector("#racketStage");

    if (!dom.form || !dom.racketStage) return;

    dom.languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.lang = button.dataset.lang || "de";
        store.set("sweetspotLanguage", state.lang);
        applyLanguage();
      });
    });

    if (dom.themeToggle) {
      dom.themeToggle.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        store.set("sweetspotTheme", state.theme);
        applyTheme();
      });
    }

    dom.form.addEventListener("change", renderResult);
    dom.form.addEventListener("reset", () => {
      window.setTimeout(() => {
        if (dom.range) dom.range.value = "50";
        renderResult();
      }, 0);
    });

    if (dom.range) {
      dom.range.addEventListener("input", renderResult);
    }

    applyLanguage();
    applyTheme();
    renderResult();
  }

  function text() { return translations[state.lang] || translations.de; }

  function getSystemTheme() {
    try { return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
    catch { return "light"; }
  }

  function applyLanguage() {
    const copy = text();
    document.documentElement.lang = state.lang;
    document.title = copy.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", copy.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = copy[key];
    });

    dom.languageButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === state.lang);
    });

    applyTheme();
    renderResult();
  }

  function applyTheme() {
    const isDark = state.theme === "dark";
    document.documentElement.dataset.theme = state.theme;
    if (dom.themeIcon) dom.themeIcon.textContent = isDark ? "☼" : "☾";
    if (dom.themeText) dom.themeText.textContent = isDark ? text().themeLight : text().themeDark;
    if (dom.themeToggle) dom.themeToggle.setAttribute("aria-pressed", String(isDark));
  }

  function getSelectedValue(name) {
    const selected = dom.form.querySelector('input[name="' + name + '"]:checked');
    return selected ? selected.value : "teardrop";
  }

  function getSliderBias() {
    const value = Number(dom.range ? dom.range.value : 50);
    if (value < 34) return "round";
    if (value > 66) return "diamond";
    return "teardrop";
  }

  function updateSliderText() {
    if (!dom.sliderValue) return;
    const bias = getSliderBias();
    const copy = text();
    if (bias === "round") dom.sliderValue.textContent = copy.sliderControlValue;
    if (bias === "teardrop") dom.sliderValue.textContent = copy.sliderMixValue;
    if (bias === "diamond") dom.sliderValue.textContent = copy.sliderPowerValue;
  }

  function calculateResult() {
    const hit = getSelectedValue("hit");
    const style = getSelectedValue("style");
    const side = getSelectedValue("side");
    const slider = getSliderBias();

    if (hit === "round") {
      return { key: "round", scoreText: text().scoreOffCenter };
    }

    const scores = { round: 0, teardrop: 0, diamond: 0 };
    [hit, style, side, slider].forEach((value) => {
      if (Object.prototype.hasOwnProperty.call(scores, value)) scores[value] += 1;
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const winner = sorted[0][0];
    const score = sorted[0][1];

    if (score >= 2) {
      return { key: winner, scoreText: text().scoreSignals.replace("{score}", String(score)) };
    }

    return { key: "teardrop", scoreText: text().scoreFallback };
  }

  function renderResult() {
    if (!dom.form) return;
    updateSliderText();
    const resultState = calculateResult();
    const result = text().results[resultState.key];
    dom.resultBadge.textContent = result.badge;
    dom.resultScore.textContent = resultState.scoreText;
    dom.resultTitle.textContent = result.title;
    dom.resultDescription.textContent = result.description;
    dom.statShape.textContent = result.shape;
    dom.statSpot.textContent = result.spot;
    dom.statForgiveness.textContent = result.forgiveness;
    dom.racketStage.innerHTML = createRacketSvg(resultState.key, result.label);
  }

  function createRacketSvg(shape, label) {
    const cfg = getRacketConfig(shape);
    const holes = createHoles(cfg);
    return '<svg viewBox="0 0 360 430" class="racket-shadow" role="img" aria-label="' + text().svgLabel + '">' +
      '<defs>' +
      '<linearGradient id="faceGrad" x1="70" y1="20" x2="290" y2="310" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#44444B"/><stop offset=".5" stop-color="#2A2A2E"/><stop offset="1" stop-color="#141416"/></linearGradient>' +
      '<linearGradient id="rimGrad" x1="70" y1="20" x2="290" y2="310" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FAF8F4"/><stop offset=".55" stop-color="#D4CFC8"/><stop offset="1" stop-color="#8D8580"/></linearGradient>' +
      '<linearGradient id="gripGrad" x1="154" y1="250" x2="206" y2="405" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FAF8F4"/><stop offset=".45" stop-color="#D4CFC8"/><stop offset="1" stop-color="#8B817A"/></linearGradient>' +
      '<radialGradient id="spotGrad"><stop offset="0" stop-color="#D9954F" stop-opacity=".95"/><stop offset=".55" stop-color="#C07B3A" stop-opacity=".42"/><stop offset="1" stop-color="#C07B3A" stop-opacity="0"/></radialGradient>' +
      '<pattern id="carbon" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="14" height="14" fill="transparent"/><path d="M0 0H14" stroke="#FAF8F4" stroke-opacity=".045" stroke-width="4"/></pattern>' +
      '</defs>' +
      '<path d="M150 250 C160 266 200 266 210 250 L205 302 C200 330 197 360 200 394 C190 406 170 406 160 394 C163 360 160 330 155 302 Z" fill="url(#gripGrad)"/>' +
      '<path d="M162 306 L198 286 M162 333 L198 313 M162 360 L198 340 M162 387 L198 367" stroke="#0E0E0F" stroke-width="4" opacity=".32" stroke-linecap="round"/>' +
      '<path d="M132 232 C150 253 210 253 228 232" fill="none" stroke="#C07B3A" stroke-width="5" stroke-linecap="round"/>' +
      cfg.face + cfg.innerLine + '<path d="' + cfg.path + '" fill="url(#carbon)" opacity=".9"/>' + holes +
      '<ellipse cx="180" cy="' + cfg.spotY + '" rx="' + cfg.spotRx + '" ry="' + cfg.spotRy + '" fill="url(#spotGrad)" class="copper-glow"/>' +
      '<ellipse cx="180" cy="' + cfg.spotY + '" rx="' + Math.round(cfg.spotRx * .42) + '" ry="' + Math.round(cfg.spotRy * .42) + '" fill="#C07B3A" opacity=".55"/>' +
      '<circle cx="180" cy="' + cfg.spotY + '" r="9" fill="#D9954F"/>' +
      '<text x="180" y="335" text-anchor="middle" class="shape-label">' + label + '</text>' +
      '<text x="180" y="355" text-anchor="middle" fill="#FAF8F4" font-family="DM Mono" font-size="15">' + text().svgText + '</text>' +
      '</svg>';
  }

  function getRacketConfig(shape) {
    if (shape === "round") {
      const p = 'M180 34 C244 34 296 86 296 150 C296 214 244 266 180 266 C116 266 64 214 64 150 C64 86 116 34 180 34Z';
      return { path: p, centerY: 150, rx: 110, ry: 110, spotY: 150, spotRx: 76, spotRy: 76, face: '<path class="racket-face racket-rim" d="' + p + '" fill="url(#faceGrad)" stroke="url(#rimGrad)" stroke-width="8"/>', innerLine: '<path class="edge-line" d="M180 56 C232 56 274 98 274 150 C274 202 232 244 180 244 C128 244 86 202 86 150 C86 98 128 56 180 56Z" fill="none" stroke="#FAF8F4" stroke-width="2"/>' };
    }

    if (shape === "diamond") {
      const p = 'M180 45 C235 45 276 70 294 116 C314 168 278 230 228 270 C208 286 190 301 180 312 C170 301 152 286 132 270 C82 230 46 168 66 116 C84 70 125 45 180 45Z';
      return { path: p, centerY: 154, rx: 104, ry: 118, spotY: 108, spotRx: 78, spotRy: 34, face: '<path class="racket-face racket-rim" d="' + p + '" fill="url(#faceGrad)" stroke="url(#rimGrad)" stroke-width="8"/>', innerLine: '<path class="edge-line" d="M180 67 C222 67 253 86 267 122 C282 161 253 209 214 240 C199 253 186 264 180 271 C174 264 161 253 146 240 C107 209 78 161 93 122 C107 86 138 67 180 67Z" fill="none" stroke="#FAF8F4" stroke-width="2"/>' };
    }

    const p = 'M180 35 C240 35 282 83 286 140 C291 215 233 269 180 310 C127 269 69 215 74 140 C78 83 120 35 180 35Z';
    return { path: p, centerY: 151, rx: 102, ry: 125, spotY: 132, spotRx: 70, spotRy: 46, face: '<path class="racket-face racket-rim" d="' + p + '" fill="url(#faceGrad)" stroke="url(#rimGrad)" stroke-width="8"/>', innerLine: '<path class="edge-line" d="M180 57 C226 57 256 94 260 139 C264 197 218 241 180 271 C142 241 96 197 100 139 C104 94 134 57 180 57Z" fill="none" stroke="#FAF8F4" stroke-width="2"/>' };
  }

  function createHoles(cfg) {
    const holes = [];
    for (let y = 70; y <= 228; y += 24) {
      for (let x = 108; x <= 252; x += 24) {
        const dx = (x - 180) / cfg.rx;
        const dy = (y - cfg.centerY) / cfg.ry;
        if (dx * dx + dy * dy < 0.72) holes.push('<circle class="hole" cx="' + x + '" cy="' + y + '" r="4.6"/>');
      }
    }
    return holes.join('');
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
