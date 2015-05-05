// ==UserScript==
// @name         Target Delete Cards
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://www-secure.target.com/ManageWalletView*
// @grant        none
// ==/UserScript==

$(document).ready(function(){

	var cc_count = $('.payActions').length;
    $('.payActions:first p:eq(2) a').click();
    setTimeout(function(){
    	$('.payment-option-delete').prepend("<span id='cc_count'>There "+
    		"are "+cc_count+" cards left.</span>");
         $('.options button').click();
    }, 2000);
 
});