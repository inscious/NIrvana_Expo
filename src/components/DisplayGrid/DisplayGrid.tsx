import React from "react";

import GridItem from "./GridItem";
import gridData from "../../assets/data/gridData";

const DisplayGrid = () => {
    return (
        <div className="grid w-full auto-cols-max grid-cols-1 md:grid-cols-3">
            {gridData.map((data, index) => {
                return (
                    <GridItem
                        key={index}
                        title={data.title}
                        img={data.img}
                        description={data.description}
                    />
                );
            })}
        </div>
    );
};

export default DisplayGrid;
