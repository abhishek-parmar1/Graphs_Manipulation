var objArray = [];
var completeObjArray = [];
var firstName = [];
var rating = [];
var feedbackFor = [];

$(document).ready(function(){

    $.getJSON( "http://acadview.getsandbox.com/feedback", function( data ) {
        var apiResponse = data;
        var i=0;
        console.log(apiResponse);
        while(i < apiResponse['result'].length)
            {
                objArray.push(apiResponse['result'][i]);
                i++;
            }
        completeObjArray = remove_duplicates(objArray);
        
        storeIndividualDetails(completeObjArray);
        
        console.log(firstName);
        console.log(feedbackFor);
        console.log(rating);
    });
    
    
    
    
});
    
function remove_duplicates(objArray) {
    var newArray = [];
    newArray.push(objArray[0]);
    for(var i=0;i<objArray.length;i++)
        {
            var flag = true;
            for(j=0;j<newArray.length;j++)
                {
                    if(objArray[i].first_name == newArray[j].first_name && objArray[i].feedback_for == newArray[j].feedback_for && objArray[i].rating == newArray[j].rating)
                        {
                            flag = false;
                            break;
                        }
                }
            if(flag)
            {
                newArray.push(objArray[i]);
            }
        }
    return newArray;
}

function storeIndividualDetails(completeObjArray){
    for(var i=0;i<completeObjArray.length;i++){
        firstName.push(completeObjArray[i].first_name);
        feedbackFor.push(completeObjArray[i].feedback_for);
        rating.push(completeObjArray[i].rating);
    }

}
