(()=>{
const $=s=>document.querySelector(s);
const form=$("#sweetspotForm");
const range=$("#playstyleRange");
const why=$("#whyResult");
const shareBtn=$("#shareButton");

function val(n){const e=document.querySelector(`input[name="${n}"]:checked`);return e?e.value:"teardrop"}
function slider(){const v=+range.value;return v<34?"round":v>66?"diamond":"teardrop"}

function calc(){
const hit=val("hit");
const side=val("side");
const s=slider();
if(hit==="round")return"round";
const m={round:0,teardrop:0,diamond:0};
[hit,side,s].forEach(x=>m[x]++);
return Object.entries(m).sort((a,b)=>b[1]-a[1])[0][0];
}

function whyText(r){
const h=val("hit");const s=slider();const side=val("side");
let styleText = s==="round"?"kontrolliert":s==="diamond"?"offensiv":"ausgewogen";
let sideText = side==="diamond"?"linken":"rechten";
return `Du spielst eher ${styleText} und auf der ${sideText} Seite → daher ${r}.`;
}

function render(){
const r=calc();
$("#resultBadge").textContent=r;
$("#statShape").textContent=r;
why.textContent=whyText(r);

// compare
$("#compareBest strong").textContent=r;
$("#compareSafe strong").textContent="round";
$("#compareRisk strong").textContent="diamond";
}

range.addEventListener("input",render);
form.addEventListener("change",render);

shareBtn.addEventListener("click",()=>{
const url=new URL(location.href);
url.searchParams.set("hit",val("hit"));
url.searchParams.set("side",val("side"));
url.searchParams.set("style",slider());
navigator.clipboard.writeText(url.toString());
shareBtn.textContent="Copied";
setTimeout(()=>shareBtn.textContent="Share",1500);
});

document.addEventListener("DOMContentLoaded",render);
})();
