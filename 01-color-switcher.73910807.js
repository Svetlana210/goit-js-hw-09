const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let r=null;t.startBtn.addEventListener("click",(()=>{t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),r=setInterval((()=>{e(),t.body.style.backgroundColor=e()}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled",!0),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.73910807.js.map
