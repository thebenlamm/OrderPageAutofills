$(document).ready(function(){

	var cc_count = $('.payActions').length;
    $('.payActions:first p:eq(2) a').click();
    setTimeout(function(){
    	$('.payment-option-delete').prepend("<span id='cc_count'>There "+
    		"are "+cc_count+" cards left.</span>");
         $('.options button').click();
    }, 2000);
 
});