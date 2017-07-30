var objArray = [];
var completeObjArray = [];
var firstName = [];
var rating = [];
var feedbackFor = [];
var graph1 = {};
var graph1ArrayOfObjects = [];
var graph2 = {};

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
        
        graph1ArrayOfObjects = createFromData(graph1)
        
        console.log(graph1);
        
        console.log(graph1ArrayOfObjects);
        
        /* for graph 2
        graph2 = createGraph2DataStructure(graph1);
        
        //graph2 = createGraph2DataValues(graph2);
        
        console.log(graph2);
        */ 
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

function createFromData(graph1){
    var data = [];
    var i =0;
    for(key in graph1){
        data[i] = {
            'x' : key,
            'y' : graph1[key]
        }
        i++;
    }
    return data;
}

/* for graph 2
function createGraph2DataStructure(graph1){
    var data = {};
    for(key in graph1){
        data[key] = {
            '1' : 0,
            '2' : 0,
            '3' : 0,
            '4' : 0,
            '5' : 0
        } 
    }
    return data;
}

function createGraph2DataValues(graph2){
    for(key in graph2){
        for(var i=0;i<feedbackFor.length;i++)
            {
                if(key == feedbackFor[i])
                    {
                        graph2[key][rating[i]] = graph2[key][rating[i]] + 1 ;
                    }
            }
    }
    return graph2;
}
*/
