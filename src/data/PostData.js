import reactPostImage from "../images/react-post-9-29.jpg"
import javaScriptLogo from "../images/javascript-logo.png"

let exampleImage = "https://media.istockphoto.com/photos/concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-picture-id1316134499?b=1&k=20&m=1316134499&s=170667a&w=0&h=DsKKZ2Sc6k7bZQpxZTcHyV7AJqyy-haTXYZlrA2Jy-c="



export default[
    {
        id:1,
        title:"Creating my React Blog",
        body:["As part of my coding journey, I decided it was time to create a blog for my website. I used a variety of different tools to accomplish this goal, but the skill I am most proud of learning is the use of hooks, like useState, useParams, and useEffect. I can't wait to create even more new stylish websites using these new tools on my belt."],
        image:reactPostImage,
        date: "09-29-2022"
    },
    {
        id:2,
        title:"Making Blog Bodies with Js and \"react-markdown\"",
        body:[
            `So far this has been one of the most annoying things I have had to accomplish. You would think there would be some sort of easy way to format text before sending it to the DOM. However, it seems that in order to get paragraphs to behave as paragraphs you have to do some serious work.`,
            "I finally decided that it is easier to just work around the issue by simply making my post bodies into arrays of strings. I could then simply put each string into a different paragraph (<p>) element by using the map function.",
            "I do not necessarily see this as a perfect solution, as I still would like the option of being able to change the layout of the posts on an individual basis. However, for a start I think it will do for a basic blog.",
            `After some thinking and working with the design elements of the blog posts, I realized I could take it a step further by using a tool called **react-markdown**. I installed react-markdown into my project which allowed me to format each of the strings in my body array using simple markdown syntax. Especially because I felt that any good blog post needs a little bit of formatting to be eyecatching.`
            ],
        image:javaScriptLogo,
        date: "10-02-2022"
    },
]