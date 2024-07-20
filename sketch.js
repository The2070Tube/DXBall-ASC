let screen = "home"
let xPos1 = 0;
let yPos1 = 0; 
let xPos2 = 0; 
let yPos2 = 0;
let xPos3 = 0;
let yPos3 = 0;
let xPos4 = 0;
let yPos4 = 0;
let xPos5 = 0;
let yPos5 = 0;

let barXPos = 250;
let barYPos = 450;
let score = 0;

// Ball Config
let bxSpeed = 3;
let bySpeed = 3;
let bxPos = 200;
let byPos = 250;
let ballSize = 20;

let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;



// bricks

// Brick array add as needed



let brickxPos1 = 50;
let brickyPos1 = 90; 
let brickxPos2 = 100; 
let brickyPos2 = 90;
let brickxPos3 = 150;
let brickyPos3 = 90;
let brickxPos4 = 200;
let brickyPos4 = 90;
let brickxPos5 = 250;
let brickyPos5 = 90;
let brickxPos6 = 50;
let brickyPos6 = 90; 
let brickxPos7 = 100; 
let brickyPos7 = 90;
let brickxPos8 = 150;
let brickyPos8 = 90;
let brickxPos9 = 200;
let brickyPos9 = 90;
let brickxPos10 = 250;
let brickyPos10 = 90;
let brickxPos11 = 50;
let brickyPos11 = 90; 
let brickxPos12 = 100; 
let brickyPos12 = 90;
let brickxPos13 = 150;
let brickyPos13 = 90;
let brickxPos14 = 200;
let brickyPos14 = 90;
let brickxPos15 = 250;
let brickyPos15 = 90;
let brickxPos16 = 50;
let brickyPos16 = 90; 
let brickxPos17 = 100; 
let brickyPos17= 90;
let brickxPos18= 150;
let brickyPos18 = 90;
let brickxPos19 = 200;
let brickyPos19 = 90;
let brickxPos20 = 250;
let brickyPos20 = 250;

let bricks = [
    { x: 200, y: 50, hit: false }, { x: 225, y: 50, hit: false }, { x: 250, y: 50, hit: false }, { x: 275, y: 50, hit: false }, { x: 300, y: 50, hit: false },
    { x: 175, y: 70, hit: false }, { x: 325, y: 70, hit: false },
    { x: 150, y: 90, hit: false }, { x: 175, y: 90, hit: false }, { x: 200, y: 90, hit: false }, { x: 225, y: 90, hit: false }, { x: 250, y: 90, hit: false }, { x: 275, y: 90, hit: false }, { x: 300, y: 90, hit: false }, { x: 325, y: 90, hit: false }, { x: 350, y: 90, hit: false },
    { x: 125, y: 110, hit: false }, { x: 150, y: 110, hit: false }, { x: 175, y: 110, hit: false }, { x: 200, y: 110, hit: false }, { x: 225, y: 110, hit: false }, { x: 250, y: 110, hit: false }, { x: 275, y: 110, hit: false }, { x: 300, y: 110, hit: false }, { x: 325, y: 110, hit: false }, { x: 350, y: 110, hit: false }, { x: 375, y: 110, hit: false },
    { x: 125, y: 130, hit: false }, { x: 150, y: 130, hit: false }, { x: 175, y: 130, hit: false }, { x: 200, y: 130, hit: false }, { x: 225, y: 130, hit: false }, { x: 250, y: 130, hit: false }, { x: 275, y: 130, hit: false }, { x: 300, y: 130, hit: false }, { x: 325, y: 130, hit: false }, { x: 350, y: 130, hit: false }, { x: 375, y: 130, hit: false },
    { x: 150, y: 150, hit: false }, { x: 175, y: 150, hit: false }, { x: 200, y: 150, hit: false }, { x: 225, y: 150, hit: false }, { x: 250, y: 150, hit: false }, { x: 275, y: 150, hit: false }, { x: 300, y: 150, hit: false }, { x: 325, y: 150, hit: false }, { x: 350, y: 150, hit: false },
    { x: 175, y: 170, hit: false }, { x: 200, y: 170, hit: false }, { x: 225, y: 170, hit: false }, { x: 250, y: 170, hit: false }, { x: 275, y: 170, hit: false }, { x: 300, y: 170, hit: false }, { x: 325, y: 170, hit: false },
    { x: 200, y: 190, hit: false }, { x: 225, y: 190, hit: false }, { x: 250, y: 190, hit: false }, { x: 275, y: 190, hit: false }, { x: 300, y: 190, hit: false },
    { x: 225, y: 210, hit: false }, { x: 250, y: 210, hit: false }, { x: 275, y: 210, hit: false },
    { x: 250, y: 230, hit: false }
];



let hearts = 3;


let lmao = barYPos - 9;


// Code for ball bouncing off of the walls




function preload() {
    titleImage = loadImage("images/asc.png");
    gameoverGIF = createImg("images/gameOv.gif"); // Create the image element
    gameoverGIF.hide(); // Hide it initially
}




