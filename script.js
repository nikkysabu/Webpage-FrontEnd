// Get to DOM elements
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");
    
    //Loop through each image element
    optionImages.forEach((image, index) =>{
        image.addEventListener("click",(e)=> {
            image.classList.add("active");

            //Loop through each option image again
            optionImages.forEach((image2, index2) => {
                //If the current index doesn't match the clicked index
                //Remove the "active" class from the option images
                //console.log(index, index2);
                index !==index2 && image2.classList.remove("active");
        });
                //Get the source of the clicked option image
                let imageScr = e.target.querySelector("img").src;
                userResult.src = imageScr;
                //console.log(imageScr);

                // Generate a random number between 0 nd 2
                let randomNumber = Math.floor(Math.random()*3);
                //console.log(randomNumber);
                let cpuImages = ["images/rock.png", "images/paper.png", "images/scissor.png"];
                cpuResult.src = cpuImages[randomNumber];

                // Assign a letter value to CPU result (R for rock, P for Paper, S for Scissor)
                let cpuValue = ["R","P","S"][randomNumber];
                // Assign a letter value to the clicked option (based on index)
                let userValue = ["R","P","S"][index];
                //Create object with all possible outcomes
                let outComes = {
                    RR: "Draw",
                    RP: "System",
                    RS: "You",
                    PP: "Draw",
                    PR: "You",
                    PS: "System",
                    SS: "Draw",
                    SP: "You",
                    SR: "System",
                };

                let outComeValue = outComes[userValue + cpuValue];
                //Display result
                result.textContent = userValue ===cpuValue ? "Match Draw" : `${outComeValue} Won !!`;
                //console.log(outComeValue);



                //console.log(cpuValue,userValue);

        });
    });
