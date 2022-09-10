import React from "react";

interface GridProps {
    img: string;
    title: string;
    description: string;
}

const GridItem = (props: GridProps) => {
    return (
        <div className="h-full bg-theme-blue backdrop-blur-m">
            <div className="h-72 w-full overflow-hidden backdrop-blur-md">
                <img
                    src={props.img}
                    className="flex aspect-square w-full items-center justify-center object-cover"
                />
            </div>
            <div className="flex flex-col mt-5">
                <h1 className="flex items-center justify-center text-2xl font-medium text-white">
                    {props.title}
                </h1>
                <p className="p-5 text-sm text-white">{props.description}</p>
            </div>
        </div>
    );
};

export default GridItem;
