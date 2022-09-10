import React from "react";

interface Props {
    heroImage: string;
}

const Hero = (props: Props) => {
    return (
        <div className="flex w-full">
            <div className="relative h-96 w-full bg-black/50 bg-cover bg-center duration-150 lg:h-[30rem]">
                <img
                    src={props.heroImage}
                    alt="restaurant image"
                    className="opacity- absolute h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
