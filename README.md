# ajax-routine-ajax
This is a simple ajax function. It is quite easy to use and can be modified easily as per requirement

# Requirement
Include latest version of Jquery file in your project

# How to use it
Include ajax_routine.js in your project after jquery file was included.

call function: sendAJAX('post', url, {});

Function Arguments: 

1. method (post, get) [required]
2. url (http://google.com) [required]
3. data object ({name: "waqas"}); [required]
4. success callback function [optional] 
5. failure callback function [optional]
6. complete callback function [optional]
7. before send callback function [optional]

# How it will work
I will explain its working via following example(s):

# HTML 
```
<form name="loginForm" id="loginForm">
	<input type="email" name="email" id="email" class="required valid_email" placeholder="Email"/>
	<input type="password" name="password" id="password" class="required" placeholder="Password"/>
	<input type="button" value="Send" id="sendForm"/>
</form>
```

# JS SCRIPT
```

function successCallBack (data) {
	alert('success');
}

function failureCallBack () {
	alert('failure');
}

function completeCallBack () {
	alert('complete');
}

function beforeSendCallBack () {
	alert('beforeSend');
	return true;
}

// Jquery oload function
$(function(){
	// Make sure you have included Jquery library file
	

	$("#sendForm").click(function(){
		// Send form data via AJAX
		var url = $("#loginForm").prop('action');
		sendAJAX('post', url, $("#loginForm").serializeObject(), successCallBack, failureCallBack, completeCallBack, beforeSendCallBack);

	});
});

```
