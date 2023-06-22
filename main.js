// console.log( "We Are Live? 👀" )

// Document OBJECT Model ~ The DOM


// const h1OnTheDOM = document.querySelector("h1")
//     console.log( "Did We Get It? 👀: " , h1OnTheDOM )  //

//     h1OnTheDOM.textContent = "10.1 is Lit! 🙌"


    // const h1 = document.querySelector( "h1" )
    // console.log( "Did We Get It? 👀: " , h1 )  //

    // h1.textContent = "10.1 is Lit! 🙌"






const h1ForTitle = document.querySelector("#main-title")
    h1ForTitle.textContent = "10.1 is Lit! 🙌"


const h1ForLessonTopic = document.querySelector("#lesson-topic")
    h1ForLessonTopic.textContent = "Javascript Events"

    // console.log( "Did We Get It? 👀: " , h1ForLessonTopic )  //




    // htmlElementToListenTo.addEventListener("", ()=>{})

    // htmlElementToListenTo.addEventListener("eventType", ()=>{})
    // htmlElementToListenTo.addEventListener("eventType", function(){})

    // htmlElementToListenTo.addEventListener("eventType", (event)=>{})
    // htmlElementToListenTo.addEventListener("eventType", function(event){})


    // when we click -> Change this h1 to red
    h1ForLessonTopic.addEventListener("click", (event)=>{
        console.log("The Event Object: ", event)
        console.log("event.target: ", event.target)

        // h1ForLessonTopic
        event.target.style.color = "red"


    })

    // we target and CLICK the h1 -> to change the image
    h1ForTitle.addEventListener("click", (event)=>{
        const imageOnTheDOM = document.querySelector("img")
            console.log(imageOnTheDOM)
            imageOnTheDOM.src = "assets/memed-batman.gif"
            // imageOnTheDOM.src = "https://25.media.tumblr.com/tumblr_lvnly26VPy1qko4x4o1_500.gif"
    })





    // click on the h2 -> increment the number in the span

    const spanWithLikes = document.querySelector("span")
    let numOfLikes = spanWithLikes.innerText;
        console.log("numOfLikes: " , numOfLikes)
        console.log("type" , typeof numOfLikes)


    // parseInt()
    // let numOfLikes = 0;


    const h2ForLikes = document.querySelector("h2")
        console.log( h2ForLikes )

        h2ForLikes.addEventListener("click", (event)=>{
            spanWithLikes.innerText = numOfLikes++
        })





const h3ForBoxText = document.querySelector("#blank-box-value")
    // h3ForBoxText.textContent = "X"

const ticTacBox = document.querySelector("#blank-box")
    ticTacBox.addEventListener("click", ()=>{

        // if(h3ForBoxText.textContent === ""){
        //     h3ForBoxText.textContent = "X"
        // }

        // if(h3ForBoxText.textContent === "X"){
        //     h3ForBoxText.textContent = "O"
        // }

        // break

    })













