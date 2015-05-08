// ==UserScript==
// @name       Target Customer Info page
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://www-secure.target.com/checkout_process*
// @copyright  2015+, Benlamm
// ==/UserScript==


$( document ).ready(function(){
    var myDebug = false;

    $("#address-choices .row:first a span").click(function(){
        if(myDebug)
            console.debug("js loaded properly");
        var json = prompt("please paste address here");
        setTimeout(function(){
          populate(json);
      },2000);
    });



    function populateCCInfo(){
        if(myDebug)console.debug("cc pop code");
    }

  function populate(json){
    if(myDebug)
        console.debug("populate();");
    var customer = JSON.parse(json);
    var nameArray = customer.name.split(" ");
    var lastName = nameArray[nameArray.length-1];
    var firstName = customer.name.substr(0, customer.name.indexOf(lastName)-1);

  if(myDebug)console.debug("starting population");
        if(myDebug)console.debug(firstName + " " + lastName);

        $("#firstName").val(firstName);
        $("#lastName").val(lastName);
        $("#address1").val(customer.street);
        $("#city").val(customer.city);
        $("#zipCode").val(customer.zip);
        $("#phone1").val(customer.phone);

        var state;
        if(customer.state.length>2){
            state = getStateCode(customer.state);
        } else {
          state = customer.state.toUpperCase();
        }
        $("#state").val(state);

     }

    function getStateCode(longState){
      var longStateTemp = longState.toLowerCase();
        if(myDebug)console.debug("state to be coded: " + longStateTemp);

        switch (longStateTemp)
      {
                case 'alabama' : return "AL";
                case 'alaska': return 'AK';
                case 'arizona': return 'AZ';
                case 'arkansas': return 'AR';
                case 'california':return 'CA';
                case 'colorado': return 'CO';
                case 'conecticut':return 'CT';
                case 'delware':return 'DE';
                case 'florida':return 'FL';
                case 'georgia': return 'GA';
                case 'hawaii': return 'HI';
                case 'idaho': return 'ID';
                case 'illinois': return "IL";
                case 'indiana': return 'IN';
                case 'iowa': return 'IA';
                case 'kansas':return 'KA';
                case 'kentucky': return 'KY';
                case 'louisiana': return "LA";
                case 'maine': return 'ME';
                case 'maryland': return "MD";
                case 'massachusetts': return 'MA';
                case 'michigan': return 'MI';
                case 'minnesota': return 'MN';
                case 'mississippi': return 'MS';
                case 'missouri': return 'MO';
                case 'montana': return 'MT';
                case 'nebraska': return 'NE';
                case 'nevada': return 'NV';
                case 'new hampshire': return 'NH';
                case 'new jersey': return 'NJ';
                case 'new mexico': return 'NM';
                case 'new york': return "NY";
                case 'north carolina': return 'NC';
                case 'north dakota': return 'ND';
                case 'ohio':return "OH";
                case 'oklahoma': return 'OK';
                case 'oregon': return "OR";
                case 'pennsylvania': return 'PA';
                case 'rhode island': return 'RI';
                case 'south carolina': return 'SC';
                case 'south dakota': return 'SD';
                case 'tennessee': return 'TN';
                case 'texas': return 'TX';
                case 'utah': return 'UT';
                case 'vermont': return 'VT';
                case 'virginia': return 'VA';
                case 'washington': return 'WA';
                case 'west virginia': return 'WV';
                case 'wisconsin': return 'WI';
                case 'wyoming': return 'WY';
            }

    }
});


