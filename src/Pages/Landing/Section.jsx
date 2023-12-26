import React, { forwardRef } from "react";

const Section = forwardRef(({ className, children }, ref) => {
    return (
        <div ref={ref} className={ className }>
            { children }
        </div>
    );
});

export default Section;
