
/* for https://www.costco.com/CheckoutShippingView* */


$( document ).ready(function(){
	console.debug("js loaded properly");
    
    var customerInfo = prompt("please paste address here");
    
    setTimeout(function(){
        populate(customerInfo);
    },2000);
	/* FOR TESTING ONLY
	 * $("#myButton").click(function(){
		populate();
	})
    */
	
	function populate(customerInfo){
		console.debug("populate();");
		//var customerInfo = prompt("paste address below:");
		//var customerInfo = "Jennifer Chatelle:5 HAYFIELD LN:HOLDEN, MA 01520-2185:5084142051";
		var customerInfoArray = customerInfo.split(":");
		
		//NAME
		var nameArray = customerInfoArray[0].trim().split(" ");
		var firstName=nameArray[0];
		
		var lastName;
		if(nameArray.length==1){
			lastName=nameArray[0];
		}else{
			for(var i=1;i<nameArray.length-1;i++)
				firstName+=nameArray[i];
			lastName=nameArray[nameArray.length-1];
		}
		
		//STREET ADDRESS
		var street = customerInfoArray[1].trim();
		
		//CITY, STATE ZIP
		var city, state, zip;
		var cityArray = customerInfoArray[2].split(",");
		city = cityArray[0].trim();
		var state_zip = cityArray[1];
		var index = state_zip.search(/\d/);
		state = state_zip.substring(0, index-1).trim();
		zip = state_zip.substring(index-1).trim();
		
		//PHONE
		var phone  = customerInfoArray[3].trim();
		
		//NICKNAME
		var nick = lastName+"_"+get_date();
		console.debug("starting population");
        console.debug(firstName + " " + lastName);
		$("#addressFormInlineFirstName").val(firstName);
		$("#addressFormInlineMiddleInitial").val("");
		$("#addressFormInlineLastName").val(lastName);
		$("#addressFormInlineAddressLine1").val(street);
		$("#addressFormInlineCity").val(city);
		$("#addressFormInlineState").val(state);
		$("#addressFormInlineZip").val(zip);
		$("#addressFormInlinePhoneNumber").val(phone);
		$("#addressFormInlineAddressNickName").val(nick);
    }
	
	function get_date(){
		var d = new Date();
		var date = d.getDate().toString();
		var new_date = date+1;
		var month = d.getMonth().toString();
		return month+"_"+date;
	}
});