
/* for https://www.costco.com/CheckoutShippingView* */


$( document ).ready(function(){

    var customerInfo = prompt("please paste address here");

    setTimeout(function(){
        populate(customerInfo);
    },2000);
	/* FOR TESTING ONLY
	 * $("#myButton").click(function(){
		populate();
	})
    */

	function populate(json){
		var customer = JSON.parse(json);
    var nameArray = customer.name.split(" ");

		var firstName=nameArray[0];

		var lastName;
		if(nameArray.length==1){
			lastName=nameArray[0];
		}else{
			for(var i=1;i<nameArray.length-1;i++)
				firstName+=nameArray[i];
			lastName=nameArray[nameArray.length-1];
		}

		var nick = lastName+"_"+get_date();

		$("#addressFormInlineFirstName").val(firstName);
		$("#addressFormInlineMiddleInitial").val("");
		$("#addressFormInlineLastName").val(lastName);
		$("#addressFormInlineAddressLine1").val(customer.street);
		$("#addressFormInlineCity").val(customer.city);
		$("#addressFormInlineState").val(customer.state);
		$("#addressFormInlineZip").val(customer.zip);
		$("#addressFormInlinePhoneNumber").val(customer.phone);
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
