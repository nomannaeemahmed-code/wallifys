

import React from 'react';
import AddToCard from '../../assets/icons/addtocart.svg';


const Icons = ({cartCount, color }) => {
    return (
<div style={{ position: "relative", display: "inline-block" }}>
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill='none'
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">

            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>

            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>

        </svg>
        {cartCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {cartCount}
        </span>
      )}
      </div>
    )
}
export default Icons;