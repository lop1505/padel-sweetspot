(() => {
  const translations = {
    de: {
      pageTitle: "Padel Sweetspot Selector",
      metaDescription: "Finde deinen idealen Padel-Schläger-Sweetspot in Sekunden.",
      themeDark: "Dark",
      themeLight: "Light",
      heroEyebrow: "Padel Racket Tool",
      heroTitle: "Finde deinen echten Padel Sweetspot",
      heroCopy: "Viele Spieler wählen die falsche Schlägerform. Nicht wegen fehlender Technik — sondern weil der Sweetspot nicht zu ihrem Spiel passt.",
      heroCta: "Selector starten",
      whyEyebrow: "Warum das wichtig ist",
      whyTitle: "Dein Schläger sollte dazu passen, wie du wirklich spielst.",
      whyCopy: "Beantworte drei kurze Fragen. Der Selector kombiniert Treffqualität, Spieltyp und Position zu einer visuellen Empfehlung.",
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
      whyResultLabel: "Warum diese Empfehlung?",
      compareSafeLabel: "Sicherer",
      compareBestLabel: "Best Match",
      compareRiskLabel: "Aggressiver",
      footerAuthor: "Built by Patrick Lohmann",
      footerLicense: "MIT License",
      copied: "Kopiert",
      share: "Share",
      scoreOffCenter: "Off-Center-Regel aktiv",
      scoreSignals: "{score} / 3 Signale",
      results: {
        round: { badge: "Rund", title: "Runde Form", shape: "Rund", spot: "zentral & groß", forgiveness: "sehr hoch", label: "Rund", description: "Runde Schläger haben eine nahezu kreisförmige Kopfform mit großem, zentralem Sweetspot. Das macht sie besonders kontrolliert und fehlerverzeihend." },
        teardrop: { badge: "Tropfen", title: "Tropfenform", shape: "Tropfen", spot: "leicht erhöht", forgiveness: "mittel bis gut", label: "Tropfen", description: "Tropfenförmige Schläger sind sichtbar länger als runde Schläger, bleiben aber harmonisch ausgewogen. Der Sweetspot liegt mittelgroß und leicht über der Mitte." },
        diamond: { badge: "Diamant", title: "Diamantform", shape: "Diamant", spot: "hoch & kleiner", forgiveness: "niedriger", label: "Diamant", description: "Diamantförmige Schläger wirken oben breiter und kopflastiger, unten schmaler. Der Sweetspot liegt hoch und quer im oberen Treffbereich — ideal für Power, aber weniger fehlerverzeihend." }
      }
    },
    en: {
      pageTitle: "Padel Sweetspot Selector",
      metaDescription: "Find your ideal padel racket sweetspot in seconds.",
      themeDark: "Dark",
      themeLight: "Light",
      heroEyebrow: "Padel Racket Tool",
      heroTitle: "Find Your Real Padel Sweetspot",
      heroCopy: "Most players choose the wrong racket shape. Not because of skill — but because the sweetspot does not fit their game.",
      heroCta: "Start the Selector",
      whyEyebrow: "Why it matters",
      whyTitle: "Your racket should match how you actually play.",
      whyCopy: "Answer three quick questions. The selector combines your consistency, play type and court position into a visual recommendation.",
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
      whyResultLabel: "Why this recommendation?",
      compareSafeLabel: "Safer",
      compareBestLabel: "Best Match",
      compareRiskLabel: "More aggressive",
      footerAuthor: "Built by Patrick Lohmann",
      footerLicense: "MIT License",
      copied: "Copied",
      share: "Share",
      scoreOffCenter: "Off-center rule active",
      scoreSignals: "{score} / 3 signals",
      results: {
        round: { badge: "Round", title: "Round Shape", shape: "Round", spot: "centered & large", forgiveness: "very high", label: "Round", description: "Round rackets have an almost circular head shape with a large, centered sweetspot. This makes them especially controlled and forgiving." },
        teardrop: { badge: "Teardrop", title: "Teardrop Shape", shape: "Teardrop", spot: "slightly higher", forgiveness: "medium to good", label: "Teardrop", description: "Teardrop rackets are visibly longer than round rackets while staying balanced. The sweetspot is medium-sized and sits slightly above the center." },
        diamond: { badge: "Diamond", title: "Diamond Shape", shape: "Diamond", spot: "high & smaller", forgiveness: "lower", label: "Diamond", description: "Diamond rackets look wider and more head-heavy at the top, while narrowing toward the throat. The sweetspot sits high and horizontally across the upper hitting zone — ideal for power, but less forgiving." }
      }
    }
  };

  const dom = {};
  const state = {
    lang: readStore("sweetspotLanguage", "de"),
    theme: readStore("sweetspotTheme", systemTheme())
  };

  function init() {
    dom.form = document.querySelector("#sweetspotForm");
    dom.langButtons = document.querySelectorAll(".language-button");
    dom.themeToggle = document.querySelector("#themeToggle");
    dom.themeIcon = document.querySelector("#themeIcon");
    dom.themeText = document.querySelector("#themeText");
    dom.range = document.querySelector("#playstyleRange");
    dom.sliderValue = document.querySelector("#sliderValue");
    dom.resultCard = document.querySelector(".result-card");
    dom.resultBadge = document.querySelector("#resultBadge");
    dom.resultScore = document.querySelector("#resultScore");
    dom.resultTitle = document.querySelector("#resultTitle");
    dom.resultDescription = document.querySelector("#resultDescription");
    dom.statShape = document.querySelector("#statShape");
    dom.statSpot = document.querySelector("#statSpot");
    dom.statForgiveness = document.querySelector("#statForgiveness");
    dom.stage = document.querySelector("#racketStage");
    dom.why = document.querySelector("#whyResult");
    dom.share = document.querySelector("#shareButton");
    dom.compareSafe = document.querySelector("#compareSafe strong");
    dom.compareBest = document.querySelector("#compareBest strong");
    dom.compareRisk = document.querySelector("#compareRisk strong");

    if (!dom.form || !dom.stage) return;

    hydrateFromUrl();

    dom.langButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.lang = button.dataset.lang || "de";
        writeStore("sweetspotLanguage", state.lang);
        applyLanguage();
      });
    });

    if (dom.themeToggle) {
      dom.themeToggle.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        writeStore("sweetspotTheme", state.theme);
        applyTheme();
      });
    }

    dom.form.addEventListener("change", render);
    dom.form.addEventListener("reset", () => window.setTimeout(() => { if (dom.range) dom.range.value = "50"; render(); }, 0));
    if (dom.range) dom.range.addEventListener("input", render);
    if (dom.share) dom.share.addEventListener("click", shareResult);

    applyLanguage();
    applyTheme();
    render();
  }

  function copy() { return translations[state.lang] || translations.de; }
  function readStore(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
  function writeStore(key, value) { try { localStorage.setItem(key, value); } catch {} }
  function systemTheme() { try { return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } catch { return "light"; } }

  function applyLanguage() {
    const c = copy();
    document.documentElement.lang = state.lang;
    document.title = c.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", c.metaDescription);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (c[key]) el.textContent = c[key];
    });
    dom.langButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.lang === state.lang));
    applyTheme();
    render();
  }

  function applyTheme() {
    const dark = state.theme === "dark";
    document.documentElement.dataset.theme = state.theme;
    if (dom.themeIcon) dom.themeIcon.textContent = dark ? "☼" : "☾";
    if (dom.themeText) dom.themeText.textContent = dark ? copy().themeLight : copy().themeDark;
    if (dom.themeToggle) dom.themeToggle.setAttribute("aria-pressed", String(dark));
  }

  function selected(name) {
    const el = document.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : "teardrop";
  }

  function sliderBias() {
    const value = Number(dom.range ? dom.range.value : 50);
    if (value < 34) return "round";
    if (value > 66) return "diamond";
    return "teardrop";
  }

  function calculate() {
    const hit = selected("hit");
    const side = selected("side");
    const play = sliderBias();

    if (hit === "round") return { key: "round", score: copy().scoreOffCenter };

    const scores = { round: 0, teardrop: 0, diamond: 0 };
    [hit, side, play].forEach((value) => { if (scores[value] !== undefined) scores[value] += 1; });
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

    return { key: sorted[0][0], score: copy().scoreSignals.replace("{score}", String(sorted[0][1])) };
  }

  function render() {
    if (!dom.form || !dom.stage) return;

    if (dom.resultCard) {
      dom.resultCard.classList.add("update");
      window.setTimeout(() => dom.resultCard.classList.remove("update"), 200);
    }

    const c = copy();
    const play = sliderBias();
    if (dom.sliderValue) dom.sliderValue.textContent = play === "round" ? c.sliderControlValue : play === "diamond" ? c.sliderPowerValue : c.sliderMixValue;

    const result = calculate();
    const r = c.results[result.key];

    dom.resultBadge.textContent = r.badge;
    dom.resultScore.textContent = result.score;
    dom.resultTitle.textContent = r.title;
    dom.resultDescription.textContent = r.description;
    dom.statShape.textContent = r.shape;
    dom.statSpot.textContent = r.spot;
    dom.statForgiveness.textContent = r.forgiveness;
    dom.stage.innerHTML = racketImage(result.key, r.label);
    if (dom.why) dom.why.textContent = whyText(result.key);
    if (dom.compareSafe) dom.compareSafe.textContent = c.results.round.badge;
    if (dom.compareBest) dom.compareBest.textContent = r.badge;
    if (dom.compareRisk) dom.compareRisk.textContent = c.results.diamond.badge;
  }

  function whyText(key) {
    const c = copy();
    const play = sliderBias();
    const side = selected("side");

    if (state.lang === "en") {
      const playText = play === "round" ? "control-oriented" : play === "diamond" ? "power-oriented" : "balanced";
      const sideText = side === "round" ? "right/build-up" : side === "diamond" ? "left/attacking" : "flexible";
      return "You lean " + playText + " and your position is " + sideText + " — that points to " + c.results[key].badge + ".";
    }

    const playText = play === "round" ? "kontrolliert" : play === "diamond" ? "offensiv" : "ausgewogen";
    const sideText = side === "round" ? "rechts/aufbauend" : side === "diamond" ? "links/offensiv" : "flexibel";
    return "Du spielst eher " + playText + " und deine Position ist " + sideText + " — deshalb " + c.results[key].badge + ".";
  }

  function shareResult() {
    const url = new URL(window.location.href);
    url.searchParams.set("hit", selected("hit"));
    url.searchParams.set("side", selected("side"));
    url.searchParams.set("power", dom.range ? dom.range.value : "50");

    const done = () => {
      if (!dom.share) return;
      dom.share.textContent = copy().copied;
      window.setTimeout(() => dom.share.textContent = copy().share, 1400);
    };

    if (navigator.clipboard) navigator.clipboard.writeText(url.toString()).then(done).catch(done);
    else done();
  }

  function hydrateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    ["hit", "side"].forEach((name) => {
      const value = params.get(name);
      if (!value) return;
      const input = document.querySelector('input[name="' + name + '"][value="' + value + '"]');
      if (input) input.checked = true;
    });
    const power = params.get("power");
    if (power && dom.range) dom.range.value = Math.max(0, Math.min(100, Number(power)));
  }

  function racketImage(shape, label) {
    const images = {
      round: "ChatGPT Image 26. Apr. 2026, 20_17_42.png",
      teardrop: "ChatGPT Image 26. Apr. 2026, 20_18_02.png",
      diamond: "ChatGPT Image 26. Apr. 2026, 20_16_56.png"
    };
    const spotClass = "sweetspot-marker sweetspot-marker-" + shape;
    return '<figure class="racket-photo racket-photo-' + shape + '">' +
      '<img src="' + images[shape] + '" alt="' + label + ' padel racket">' +
      '<span class="' + spotClass + '" aria-hidden="true"></span>' +
      '<figcaption><strong>' + label + '</strong><span>Sweetspot</span></figcaption>' +
      '</figure>';
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
