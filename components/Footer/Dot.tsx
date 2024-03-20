import { useEffect, useState } from "react";
import classNames from "classnames";

interface DotProps {
    index: number;
    activeIndex: number;
    isTransitioning?: boolean;
    title?: string;
}

const Dot = ({ index, activeIndex, isTransitioning, title }: DotProps) => {
    const [wrapperBarWidth, setWrapperBarWidth] = useState(8);
    const [whiteBarStyle, setWhiteBarStyle] = useState({});
    const [titleOpacity, setTitleOpacity] = useState(0);

    useEffect(() => {
        /*Current dot*/
        if (index === activeIndex) {
            setWrapperBarWidth(100);
            setWhiteBarStyle({ width: 32, backgroundColor: "#6366F1" });
            setTitleOpacity(1);

            if (isTransitioning) {
                setWhiteBarStyle((prevStyle) => ({ ...prevStyle, width: 90 }));
            }
        }
        /*Previous dots*/
        else if (index < activeIndex) {
            setWrapperBarWidth(8);
            setWhiteBarStyle({ backgroundColor: "#54D418" });
            setTitleOpacity(0);
        }
        /*Comming dots*/
        else {
            setWrapperBarWidth(8);
            setWhiteBarStyle({ width: 32 , backgroundColor: "#EEEDEB" });
            setTitleOpacity(0);
        }
    }, [index, activeIndex, isTransitioning]);

    return (
        <div className="relative h-[8px] w-[8px] cursor-pointer">
            <span className="title absolute -top-[28px] whitespace-nowrap font-ttcommons text-sm font-bold uppercase leading-[10px] tracking-[2.8px]" style={{ opacity: titleOpacity, transition: "opacity 1.25s ease-in-out" }}>
                {title}
            </span>
            <div className="wrapper-bar category-indicator absolute h-full overflow-hidden rounded-full" style={{ width: `${wrapperBarWidth}px`, transition: "width 1.25s ease-in-out"}}>
                <div
                    className={classNames(
                        "white-bar block h-full rounded-full bg-CustomWhite",
                        {
                            "w-full bg-[#54D418]": index < activeIndex,
                        }
                    )}
                    style={whiteBarStyle}
                />
            </div>
        </div>
    );
}

export default Dot;
