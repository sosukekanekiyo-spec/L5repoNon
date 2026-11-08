$(document).ready(function(){

    //create variables for each part of the caterpillar

    //tail
    var caterpillar_tail = $("#tail");

    //head
    var caterpillar_head = $("#head");

    //whole caterpillar (head +tail)
    var cate = $("#caterpillar");


    //create a function for animating the caterpillar
    function animate() {
        //create a for loop that runs 20 times
        for (var i = 1; i <21; i++) {
            cate.animate(
                {width: '100px'}, //property we want to animatae as keyframe
                'fast' //speed we want to animate as keyframe
            ).animate(
                {width: '50px', 'margin-left': 50 * i + 'px'},
                'fast'
            )
        }
    }

    //create an event for the animate button to run the animate event

    //create a variable for the button
    var animate_button = $("#animator");

    //apply a click event with a funtion that calls the animate function
    animate_button.click(function() {animate()});
});