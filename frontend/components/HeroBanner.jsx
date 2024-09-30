// import React from "react"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"
// import { BiArrowBack } from "react-icons/bi"
// import ProductCard from "./ProductCard"

// const HeroBanner =()=>{
//     return <div className="relative text-white text-[20px] w-full max-w-[1360px] 
//         mx-auto">
            
        

//         <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
//                 <div>
//                 <video autoPlay loop muted playsInline>

//                         <source src="/shoevid.mp4" type="video/mp4"/>
//                         Your browser does not support the video tag.
//                     </video>
//                     <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
//                         bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
//                         text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
//                         Shop Now
//                     </div>
//                 </div>
                

//             </Carousel>


//         </div>
// }

// export default HeroBanner





{/* <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src="/slide-1.png" className="aspect-[16/10] md:aspect-auto object-cover"/>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                        bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop Now
                    </div>
                </div>
                

            </Carousel> */}

            import React from "react";
            import "react-responsive-carousel/lib/styles/carousel.min.css";
            import { Carousel } from "react-responsive-carousel";
            
            const HeroBanner = () => {
                const handleScroll = () => {
                    window.scrollBy({
                        top: window.innerHeight*1.1 , // Adjust this value as needed
                        behavior: "smooth",
                    });
                };
            
                return (
                    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
                        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                            <div>
                                <video autoPlay loop muted playsInline>
                                    <source src="/shoevid.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div
                                    onClick={handleScroll}
                                    className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald
                                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
                                    text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
                                >
                                    Shop Now
                                </div>
                            </div>
                        </Carousel>
                    </div>
                );
            };
            
            export default HeroBanner;
            

            