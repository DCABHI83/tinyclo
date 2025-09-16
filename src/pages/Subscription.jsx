import React from "react";
import clouds from "../assets/clouds.png";
import subscription1 from "../assets/subscriptionImg1.png";
import subscription2 from "../assets/subscriptionImg2.png";
import Included from "../components/Included";
import Brands from "../components/Brands";
const Subscription = () => {
  return (
    <>
      <div>
        <div
          className="w-full bg-cover bg-center overflow-hidden h-[30vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${clouds})` }}
        >
          <div className="flex flex-col items-center gap-1 ">
            <h1 className="text-4xl font-bold">
              <span className="text-[#147AA9]">Our</span>{" "}
              <span className="text-[#FC6565]">Rental</span>{" "}
              <span className="text-[#147AA9]">Membership</span>
            </h1>
            <h2 className="text-[1.1rem] font-medium ">
              Keep up with your growing baby's wardrobe from
            </h2>
            <h2 className="text-[1.1rem] font-medium">
              0 to age 5 - Sustainability!
            </h2>
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-4 md:flex-row  ">
          <div className="flex  w-full md:w-[60%] items-center justify-center  ">
            <img
              src={subscription1}
              className="w-[95%] md:w-[70%]"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-center  md:w-[50%]">
            <div className="flex flex-col justify-start pl-4">
              <h1 className="text-[#5B91AC] text-4xl font-[600] md:font-[500]">
                TinyClo PREMIUM PLAN
              </h1>
              <h3 className="text-[#FC6C7E] text-xl md:text-3xl">
                from $49.00
              </h3>
            </div>

            <div className="w-[95%] h-[3px] bg-[#EDEDED]"></div>

            <div>
              <div className="flex flex-col items pl-4 gap-2 md:gap-4 md:pt-2">
                <p className="text-xl md:text-2xl">
                  Get a curated mix of premium brands that parents love.
                </p>
                <p className="text-xl md:text-2xl">Unlimited Swaps</p>
                <p className="text-xl md:text-2xl">Free Shipping,Both ways</p>
                <p className="text-xl md:text-2xl">Cancel Anytime</p>
                <div>
                  <button className="text-white bg-[#147AA9] text-xl md:text-2xl px-2 py-2 rounded md:px-3 md:py-3">
                    CHOOSE MEMBERSHIP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:my-15  my-10 ">
          <div className="flex  w-full md:w-[55%] items-center justify-center md:mt-4 ">
            <img
              src={subscription2}
              className="w-[95%] md:w-[70%]"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-center  md:w-[50%]">
            <div className="flex flex-col justify-start pl-4">
              <h1 className="text-[#5B91AC] text-4xl font-[600] md:font-[500]">
                TinyClo PREMIUM PLAN
              </h1>
              <h3 className="text-[#FC6C7E] text-xl md:text-3xl">
                from $49.00
              </h3>
            </div>

            <div className="w-[95%] h-[3px] bg-[#EDEDED]"></div>

            <div>
              <div className="flex flex-col items pl-4 gap-2 md:gap-4 md:pt-2">
                <p className="text-xl md:text-2xl">
                  Get a curated mix of premium brands that parents love.
                </p>
                <p className="text-xl md:text-2xl">Unlimited Swaps</p>
                <p className="text-xl md:text-2xl">Free Shipping,Both ways</p>
                <p className="text-xl md:text-2xl">Cancel Anytime</p>
                <div>
                  <button className="text-white bg-[#147AA9] text-xl md:text-2xl px-2 py-2 rounded md:px-3 md:py-3">
                    CHOOSE MEMBERSHIP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      <Included/>
      <Brands/>
      </div>
    </>
  );
};

export default Subscription;
