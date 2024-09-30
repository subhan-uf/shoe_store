import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard";

import ShoeModelWithCanvas from "@/components/ShoeModelWithCanvas";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import React, { useState,useEffect } from "react";


export default function Home({products}) {






    

    return <main>
        <HeroBanner/>
       
        <Wrapper>
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]"> 
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold ">Kick It Up: Fresh Steps Ahead</div>
                <div className="text-md md:text-xl">Yo, step into the vibe at Kick
                 It Up! Find your sole-mates from our lit lineup, where 
                 every pair is a flex. Whether you're about that street style or 
                 keeping it comfy, we've got the kicks to make your feet the talk of the 
                 town. Slide into 
                our DMs, walk this way, and let's make those sidewalks your runway!</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-5 my-14 px-5 md:px-0">
                  
                    {products?.data?.map((product)=>(

                            <ProductCard key={product.id} data={product}/>
                    ))}
                   
                   
                    {/* <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/> */}
                    
                </div>
        </Wrapper>
      


    </main>;
}


export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}