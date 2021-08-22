// ==UserScript==
// @name         MFME Automatic Updating(home)
// @namespace    https://sepicles.net/
// @version      1.1
// @description  MFME Automatic Updating(home)
// @author       sepicles
// @match        https://moneyforward.com/
// @grant        none
// ==/UserScript==

(function () {
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.code === 'Slash') {
            var a_tag = document.getElementsByTagName("a");
            for (var i = 0; i < a_tag.length; i++) {
                if (a_tag[i].textContent == "更新") {
                    a_tag[i].click();
                }
            }
        }
    });
})();
