canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 100 ;
rover_height = 90 ;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 
function add(){
background_imageTag = new Image()
background_imageTag.onload = uploadBackground
background_imageTag.src = background_image 

rover_imageTag = new Image()
rover_imageTag.onload = uploadrover
rover_imageTag.src = rover_image 



}
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

//Create "uploadBackground()" function.
   function uploadBackground(){
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height)
   }                           
                                         //Draw image of background

//Create "uploadrover()" function.
function uploadrover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height)
       } 
                                        //Draw image of rover


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
	if(keyPressed=='38'){
up()
    }
    if(keyPressed=='40'){
        down()
            }
            if(keyPressed=='39'){
                right()
                    }
                    if(keyPressed=='37'){
                        left()
                            }
     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
	
    if (rover_y > 0){
    rover_y = rover_y - 10 ;
    uploadBackground() ;
    uploadrover() ;
   
    
    }
    
    
    
    
    
    }


function down(){
    if (rover_y < 500){
        rover_y = rover_y + 10 ;
       
        uploadBackground() ;
        uploadrover() ;
        }	
}
function right(){
    if (rover_x < 700){
        rover_x = rover_x + 10 ;
        uploadBackground() ;
        uploadrover() ;
        
        
        }	
}
function left(){
    if (rover_x > 0){
        rover_x = rover_x - 10 ;
        uploadBackground() ;
        uploadrover() ;
       
        
        }		
}



