import reactPostImage from "../images/react-post-9-29.jpg"
import javaScriptLogo from "../images/javascript-logo.png"

let post1Text= `    As part of my coding journey, I decided it was time to create a blog for my website. I used a variety of different tools to accomplish this goal, but the skill I am most proud of learning is the use of hooks, like useState, useParams, and useEffect. I can't wait to create even more new stylish websites using these new tools on my belt.`


export default[
    {
        title:"Creating my React Blog",
        body:post1Text,
        image:reactPostImage,
        date: "September 29, 2022"
    },
    {
        title:"Making Blog Bodies in JavaScript",
        body:"So far this has been one of the most annoying things I have had to accomplish. You would think there would be some sort of easy way to format text before sending it to the DOM. However, it seems that in order to get paragraphs to behave as paragraphs you have to do some serious work.",
        image:javaScriptLogo,
        date: "September 30, 2022"
    }
]