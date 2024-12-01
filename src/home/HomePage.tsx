import React, { useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
//import API_URL from "../apiConfig";

const HomePage: React.FC = () => {


    const bannerRef = useRef<HTMLDivElement>()

    useEffect(() => {
        if(bannerRef.current) {
            bannerRef.current.style.backgroundPosition = "0px 0px"
            function moveBackground() {
                const backgroundPosition = bannerRef.current.style.backgroundPosition
                const currentX = parseInt(backgroundPosition.split(" ")[0].slice(0, -2))
                const currentY = parseInt(backgroundPosition.split(" ")[1].slice(0, -2))
                
                bannerRef.current.style.backgroundPosition = `${currentX+1}px ${currentY-1}px`
            }
            setInterval(moveBackground, 30)
        }
    }, []) 

    return(
        <div className="tw-outline tw-outline-1 tw-outline-offset-0 tw-outline-gray-300 tw-shadow-2xl tw-rounded-lg">
            <div className="tw-flex tw-w-full tw-h-screen">
                <div ref={bannerRef} className="tw-basis-4/6 tw-flex tw-flex-col tw-space-y-3 tw-justify-center tw-items-start tw-backdrop-invert tw-rounded-l-lg">
                    <h1 className="tw-mx-40 tw-text-6xl tw-font-bold tw-text-white">Welcome to our FoodReggie!</h1>
                    <p className="tw-mx-40 tw-text-xl tw-text-white">
                        A food registration tool to help you track any food of your choice.
                        <p className="tw-underline tw-decoration-[#258cfb]">Create, read, update and delete </p>
                        within a single page application.
                    </p>
                </div>

                <div className="tw-basis-2/6 tw-flex tw-flex-col tw-space-y-5 tw-justify-center tw-items-center">
                    <h1 className="tw-text-4xl tw-font-bold">Navigation</h1>
                    <Button variant="primary" size="lg" href="/foods">View tool</Button>
                    <Button variant="primary" size="lg" href="/registrations">User Registrated</Button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;