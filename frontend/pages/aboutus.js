import React from "react";
import Wrapper from "@/components/Wrapper";

export default function AboutUs() {
  return (
    <main>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            About Us
          </div>
          <div className="text-md md:text-xl">
            Welcome to Kick It Up, where passion for sneakers meets unparalleled
            quality. Founded by sneaker enthusiasts, our store is dedicated to
            bringing you the latest and greatest in footwear. Whether you're
            looking for street style or performance wear, we offer a curated
            selection that ensures you'll find your perfect match. Our mission
            is to provide exceptional service and a unique shopping experience
            for every sneakerhead. Step into our world and discover the
            difference.
          </div>
        </div>
      </Wrapper>
    </main>
  );
}
