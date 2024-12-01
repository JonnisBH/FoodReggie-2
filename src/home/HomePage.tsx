import React from "react";
//import API_URL from "../apiConfig";

const HomePage: React.FC = () => {
    return(
        <div className="tw-outline tw-outline-1 tw-outline-offset-0 tw-outline-gray-300 tw-mx-28 tw-my-6 tw-shadow-xl tw-rounded-lg">
            <div className="tw-flex tw-w-full tw-h-screen">
                <div id="backgroundAnimated" className="tw-basis-4/6 tw-flex tw-flex-col tw-space-y-3 tw-justify-center tw-items-start tw-backdrop-invert tw-rounded-l-lg">
                    <h1 className="tw-mx-40 tw-text-6xl tw-font-bold tw-text-white">Welcome to our FoodReggie!</h1>
                    <p className="tw-mx-40 tw-text-xl tw-text-white">
                        A food registration tool to help you track any food of your choice.
                        <a className="tw-underline tw-decoration-[#258cfb]" href="/foods">Create, read, update and delete </a>
                        within a single page application.
                    </p>
                </div>

                <div className="tw-basis-2/6 tw-flex tw-flex-col tw-space-y-5 tw-justify-center tw-items-center">
                    <h1 className="tw-text-4xl tw-font-bold">Navigation</h1>
                    <a type="button" href="/foods">View tool</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;