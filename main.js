// ==UserScript==
// @name       Amazon Order Page
// @version    1.0
// @description  Some useful tool for the order page.
// @match      https://sellercentral.amazon.com/gp/orders-v2/details*
// @copyright  2015, Ben Lamm
// @grant    GM_setClipboard
// @grant  GM_setValue
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

$( document ).ready(function(){
var debug = true;
 $(".data-display-field:first").css("font-size","14px");

function copyAddress(){
  var rawAddress = $(".data-display-field:first").html();
  var addressArray = rawAddress.split("<br>");
    var arrayLength = addressArray.length;
  var name = addressArray[1];
  var street = addressArray[2];
  var city = addressArray[arrayLength-4].replace(/&nbsp;/gi,' ');
  var tempPhone = addressArray[arrayLength-3].split(":");
  var phone = tempPhone[1];

if(debug){
  console.debug(name);
  console.debug(street);
  console.debug(city);
  console.debug(phone);

}

    var addressToPersist = name + ':' + street + ':' + city + ':' + phone;
    GM_setClipboard(addressToPersist);
}


$(".data-display-field:first").append('<br><br><button id="copyAddress">copy address</button>');
var skuNode = $("td.tiny-example:contains('SKU:')").next();
var skuText = skuNode.text();
skuNode.replaceWith("<button id='copySku'>" + skuText + "</button>");

    $("#copyAddress").click(function(){
      copyAddress();
    });

     $("#copySku").click(function(){
      GM_setClipboard(skuText);
    });

});
