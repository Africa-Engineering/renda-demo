import React from "react";
import Carousel from "nuka-carousel";

export default class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel
        renderBottomCenterControls={null}
        withoutControls
        autoplay={{
          interval: 5000,
          direction: "next",
        }}
      >
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/first_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-3xl inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 overflow-hidden relative object-cover"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-3xl relative"
          />
          <div className="absolute inset-x-0 h-full bottom-0 flex items-end pb-8 justify-center">
            <div className="justify--center">
              <div className="">
                <div className="px-4 flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Discover the power of seamless order fulfillment
                  </p>
                  <span className=" text-gray-400 gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/lady_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-3xl inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20 overflow-hidden relative object-cover"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-3xl relative"
          />
          <div className=" absolute inset-x-0 h-full bottom-0 flex items-end pb-8 justify-center">
            <div className="justify--center">
              <div className="">
                <div className="px-4 flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Find the right solution that meets your needs.
                  </p>
                  <span className=" text-gray-400 gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/first_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-3xl inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20  overflow-hidden relative object-cover"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-3xl relative"
          />
          <div className=" absolute inset-x-0 bottom-0 flex items-end pb-8 justify-center">
            <div className="justify--center">
              <div className="">
                <div className="px-4 flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Discover the power of seamless order fulfillment
                  </p>
                  <span className=" text-gray-500 gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "95vh",
            backgroundImage: "url('/assets/images/lady_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
          className="rounded-3xl inset-x-0 col-md-5 p-0 d-none d-md-flex position-relative vh-20  overflow-hidden relative object-cover"
        >
          <div
            style={{
              height: "95vh",
              width: "100%",
              opacity: 1,
              backgroundImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
            className="rounded-3xl relative"
          />
          <div className=" absolute inset-x-0 bottom-0 flex items-end pb-8 justify-center ">
            <div className="justify--center">
              <div className="">
                <div className="px-4 flex-col">
                  <p className=" text-3xl font-medium text-white mb-4">
                    Find the right solution that meets your needs.
                  </p>
                  <span className=" text-gray-500 gradient-text">
                    <a href="#" className="gradient-text">
                      Get started now
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Carousel>
    );
  }
}
