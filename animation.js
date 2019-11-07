
let globalID = 0;
let finalPosition = 75; // vh
let xPos = 0;
let angle = 0;
//let start = new Date;

const fadeAndDown = (location, time, elementID, duration) => {
        
        let pos = location; // 0
        let setTime = time;
        let elemID = elementID;
        let start = new Date;

        //document.getElementById(elemID).style.opacity = '1';
      
        if (pos == finalPosition || pos > finalPosition ) {
          document.getElementById(elemID).style.opacity = '0';
          stopMove(globalID);
        } else {
          setTimeout(() => {
      
            if (pos >= 30) { //Fade
              let _time = new Date - start;
              if(_time < duration) {
                document.getElementById(elemID).style.opacity = 1 - _time / duration;
                
              } else {
                document.getElementById(elemID).style.opacity = '0';
              }
            } else {
              document.getElementById(elemID).style.opacity = '1';
            }
      
            pos++;
            xPos = Math.round(50 * Math.sin(angle));
            angle += .1;
            
            document.getElementById(elemID).style.top = pos + 'vh';
            document.getElementById(elemID).style.transform = `translateX(${xPos}px)`;
          
            if (angle > 2 * Math.PI) {
                angle = 0;
            }
      
            globalID = requestAnimationFrame(fadeAndDown(pos, setTime, elemID, duration));
          }, setTime)
      
        }
      
    }

const stopMove = (ID) => {
        console.log('stopMove()');
        cancelAnimationFrame(ID);
    }

// const fade = (elemID, duration) => {
//     let start = new Date;
//     (next = () => {
//         let time = new Date - start;
//         if(time < duration) {
//             document.getElementById(elemID).style.opacity = 1 - time / duration;
//             requestAnimationFrame(next());
//         } else {
//             document.getElementById(elemID).style.opacity = '0';
//         }
//     })();
//     }
      
