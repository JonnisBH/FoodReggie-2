import React, { useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
//import API_URL from "../apiConfig";

const HomePage: React.FC = () => {

    // Creates a reference for the div
    const bannerRef = useRef<HTMLDivElement>()

    useEffect(() => {
        if(bannerRef.current) {
            // Initializing background position
            bannerRef.current.style.backgroundPosition = "0px 0px"
            // Functions to split string and parse it
            function moveBackground() {
                const backgroundPosition = bannerRef.current.style.backgroundPosition
                const currentX = parseInt(backgroundPosition.split(" ")[0].slice(0, -2))
                const currentY = parseInt(backgroundPosition.split(" ")[1].slice(0, -2))
                
                // Increments x and y for the picture to move
                bannerRef.current.style.backgroundPosition = `${currentX+1}px ${currentY-1}px`
            }
            setInterval(moveBackground, 60)
        }
    }, []) 

    return(
        <div className="tw-outline tw-outline-1 tw-outline-offset-0 tw-outline-gray-300 tw-shadow-2xl tw-rounded-lg">
            <div className="tw-flex tw-w-full tw-h-screen">
                <div ref={bannerRef} id="animatedBackground" className="tw-basis-4/6 tw-flex tw-flex-col tw-space-y-3 tw-justify-center tw-items-center tw-backdrop-invert tw-rounded-l-lg tw-p-16">
                    <h1 className="tw-text-6xl tw-font-bold tw-text-white tw-max-w-xl">Welcome to our FoodReggie!</h1>
                    <p className="tw-text-xl tw-text-white tw-max-w-xl">A food registration tool to help you track any food of your choice. Create, read, update and delete within a single page application.
                    </p>
                </div>
                <div className="tw-basis-2/6 tw-flex tw-flex-col tw-space-y-5 tw-justify-center tw-items-center tw-m-10">
                    <h1 className="tw-text-4xl tw-font-bold">Navigation</h1>
                    <Button variant="primary" size="lg" href="/foods">View tool</Button>
                    <Button variant="primary" size="lg" href="/registrations">Users Registered</Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;