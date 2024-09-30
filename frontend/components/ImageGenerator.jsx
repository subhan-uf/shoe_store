// // const { useState } = require("react");
// // // import * as OpenAI from "openai";
// // const OpenAI = require('openai');
// // const configuration= new OpenAI.Configuration({
// //     apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN,
// // })

// // const openai= new OpenAI.OpenAIApi(configuration)

// // function image_generation(){
// //     const [image, setImage]= useState("")
// //     const [promt, setPrompt]= useState("")
// //     const [isLoading, setIsLoading]= useState(false)
// //     async function fetchData(){
// //         try{
// //             setIsLoading(true)
// //             const response= await openai.createImage({
// //                 prompt:promt,
// //                 n:1,
// //                 size:"256x256",
// //             })
// //             setImage(response.data.data[0].url)
// //             setIsLoading(false)
// //         } catch(e){
// //             setIsLoading(false)
// //             console.log(e)
// //         }

// //     };
    
    
// //     return(
// //         <div className="App">
// //         <div>
// //             <input onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter your prompt" />
// //             <button onClick={fetchData}>Generate</button>
// //         </div>
// //         <div style={{width: 256, height:256}}>
// //             {isLoading ?(
// //                 <>
// //                     <p>Loading...</p>
// //                     <p>Wait..</p>
// //                 </>
// //             ):(

// //                 <img src={image}/>
// //             )}
            
            
// //         </div>
// //         </div>
// //     )
// // }
// // export default image_generation



// // const { useState } = require("react");
// // const OpenAI = require('openai');

// // function ImageGeneration() {
// //     const [image, setImage] = useState("");
// //     const [prompt, setPrompt] = useState("");
// //     const [isLoading, setIsLoading] = useState(false);

// //     async function fetchData() {
// //         try {
// //             setIsLoading(true);
// //             const response = await OpenAI.createImage({
// //                 prompt: prompt,
// //                 n: 1,
// //                 size: "256x256",
// //                 apiKey: process.env.NEXT_PUBLIC_OPENAI_API_TOKEN,
// //             });
// //             setImage(response.data.data[0].url);
// //             setIsLoading(false);
// //         } catch (e) {
// //             setIsLoading(false);
// //             console.log(e);
// //         }
// //     };

// //     return (
// //         <div className="App">
// //             <div>
// //                 <input onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt" />
// //                 <button onClick={fetchData}>Generate</button>
// //             </div>
// //             <div style={{ width: 256, height: 256 }}>
// //                 {isLoading ? (
// //                     <>
// //                         <p>Loading...</p>
// //                         <p>Wait..</p>
// //                     </>
// //                 ) : (
// //                     <img src={image} alt="Generated" />
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default ImageGeneration;




// const { useState } = require("react");
// const axios = require('axios');

// function ImageGeneration() {
//     const [image, setImage] = useState("");
//     const [prompt, setPrompt] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     async function fetchData() {
//         try {
//             setIsLoading(true);
//             const response = await axios.post('https://api.openai.com/v1/images/generations', {
//                 prompt: prompt,
//                 n: 1,
//                 size: "256x256"
//             }, {
//                 headers: {
//                     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_TOKEN}`,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             setImage(response.data.data[0].url);
//             setIsLoading(false);
//         } catch (e) {
//             setIsLoading(false);
//             console.log(e);
//         }
//     };

//     return (
//         <div className="App">
//             <div>
//                 <input onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt" />
//                 <button onClick={fetchData}>Generate</button>
//             </div>
//             <div style={{ width: 256, height: 256 }}>
//                 {isLoading ? (
//                     <>
//                         <p>Loading...</p>
//                         <p>Wait..</p>
//                     </>
//                 ) : (
//                     <img src={image} alt="Generated" />
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ImageGeneration;
