// import React from "react"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import ShoeModelWithCanvas from "./ShoeModelWithCanvas.jsx"


// const ProductDetailsCarousel = ({images}) =>{
//     const handleModelInteraction = (e) => {
//         e.stopPropagation();  // Prevent the carousel from swiping when interacting with the model
//       };
    
//     console.log("LETTER ", images.model.data.attributes.url)
//     return(

//      <>
 









//     <div className="text-white text-[20px] w-full max-w-[1360px] 
//       mx-auto sticky top-[50px]">
         
//         <Carousel
//             thumbWidth={60}
            
//             className="productCarousel"
//             >
//                 <ShoeModelWithCanvas productss={images.model.data.attributes.url} onInteract={handleModelInteraction}/>
           
                
//                 {images?.image.data.map((img) => (
//                     <img
//                         key={img.id+1}
//                         src={img.attributes.url}
//                         alt={img.attributes.name}
//                     />
//                 ))}
//                 {/* <img src="/p1.png"/>
//                 <img src="/p2.png"/>
//                 <img src="/p3.png"/>
//                 <img src="/p4.png"/>
//                 <img src="/p5.png"/>
//                 <img src="/p6.png"/>
//                 <img src="/p7.png"/> */}
//         </Carousel>
        
//     </div>
    

    







//     </>
// )}

// export default ProductDetailsCarousel





import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ShoeModelWithCanvas from "./ShoeModelWithCanvas.jsx";

const ProductDetailsCarousel = ({ images }) => {
    const handleModelInteraction = (e) => {
        e.stopPropagation(); // Prevent the carousel from swiping when interacting with the model
    };

    // Render custom thumbnails
    const renderCustomThumbs = () => {
        let thumbs = [];
        // First thumbnail for the 3D model
        thumbs.push(
            <div key="model-thumb">
                <img src="/3d.jpg" alt="3D Model Thumbnail" />
            </div>
        );
        // Thumbnails for other images
        images.image.data.forEach((img, index) => {
            thumbs.push(
                <div key={img.id}>
                    <img src={img.attributes.url} alt={img.attributes.name} />
                </div>
            );
        });
        return thumbs;
    };

    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                thumbWidth={60}
                className="productCarousel"
                renderThumbs={renderCustomThumbs}
            >
                <ShoeModelWithCanvas productss={images.model.data.attributes.url} onInteract={handleModelInteraction} />
                {images?.image.data.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.url}
                        alt={img.attributes.name}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;




