// // import React from "react"
// // import Link from "next/link"

// // const ProductCard = () =>{
// //     return <Link href="/product/1">
// //                 <img className="w-full" src="/product-1.webp" alt="Product Image" />
// //         </Link>
// // }

// // export default ProductCard




// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { getDiscountedPricePercent } from '@/utils/helper';

// const ProductCard = ({data: {attributes: p, id}}) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <Link href={`/product/${p.slug}`} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
//             <div className="relative" style={{ paddingBottom: "56.25%" }}> {/* This ensures a 16:9 aspect ratio */}
//                 <div 
//                     onMouseEnter={() => setIsHovered(true)} 
//                     onMouseLeave={() => setIsHovered(false)} 
//                     className="absolute top-0 left-0 w-full h-full"
//                     style={{transition: 'opacity 0.5s ease'}}
//                 >
//                     {/* Video that plays on hover */}
//                     {isHovered && (
//                         <video 
//                             autoPlay 
//                             loop 
//                             muted 
//                             playsInline 
//                             className="w-full h-full object-cover"
//                         >
//                             <source src={p.thumbnail_video.data.attributes.url} type="video/mp4"/>
//                         </video>
//                     )}

//                     {/* Image that fades in/out based on hover */}
//                     <Image 
//                         className={`absolute top-0 left-0 w-full h-full object-cover ${isHovered ? 'opacity-0' : 'opacity-100'}`}
//                         width={500}
//                         height={500}
//                         src={p.thumbnail.data.attributes.url} 
//                         alt={p.name} 
//                         style={{transition: 'opacity 0.5s ease'}}
//                     />
//                 </div>
//             </div>

//             <div className='p-4 text-black/[0.9]'>
//                 <h2 className='text-lg font-medium'>{p.name}</h2>
//                 <div className='flex items-center text-black/[0.5]'>
//                     <p className='mr-2 text-lg font-semibold'>Rs. {p.price}</p>
                    
//                     {p.orignal_price &&(
//                         <>
//                             <p className='text-base font-medium line-through'>{p.original_price}</p> 
//                             <p className='ml-auto text-base font-medium text-green-500'>{getDiscountedPricePercent(p.original_price, p.price)}% off</p>
//                         </>
//                     )} 
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default ProductCard;



import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDiscountedPricePercent } from '@/utils/helper';

const ProductCard = ({ data: { attributes: p, id } }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={`/product/${p.slug}`} className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
            <div className="relative" style={{ paddingBottom: "56.25%" }}> 
                <div 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{transition: 'opacity 0.5s ease'}}
                >
                    {/* Video that plays on hover */}
                    {isHovered && (
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover"
                        >
                            <source src={p.thumbnail_video.data.attributes.url} type="video/mp4"/>
                        </video>
                    )}

                    {/* Image that fades in/out based on hover */}
                    <Image 
                        className={`absolute top-0 left-0 w-full h-full object-cover ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                        width={500}
                        height={500}
                        src={p.thumbnail.data.attributes.url} 
                        alt={p.name} 
                        style={{transition: 'opacity 0.5s ease'}}
                    />
                </div>
            </div>

            <div className='p-4 text-black/[0.9]'>
                <h2 className='text-lg font-medium'>{p.name}</h2>
                <div className='flex items-center text-black/[0.5]'>
                    <p className='mr-2 text-lg font-semibold'>Rs. {p.price}</p>
                    
                    {p.original_price && p.original_price > p.price && (
                        <>
                            <p className='text-base font-medium line-through'>Rs. {p.original_price}</p> 
                            <p className='ml-auto text-base font-medium text-green-500'>
                                {getDiscountedPricePercent(p.original_price, p.price)}% off
                            </p>
                        </>
                    )} 
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
