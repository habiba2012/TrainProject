 class TrainMoving {

     constructor() {

         this.trainPositionOne = document.querySelector('#trainPositionOne');
         this.trainPositionTwo = document.querySelector('#trainPositionTwo');
         this.trainPositionThree = document.querySelector('#trainPositionThree');
         //this.message = document.querySelector('#message');


         this.startBtn = document.querySelector('#start-train');
         this.resetBtn = document.querySelector('#reset-train');
         this.startTrain();
         this.stopTrain();
     }

     //sleep(ms){
     // return new Promise(resolve => setTimeout(resolve, ms));
     //}
     startTrain() {
         this.startBtn.addEventListener("click", () => {
             this.trainMovement(true)
         })
     }

     stopTrain() {
         this.resetBtn.addEventListener("click", () => {
             this.trainMovement(false)
         })
     }

     trainMovement(ride) {
         //One
         let y1 = this.trainPositionOne.offsetTop;
         let x1 = this.trainPositionOne.offsetLeft;
         //this.message = "X: " + x1 + "Y :" + y1;

         if (ride) {
             this.myTime = setInterval(() => {
                 this.speedAndDistance()
             }, 500);
         } else {
             clearInterval(this.myTime)
             this.trainPositionOne.style.left = "310px";
             this.trainPositionOne.style.top = "450px";
         }

         //Two
         let y2 = this.trainPositionTwo.offsetTop;
         let x2 = this.trainPositionTwo.offsetLeft;
         //this.message = "X: " + x2 + "Y :" + y2;

         if (ride) {
             this.myTime = setInterval(() => {
                 this.speedAndDistance()
             }, 500);
         } else {
             clearInterval(this.myTime)
             this.trainPositionTwo.style.left = "680px";
             this.trainPositionTwo.style.top = "700px";
         }

         //Three
         let y3 = this.trainPositionThree.offsetTop;
         let x3 = this.trainPositionThree.offsetLeft;
         //this.message = "X: " + x3 + "Y :" + y3;

         if (ride) {
             this.myTime = setInterval(() => {
                 this.speedAndDistance()
             }, 500);
         } else {
             clearInterval(this.myTime)
             this.trainPositionThree.style.left = "810px";
             this.trainPositionThree.style.top = "700px";
         }

     }

     speedAndDistance() {

         let distance = 1; // Change value to make the train ride a longer distance each time interval
         //console.log(`I moved ${distance} pixels`)

         //Train one(to vestamager)
         let y1 = this.trainPositionOne.offsetTop;
         let x1 = this.trainPositionOne.offsetLeft;

         if (x1 < 575) {

             //y = y + distance;
             x1 = x1 + distance;
             //this.trainPositionOne.style.top = y1 + "px"; // vertical movement
             this.trainPositionOne.style.left = x1 + "px"; // horizontal movement

         } else if (x1 <= 590) {
             y1 = y1 - distance;
             x1 = x1 + distance;
             this.trainPositionOne.style.top = y1 + "px"; // vertical movement
             this.trainPositionOne.style.left = x1 + "px"; // horizontal movement

         } else if (x1 <= 640 && y1 >= 434) {
             x1 = x1 + distance;
             this.trainPositionOne.style.left = x1 + "px"; // horizontal movement

         } else if (x1 <= 678) {

             y1 = y1 + distance;
             x1 = x1 + distance;
             this.trainPositionOne.style.top = y1 + "px"; // vertical movement
             this.trainPositionOne.style.left = x1 + "px"; // horizontal movement


         } else if (x1 >= 679 && y1 <= 695) {

             y1 = y1 + distance;
             //x1 = x1 + distance;
             this.trainPositionOne.style.top = y1 + "px"; // vertical movement
             //this.trainPositionOne.style.left = x1 + "px"; // horizontal movement
         } else {
             console.log("Train has arrived to the destination.");
         }
         //Train two(from vestamager)
         let y2 = this.trainPositionTwo.offsetTop;
         let x2 = this.trainPositionTwo.offsetLeft;

         if (y2 >= 530) {

             y2 = y2 - distance;
             //x2 = x2 + distance;

             this.trainPositionTwo.style.top = y2 + "px"; // vertical movement
             //this.trainPositionOne.style.left = x2 + "px"; // horizontal movement

         } else if (y2 < 530) {
             y2 = y2 - distance;
             x2 = x2 - 1;

             this.trainPositionTwo.style.top = y2 + "px"; // vertical movement
             this.trainPositionTwo.style.left = x2 + "px"; // horizontal movement

         }
         /*else if (x2 > 415) {
                     //y1 = y1 + distance;
                     x2 = x2 + 1;

                     //this.trainPositionOne.style.top = y1 + "px"; // vertical movement
                     this.trainPositionTwo.style.left = x2 + "px"; // horizontal movement
                 }*/ //else if (x < 545 && y1 < 220) {
         //y1 = y1 + distance;
         //x1 = x1 + 1;
         //this.trainPositionTwo.style.top = y1 + "px"; // vertical movement
         //this.trainPositionTwo.style.left = x + "px"; // horizontal movement

         // }
         else {
             console.log("Train has not arraived.");
         }


         //Train three(from lufthavnen)
         let y3 = this.trainPositionThree.offsetTop;
         let x3 = this.trainPositionThree.offsetLeft;

         if (y3 >= 516) {
             y3 = y3 - distance;
             //x3 = x3 - 1;

             this.trainPositionThree.style.top = y3 + "px"; // vertical movement
             // this.trainPositionThree.style.left = x3 + "px"; // horizontal movement
         } else if (y3 > 430 && x3 > 378) {
             y3 = y3 - distance;
             x3 = x3 - 1;

             this.trainPositionThree.style.top = y3 + "px"; // vertical movement
             this.trainPositionThree.style.left = x3 + "px"; // horizontal movement

         } else if (y3 <= 450) {
             y3 = y3 - 1;
             x3 = x3 + distance;

             this.trainPositionThree.style.top = y3 + "px"; // vertical movement
             this.trainPositionThree.style.left = x3 + "px"; // horizontal movement


         } else if (y3 > 480 && x3 > 780) {
             x3 = x3 - distance;

             this.trainPositionThree.style.left = x3 + "px"; // horizontal movement


         } else {
             console.log("Train 3 did not reach to the destination");
         }


     }
 }







 export default TrainMoving