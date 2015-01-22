$("document").ready(function(){
    $(".blood").css("background-color", "green");
    
    // $('.2').css({'visibility': 'hidden', 'position': 'absolute'});
    
    // $('div:last p:nth-child(3)').css('background-color', 'pink');
    
    // $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOverMe);
    
    // $('h1').bind('click', mouseClick);
    $("div p:first-child").css("background-color", "green");
    
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('div').bind('mouseover',moouseOverMe());
    
    $('h1').bind('click',mouseClick);
    
    $('#show').css('visibility', 'hidden');
    
    $('text').bind('dblclick', hideText);
    
    
});

function hideText(){
    
}

function mouseOverMe(){
    $("h1").html("GRAND THEFT AUTO V");
}

function mouseOutMe(){
    $("h1").html("FRANKLIN CLINTON,MICHEAL TOWNLY,TREVOR PHILIPS");
};

function mouseClick(){
    
};