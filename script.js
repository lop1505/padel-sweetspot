(() => {
  const data = {
    de: { pageTitle:"Padel Sweetspot Selector" },
    en: { pageTitle:"Padel Sweetspot Selector" }
  };

  const dom = {};
  const state = { lang: "de", theme: "light" };

  function init() {
    dom.form = document.querySelector("#sweetspotForm");
    dom.range = document.querySelector("#playstyleRange");
    dom.resultCard = document.querySelector(".result-card");
    dom.resultBadge = document.querySelector("#resultBadge");
    dom.statShape = document.querySelector("#statShape");
    dom.why = document.querySelector("#whyResult");
    dom.share = document.querySelector("#shareButton");

    if (!dom.form) return;

    dom.form.addEventListener("change", render);
    if (dom.range) dom.range.addEventListener("input", render);
    if (dom.share) dom.share.addEventListener("click", share);

    render();
  }

  function selected(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : "teardrop";
  }

  function slider() {
    const v = Number(dom.range ? dom.range.value : 50);
    return v < 34 ? "round" : v > 66 ? "diamond" : "teardrop";
  }

  function calc() {
    const hit = selected("hit");
    const side = selected("side");
    const s = slider();

    if (hit === "round") return "round";

    const m = { round: 0, teardrop: 0, diamond: 0 };
    [hit, side, s].forEach(x => m[x]++);

    return Object.entries(m).sort((a, b) => b[1] - a[1])[0][0];
  }

  function whyText(r) {
    const s = slider();
    const side = selected("side");

    const styleText = s === "round" ? "kontrolliert" : s === "diamond" ? "offensiv" : "ausgewogen";
    const sideText = side === "diamond" ? "linken Seite" : side === "round" ? "rechten Seite" : "flexiblen Rolle";

    return `Du spielst eher ${styleText} und auf der ${sideText} → daher ${r}.`;
  }

  function render() {
    if (dom.resultCard) {
      dom.resultCard.classList.add("update");
      setTimeout(() => dom.resultCard.classList.remove("update"), 200);
    }

    const r = calc();

    if (dom.resultBadge) dom.resultBadge.textContent = r;
    if (dom.statShape) dom.statShape.textContent = r;
    if (dom.why) dom.why.textContent = whyText(r);
  }

  function share() {
    const url = new URL(location.href);
    url.searchParams.set("hit", selected("hit"));
    url.searchParams.set("side", selected("side"));
    url.searchParams.set("style", slider());

    navigator.clipboard.writeText(url.toString());
    if (dom.share) {
      dom.share.textContent = "✓ Copied";
      setTimeout(() => dom.share.textContent = "Share", 1200);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
