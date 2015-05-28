// ==UserScript==
// @name       Amazon Order Page
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://sellercentral.amazon.com/gp/orders-v2/details/*
// @copyright  2012+, You
// @grant    GM_setClipboard
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

$( document ).ready(function(){
var debug = false;

function copyAddress(){
  var rawAddress = $(".data-display-field:first").html();
  var addressArray = rawAddress.split("<br>");

    var addressArrayIndex = 1;

    var name = addressArray[addressArrayIndex];
    addressArrayIndex++;

    var company = '';
    if( ! /^\d+/.test(addressArray[addressArrayIndex]) ){
        company = addressArray[addressArrayIndex];
        addressArrayIndex++;
    }

    var street = addressArray[addressArrayIndex];
    addressArrayIndex++;

    var city_StateZip = addressArray[addressArrayIndex].replace(/&nbsp;/gi,' ').split(',');
    var city = city_StateZip[0];
    var indexOfZip = city_StateZip[1].search(/\d/);
    var state = city_StateZip[1].substr(0, indexOfZip).trim();
    var zip = city_StateZip[1].substr(indexOfZip).trim();
    addressArrayIndex++;

  var tempPhone = addressArray[addressArrayIndex].split(":");
  var phone = tempPhone[1];

    if(debug){
      console.debug(name);
      console.debug(street);
      console.debug(city);
      console.debug(phone);
    }

    var jsonText = '{' +
      '"name":"' + name + '",' +
            '"company":"' + company + '",' +
      '"street":"' + street + '",' +
      '"city":"' + city + '",' +
            '"state":"' + state + '",' +
            '"zip":"' + zip + '",' +
      '"phone":"' + phone + '"' +
    '}';



    GM_setClipboard(jsonText);
}

$(".data-display-field:first").css("font-size","14px");

$(".data-display-field:first").append('<br><br><button id="copyAddress">copy address</button>');
var skuNode = $("td.tiny-example:contains('SKU:')").first().next();
var skuText = skuNode.text();
skuNode.replaceWith("<button id='copySku'>" + skuText + "</button>");


    $("#copyAddress").click(function(){
      copyAddress();
    });

     $("#copySku").click(function(){
      GM_setClipboard(skuText);
    });

});