function setup() {
    createCanvas(500, 500);
    background(0);
    xSpeed = 0;
    ySpeed = 0;
    lotto = random(0, 100);
    if (lotto > 50) {
        xDirection = 1;
    }
    if (lotto < 50) {
        xDirection = -1;
    }
}




function draw() {
    

    if (screen == "home") {
        xPos1 = 250;
        yPos1 = 200; 
        xPos2 = 250; 
        yPos2 = 275;
        xPos3 = 250;
        yPos3 = 350;
        image(titleImage, 150, 5, 220, 220);
    

        fill(255, 255, 0);
        rectMode(CENTER);
        rect(xPos1, yPos1, 200, 40);   //250, 175
        fill(51, 255, 255);
        rectMode(CENTER);
        rect(xPos2, yPos2, 200, 40);
        fill(51, 255, 51)
        rectMode(CENTER);
        rect(xPos3, yPos3, 200, 40);

        fill(0, 0, 0);
        textSize(20);
        let label1 = "Easy Mode";
        let label2 = "Medium Mode";
        let label3 = "Hard Mode";
        text(label1, 200, 200);
        text(label2, 185, 275);
        text(label3, 200, 350);
        fill(255,255,255)
        textSize(12)
        text("Copyright 2024, Circuit Breakers", 10, 490)
        
    }

    if (screen == "game") {
        background(0, 40);

        

        fill(255); // Added code to draw the ball
        ellipse(bxPos, byPos, ballSize, ballSize);

        bxPos += xSpeed * xDirection;
        byPos += ySpeed * yDirection;


     
        if (bxPos < 25 || bxPos > 475) {
           xDirection *= -1;
        }
        // ok ball is good i need you to work on the bricks now @shain
        if (byPos < 25) {
           yDirection *= -1;
        }


        //think about the angles at which the ball hits the bar
        // make xpos values 



        let barLeftEdge = barXPos - 90;
        let barRightEdge = barXPos + 90;
        if (byPos >= barYPos - 9 && byPos <= barYPos && bxPos >= barLeftEdge && bxPos <= barRightEdge) {
            yDirection *= -1;
        }

        

        fill(255,255,255);
        textSize(22);
        text("Score:", 10, 30);
        text(score, 80, 30);


        fill(255,255,255);
        textSize(18);
        text("Hearts Left: ", 10, 490);
        text(hearts, 110, 490);


        if (byPos > 450) {
            hearts -= 1;
            bxPos = 200;
            byPos = 250;
        }

        if (hearts == 0) {
            screen = "game_over";
        }

        

        rectMode(CENTER);
        fill(255, 128, 0);
        rect(barXPos, barYPos, 180, 18);

        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {  // built in function + https://www.toptal.com/developers/keycode
            barXPos -= 3;
        }

        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {  // built in function + https://www.toptal.com/developers/keycode
            barXPos += 3;              // or can do if key === w { y -=1; }
        }


        for (let brick of bricks) {
            if (!brick.hit) {
                fill(255, 0, 0);
                rectMode(CENTER);
                rect(brick.x, brick.y, 50, 20);
        
                // Check for collision
                if (
                    bxPos > brick.x - 25 && bxPos < brick.x + 25 &&
                    byPos > brick.y - 10 && byPos < brick.y + 10
                ) {
                    yDirection *= -1;
                    xDirection *= -1;
                    brick.hit = true;
                    score += 1;
                }
            }
        }


        // Ball

        


    }

    if (screen == "game_over") {
        background(0);
        
        
        gameoverGIF.show(); // Show the GIF
        gameoverGIF.position(20, 100);
        fill(255,255,255);
        textSize(22);
        text("Your Score: ", 10, 30);
        text(score, 140, 30);

        fill(51, 255, 255);
        rectMode(CENTER);
        rect(255, 475, 200, 40);   //250, 175
        let labele1 = "Main Menu";
        fill(0,0,0);
        text(labele1, 200, 475);

        


    }


}


function mouseClicked() {
    if (mouseY > 175 && mouseY < 255 && mouseX > 150 && mouseX < 350) {
      screen = "game";
      xSpeed = 3;
      ySpeed = 3;
      bxPos = 200;
      byPos = 250;
      hearts = 3;
      gameoverGIF.hide();
    }
    if (mouseY > 250 && mouseY < 300 && mouseX > 150 && mouseX < 350) {
      screen = "game";
      xSpeed = 4;
      ySpeed = 4;
      bxPos = 200;
      byPos = 250;
      hearts = 3;
      gameoverGIF.hide();
    }
    if (mouseY > 325 && mouseY < 375 && mouseX > 150 && mouseX < 350) {
      screen = "game";
      xSpeed = 4.5;
      ySpeed = 4.5;
      bxPos = 200;
      byPos = 250;
      hearts = 3;
      gameoverGIF.hide();
    }

    if (mouseX < 355 && mouseX > 155 && mouseY > 455 && mouseY < 495) {
        background(0);
        screen = "home";
        gameoverGIF.hide();

    }


}







    
    



































