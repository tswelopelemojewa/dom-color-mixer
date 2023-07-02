// assigning max values for the colors
let redish = 255;
let greenish = 255;
let bluish = 255;

//the mixed color output
outPutColor = () => {
    document.getElementById("ColorRGB").innerHTML = `(${redish}, ${greenish}, ${bluish})`;

    if (redish < 120 || greenish < 120 || bluish < 120 ){
        document.getElementById("ColorRGB").style.color = "rgb(255, 255,255)";
        document.getElementById("RGB").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("ColorRGB").style.color = "rgb(0, 0, 0)";
        document.getElementById("RGB").style.color = "rgb(0, 0, 0)";
    }
}

// red color setUp

// increment function
redPlus = () => { 
    document.getElementById("redVal").innerHTML = redish += 1;
    document.getElementById("red").style.backgroundColor = `rgb(${redish}, 0, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();

    // change the font color when the redish color becomes dimmer
    if(redish < 100)
    {
        document.getElementById("redVal").style.color = "rgb(255, 255,255)";
        document.getElementById("red-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("redVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("red-heading").style.color = "rgb(0, 0, 0)";
    }
    
    //hide max and addition buttons when red is at max
    if (redish < 255)
        {
            document.getElementById("subRed").style.visibility = "initial";
            document.getElementById("minRed").style.visibility = "initial";   
        }
        else{
            document.getElementById("plusRed").style.visibility = "hidden";
            document.getElementById("maxRed").style.visibility = "hidden";
        }
 }

//  decrement function

 redMinus = () => {

    // reduce the redish color by 1
    document.getElementById("redVal").innerHTML = redish -= 1;
    document.getElementById("red").style.backgroundColor = `rgb(${redish}, 0,  0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
    
    //change the font color to white when the div color is dimmer else leave is as black 
    if(redish < 100){
        document.getElementById("redVal").style.color = "rgb(255, 255,255)";
        document.getElementById("red-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("redVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("red-heading").style.color = "rgb(0, 0, 0)";
    }

    // hide the min and minus button when the red color is at min(0)
    if (redish <= 0)
        {   
            document.getElementById("subRed").style.visibility = "hidden";
            document.getElementById("minRed").style.visibility = "hidden";   
        }else{
            document.getElementById("plusRed").style.visibility = "initial";
            document.getElementById("maxRed").style.visibility = "initial";
        }
}

// hide the max and plus when the page loads
if(redish == 255){
    document.getElementById("plusRed").style.visibility = "hidden";
    document.getElementById("maxRed").style.visibility = "hidden";
    document.getElementById("subRed").style.visibility = "initial";
    document.getElementById("minRed").style.visibility = "initial";
} else {
    document.getElementById("plusRed").style.visibility = "initial";
    document.getElementById("maxRed").style.visibility = "initial";
}

// amx function that set red to 255
setMax = () => { 
    // set the red Value to maximum
    document.getElementById("redVal").innerHTML = redish = 255;
    document.getElementById("red").style.backgroundColor = `rgb(${redish}, 0, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();

    // hide max and addition button when max is pressed
    if(redish == 255){
        document.getElementById("plusRed").style.visibility = "hidden";
        document.getElementById("maxRed").style.visibility = "hidden";
        document.getElementById("subRed").style.visibility = "initial";
        document.getElementById("minRed").style.visibility = "initial";
    } else {
        document.getElementById("plusRed").style.visibility = "initial";
        document.getElementById("maxRed").style.visibility = "initial";
    }
}

// set the red value to half (127)

setHalf = () => { 
    document.getElementById("redVal").innerHTML = redish = 127;
    // allow the hidden buttons to show
    document.getElementById("plusRed").style.visibility = "initial";
    document.getElementById("maxRed").style.visibility = "initial";
    document.getElementById("subRed").style.visibility = "initial";
    document.getElementById("minRed").style.visibility = "initial";
    document.getElementById("red").style.backgroundColor = `rgb(${redish}, 0, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
 }


//  sets the red color to 0 (turn the div black)
setMin = () => { 
    document.getElementById("redVal").innerHTML = redish = 0;
    document.getElementById("red").style.backgroundColor = `rgb(${redish}, 0, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
    
    // change the text on the red Div to white for contrast
    if(redish < 100){
        document.getElementById("redVal").style.color = "rgb(255, 255,255)";
        document.getElementById("red-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("redVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("red-heading").style.color = "rgb(0, 0, 0)";
    }

    // hide the min and subtract buttons when they reach 0
    if(redish == 0){
        document.getElementById("subRed").style.visibility = "hidden";
        document.getElementById("minRed").style.visibility = "hidden"; 
        document.getElementById("plusRed").style.visibility = "initial";
        document.getElementById("maxRed").style.visibility = "initial";
    }
}

// adding click event to the button by ID 
document.getElementById("plusRed").addEventListener("click", redPlus);
document.getElementById("subRed").addEventListener("click", redMinus);
document.getElementById("maxRed").addEventListener("click", setMax);
document.getElementById("halfRed").addEventListener("click", setHalf);
document.getElementById("minRed").addEventListener("click", setMin);

/* end of red set up */

/* start of green set up */
// adding 1 to the greenish color
greenPlus = () => { 
    document.getElementById("greenVal").innerHTML = greenish += 1;
    document.getElementById("green").style.backgroundColor = `rgb(0, ${greenish}, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();

    if(greenish < 100){
        document.getElementById("greenVal").style.color = "rgb(255, 255,255)";
        document.getElementById("green-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("greenVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("green-heading").style.color = "rgb(0, 0,0)";
    }


    //
    if (greenish < 255)
        {
            document.getElementById("subGreen").style.visibility = "initial";
            document.getElementById("minGreen").style.visibility = "initial";   
        }
        else{
            document.getElementById("plusGreen").style.visibility = "hidden";
            document.getElementById("maxGreen").style.visibility = "hidden";
        }
 }

greenMinus = () => { document.getElementById("greenVal").innerHTML = greenish -= 1;
    document.getElementById("green").style.backgroundColor = `rgb(0, ${greenish}, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();

    if(greenish < 100){
        document.getElementById("greenVal").style.color = "rgb(255, 255,255)";
        document.getElementById("green-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("greenVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("green-heading").style.color = "rgb(0, 0,0)";
    }

    if (greenish <= 0)
        {   
            document.getElementById("subGreen").style.visibility = "hidden";
            document.getElementById("minGreen").style.visibility = "hidden";   
        }else{
            document.getElementById("plusGreen").style.visibility = "initial";
            document.getElementById("maxGreen").style.visibility = "initial";
        }
}

if(greenish == 255){
    document.getElementById("plusGreen").style.visibility = "hidden";
    document.getElementById("maxGreen").style.visibility = "hidden";
    document.getElementById("subGreen").style.visibility = "initial";
    document.getElementById("minGreen").style.visibility = "initial";
} else {
    document.getElementById("plusGreen").style.visibility = "initial";
    document.getElementById("maxGreen").style.visibility = "initial";
}

setMax = () => { 
    document.getElementById("greenVal").innerHTML = greenish = 255;
    document.getElementById("green").style.backgroundColor = `rgb(0, ${greenish}, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
    
    if(greenish == 255){
        document.getElementById("plusGreen").style.visibility = "hidden";
        document.getElementById("maxGreen").style.visibility = "hidden";
        document.getElementById("subGreen").style.visibility = "initial";
        document.getElementById("minGreen").style.visibility = "initial";
    } else {
        document.getElementById("plusGreen").style.visibility = "initial";
        document.getElementById("maxGreen").style.visibility = "initial";
    }
    
}
setHalf = () => { 
    document.getElementById("greenVal").innerHTML = greenish = 127;
    
    document.getElementById("plusGreen").style.visibility = "initial";
    document.getElementById("maxGreen").style.visibility = "initial";
    document.getElementById("subGreen").style.visibility = "initial";
    document.getElementById("minGreen").style.visibility = "initial";
    document.getElementById("green").style.backgroundColor = `rgb(0, ${greenish}, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
 }


setMin = () => { 
    document.getElementById("greenVal").innerHTML = greenish = 0;
    document.getElementById("green").style.backgroundColor = `rgb(0, ${greenish}, 0)`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
    
    if(greenish < 100){
        document.getElementById("greenVal").style.color = "rgb(255, 255,255)";
        document.getElementById("green-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("greenVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("green-heading").style.color = "rgb(0, 0, 0)";
    }

    if(greenish == 0){
        document.getElementById("subGreen").style.visibility = "hidden";
        document.getElementById("minGreen").style.visibility = "hidden"; 
        document.getElementById("plusGreen").style.visibility = "initial";
        document.getElementById("maxGreen").style.visibility = "initial";
    }
}

document.getElementById("plusGreen").addEventListener("click", greenPlus);
document.getElementById("subGreen").addEventListener("click", greenMinus);
document.getElementById("maxGreen").addEventListener("click", setMax);
document.getElementById("halfGreen").addEventListener("click", setHalf);
document.getElementById("minGreen").addEventListener("click", setMin);



bluePlus = () => { 
    document.getElementById("blueVal").innerHTML = bluish += 1;
    document.getElementById("blue").style.backgroundColor = `rgb(0, 0 , ${bluish})`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();

    if(bluish < 100){
        document.getElementById("blueVal").style.color = "rgb(255, 255,255)";
        document.getElementById("blue-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("blueVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("blue-heading").style.color = "rgb(0, 0, 0)";
    }

    //
    if (bluish < 255)
        {
            document.getElementById("subBlue").style.visibility = "initial";
            document.getElementById("minBlue").style.visibility = "initial";   
        }
        else{
            document.getElementById("plusBlue").style.visibility = "hidden";
            document.getElementById("maxBlue").style.visibility = "hidden";
        }
 }

blueMinus = () => { document.getElementById("blueVal").innerHTML = bluish -= 1;
    document.getElementById("blue").style.backgroundColor = `rgb(0, 0, ${bluish})`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();

    if(bluish < 100){
        document.getElementById("blueVal").style.color = "rgb(255, 255,255)";
        document.getElementById("blue-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("blueVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("blue-heading").style.color = "rgb(0, 0, 0)";
    }

    if (bluish <= 0)
        {   
            document.getElementById("subBlue").style.visibility = "hidden";
            document.getElementById("minBlue").style.visibility = "hidden";   
        }else{
            document.getElementById("plusBlue").style.visibility = "initial";
            document.getElementById("maxBlue").style.visibility = "initial";
        }
}


if(bluish == 255){
    document.getElementById("plusBlue").style.visibility = "hidden";
    document.getElementById("maxBlue").style.visibility = "hidden";
    document.getElementById("subBlue").style.visibility = "initial";
    document.getElementById("minBlue").style.visibility = "initial";
} else {
    document.getElementById("plusBlue").style.visibility = "initial";
    document.getElementById("maxBlue").style.visibility = "initial";
}


setMax = () => { 
    document.getElementById("blueVal").innerHTML = bluish = 255;
    document.getElementById("blue").style.backgroundColor = `rgb(0, 0 , ${bluish})`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
    
    if(bluish == 255){
        document.getElementById("plusBlue").style.visibility = "hidden";
        document.getElementById("maxBlue").style.visibility = "hidden";
        document.getElementById("subBlue").style.visibility = "initial";
        document.getElementById("minBlue").style.visibility = "initial";
    } else {
        document.getElementById("plusBlue").style.visibility = "initial";
        document.getElementById("maxBlue").style.visibility = "initial";
    }
    
}
setHalf = () => { 
    document.getElementById("blueVal").innerHTML = bluish = 127;
    
    document.getElementById("plusBlue").style.visibility = "initial";
    document.getElementById("maxBlue").style.visibility = "initial";
    document.getElementById("subBlue").style.visibility = "initial";
    document.getElementById("minBlue").style.visibility = "initial";
    document.getElementById("blue").style.backgroundColor = `rgb(0, 0 , ${bluish})`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
 }


setMin = () => { 
    document.getElementById("blueVal").innerHTML = bluish = 0;
    document.getElementById("blue").style.backgroundColor = `rgb(0, 0 , ${bluish})`;
    document.getElementById("container").style.backgroundColor = `rgb(${redish}, ${greenish}, ${bluish})`;
    outPutColor();
    
    if(bluish < 100){
        document.getElementById("blueVal").style.color = "rgb(255, 255,255)";
        document.getElementById("blue-heading").style.color = "rgb(255, 255,255)";
    }
    else{
        document.getElementById("blueVal").style.color = "rgb(0, 0, 0)";
        document.getElementById("blue-heading").style.color = "rgb(0, 0, 0)";
    }

    if(bluish == 0){
        document.getElementById("subBlue").style.visibility = "hidden";
        document.getElementById("minBlue").style.visibility = "hidden"; 
        document.getElementById("plusBlue").style.visibility = "initial";
        document.getElementById("maxBlue").style.visibility = "initial";
    }
}


document.getElementById("plusBlue").addEventListener("click", bluePlus);
document.getElementById("subBlue").addEventListener("click", blueMinus);
document.getElementById("maxBlue").addEventListener("click", setMax);
document.getElementById("halfBlue").addEventListener("click", setHalf);
document.getElementById("minBlue").addEventListener("click", setMin);


