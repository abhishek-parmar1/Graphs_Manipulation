var objArray = [];
var datesDict = {};
var graph3Data = [];
var namesDict = {};
var graph4Data = [];

$(document).ready(function(){

    $.getJSON( "http://acadview.getsandbox.com/attendace", function( data ) {
        var apiResponse = data;
        var i=0;
        console.log(apiResponse);
        while(i < apiResponse['result'].length)
            {
                objArray.push(apiResponse['result'][i]);
                i++;
            }
        
        //console.log(objArray);
        
        storeIndividualDates(objArray);    
        
        storeIndividualNames(objArray);
         
    });
});

// graph 3 data retrival
function storeIndividualDates(objArray){
    var dates = [];
    for( var i=0;i<objArray.length;i++)
        {
            var date = objArray[i].start_time.split(" ");
            dates.push(date[0]);
        }

    //console.log(dates);
    
    for(var i=0;i<dates.length;i++)
        {
            if( Object.keys(datesDict).indexOf(dates[i]) != -1)
                {
                    datesDict[dates[i]] = datesDict[dates[i]] + 1;
                }
            else{
                datesDict[dates[i]] = 1;
            }
        }
    
    //console.log(datesDict);
        
    var i=0;
    for(key in datesDict){
        graph3Data[i] = {
            'x' : key,
            'y' : datesDict[key]
        }
        i++;
    }
    
    console.log(graph3Data);
}

// graph4 data retrival
function storeIndividualNames(objArray){
    var names = [];
    for( var i=0;i<objArray.length;i++)
        {
            var name = objArray[i].first_name + " " + objArray[i].last_name ;
            names.push(name);
        }
    
    //console.log(names);

    for(var i=0;i<names.length;i++)
        {
            if( Object.keys(namesDict).indexOf(names[i]) != -1)
                {
                    namesDict[names[i]] = namesDict[names[i]] + 1;
                }
            else{
                namesDict[names[i]] = 1;
            }
        }
    
    //console.log(namesDict);
    
    var i=0;
    for(key in namesDict){
        graph4Data[i] = {
            'x' : key,
            'y' : namesDict[key]
        }
        i++;
    }
    
    console.log(graph4Data);
}




    
    