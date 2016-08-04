// AJAX ROUTINE
// Author: Waqas Ahmed
// Date: 4 August 2016

// Convert serializeArray into SerializeObject for AJAX
// Copied logic & code from 
// http://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
$.fn.serializeObject = function () {
  var o = {} ;
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};


// Callback functions
// Re-define with complete implementation in your code
/*
function successCallBack(data) {};
function failureCallBack(xhr) {};
function completeCallBack() {};
function beforeSendCallBack() { return true;};
*/

function sendAJAX(sMethod, sURL, oData, successCallBack, failureCallBack, completeCallBack, beforeSendCallBack){
    $.ajax({
        method: sMethod,
        url : sURL,
        data: oData,
        beforeSend : function (xhr) {
            if (beforeSendCallBack && (beforeSendCallBack instanceof Object)) {
                beforeSendCallBack();
            }
        }
    }).done(function(data){
        if (successCallBack && (successCallBack instanceof Object)) {
            successCallBack(data);
        }
    }).fail(function(){
        if (failureCallBack && (failureCallBack instanceof Object)) {
            failureCallBack();
        }
    }).always(function(){
        if (completeCallBack && (completeCallBack instanceof Object)) {
            completeCallBack();
        }
    });
    
    return true;
}