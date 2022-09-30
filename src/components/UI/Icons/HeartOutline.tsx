import React from "react";
import { IIconProps } from "./CartSolid";

const HeartOutline = ({ className, filledColor }: IIconProps) => {
  return (
    <svg
      className={className || "w-10 h-10"}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill={filledColor || "#00000"}
          d="M371.43,450H142.56a50.17,50.17,0,0,1-50.11-50.11V98.11A50.17,50.17,0,0,1,142.56,48h150.1a15,15,0,0,1,10.61,4.39L417.15,166.27a15,15,0,0,1,4.39,10.61v223A50.17,50.17,0,0,1,371.43,450ZM142.56,78a20.13,20.13,0,0,0-20.11,20.11V399.89A20.13,20.13,0,0,0,142.56,420H371.43a20.13,20.13,0,0,0,20.11-20.11V183.09L286.45,78Z"
        />
        <path
          fill={filledColor || "#00000"}
          d="M406.54,191.88H327.77a50.17,50.17,0,0,1-50.11-50.11V63a15,15,0,0,1,30,0v78.77a20.13,20.13,0,0,0,20.11,20.11h78.77a15,15,0,1,1,0,30Z"
        />
        <path
          fill={filledColor || "#00000"}
          d="M257,393.69a15,15,0,0,1-10.61-4.39l-74.45-74.46A58,58,0,0,1,254,232.77l3,3,3-3a58.09,58.09,0,0,1,82.07,0h0a58.09,58.09,0,0,1,0,82.07L267.6,389.3A15,15,0,0,1,257,393.69Zm-44-147.9a28,28,0,0,0-19.82,47.84L257,357.48l63.85-63.85A28,28,0,0,0,281.2,254l-13.6,13.6a15,15,0,0,1-21.21,0L232.79,254A27.94,27.94,0,0,0,213,245.79Z"
        />
      </g>
    </svg>
  );
};

export default HeartOutline;
