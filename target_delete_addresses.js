$( document ).ready(function(){
    var n = $("div.allAddressWraper div.box").length;
	$("div.allAddressWraper div.box:first div.inner div.addressActions p:nth-child(3) a").click();
	setTimeout(function(){
        $("#delete-address-header").append('<br><span style="font-size:12px;">There are '+ n +' addresses left. This should take about '+ (n*4)/60 +' more minutes.</span>');
		$("#DELETE_ADDRESS_CONFIRM").click();
	}, 2000);
});