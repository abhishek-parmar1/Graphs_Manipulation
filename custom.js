var objArray = [];
var completeObjArray = [];
var firstName = [];
var rating = [];
var feedbackFor = [];
var graph1 = {};

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
        
        graph1 = createGraph1Data(feedbackFor);
        
        console.log(graph1);/////////////////
        
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

function createGraph1Data(feedbackFor){
    var data = {};
    for(var i=0;i<feedbackFor.length;i++)
        {
            if( Object.keys(data).indexOf(feedbackFor[i]) != -1)
                {
                    data[feedbackFor[i]] = data[feedbackFor[i]] + 1;
                }
            else{
                data[feedbackFor[i]] = 1;
            }
        }
    return data;
}