// ==UserScript==
// @name         MFME Automatic Updating(accounts)
// @namespace    https://sepicles.net/
// @version      1.0
// @description  MFME Automatic Updating(accounts)
// @author       sepicles
// @match        https://moneyforward.com/accounts
// @grant        none
// ==/UserScript==

(function () {
    var input_tag = document.getElementsByTagName("input");
    for (var i = 0; i < input_tag.length; i++) {
        if (input_tag[i].value == "更新") {
            input_tag[i].click();
        }
    }
})();
