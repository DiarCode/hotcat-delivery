import React from "react";
import { IIconProps } from "./CartSolid";

const RamenOutline = ({ className, filledColor }: IIconProps) => {
  return (
    <svg
      className={className || "w-10 h-10"}
      enableBackground="new 0 0 32 32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M29.5,21h-2.691c-0.045-0.239-0.1-0.473-0.16-0.706l4.799-2.399c0.494-0.247,0.693-0.848,0.447-1.342   c-0.248-0.494-0.846-0.692-1.342-0.447l-4.578,2.288C24.229,14.626,20.42,12,16,12c-5.382,0-9.865,3.888-10.809,9H2.5   C1.122,21,0,22.121,0,23.5c0,0.49,0.18,0.963,0.505,1.329L4,28.761V29.5C4,30.879,5.122,32,6.5,32h19c1.379,0,2.5-1.121,2.5-2.5   v-0.739l3.494-3.932C31.82,24.463,32,23.99,32,23.5C32,22.121,30.879,21,29.5,21z M25.799,21h-0.562l0.498-0.25   C25.754,20.834,25.781,20.915,25.799,21z M16,13c4.029,0,7.5,2.4,9.082,5.841l-0.891,0.445C22.775,16.171,19.645,14,16,14   c-4.282,0-7.859,2.993-8.77,7H6.202C7.131,16.441,11.171,13,16,13z M20.576,21c-0.773-1.763-2.531-3-4.576-3s-3.802,1.237-4.576,3   H10.35c0.826-2.326,3.043-4,5.65-4c2.465,0,4.588,1.496,5.508,3.627L20.764,21H20.576z M16,20c-0.883,0-1.67,0.391-2.22,1h-1.224   c0.694-1.189,1.97-2,3.444-2c1.473,0,2.75,0.811,3.443,2h-1.225C17.67,20.391,16.883,20,16,20z M16,16   c-3.165,0-5.842,2.112-6.705,5H8.263c0.892-3.444,4.017-6,7.737-6c3.246,0,6.043,1.948,7.295,4.734l-0.893,0.446   C21.314,17.723,18.855,16,16,16z M26,28v1.5c0,0.276-0.225,0.5-0.5,0.5h-19C6.224,30,6,29.776,6,29.5V28l-4-4.5   C2,23.224,2.224,23,2.5,23H5h1h1h1h1h1h1h1h1h6h1h1h1h1h1h1h1h1h2.5c0.275,0,0.5,0.224,0.5,0.5L26,28z"
          fill={filledColor || "#00000"}
        />
        <path
          d="M7.977,11.712c0.003,0.006,0.005,0.012,0.008,0.018c0,0,0.001,0,0.002,0C8.07,11.89,8.236,12,8.43,12   c0.277,0,0.502-0.226,0.502-0.503c0-0.043-0.007-0.085-0.018-0.125c0.002-0.007,0.002-0.013,0-0.02   c-0.375-0.882-0.019-1.85,0.419-2.892c0.473-1.126,0.98-2.376,0.422-3.647C9.684,4.63,9.507,4.5,9.299,4.5   c-0.271,0-0.49,0.22-0.49,0.49c0,0.06,0.012,0.116,0.032,0.169c0,0.002,0,0.004,0.001,0.006c0.001,0.003,0.002,0.006,0.003,0.009   C8.847,5.178,8.848,5.182,8.85,5.186c0.404,0.909,0.013,1.841-0.428,2.893C7.956,9.188,7.44,10.417,7.959,11.67   C7.965,11.685,7.97,11.698,7.977,11.712z"
          fill={filledColor || "#00000"}
        />
        <path
          d="M20.154,11.566c0.004,0.006,0.006,0.012,0.008,0.018h0.002c0.084,0.16,0.25,0.271,0.443,0.271   c0.277,0,0.504-0.226,0.504-0.503c0-0.043-0.008-0.085-0.018-0.125c0.002-0.007,0.002-0.013-0.002-0.02   c-0.373-0.882-0.018-1.85,0.42-2.892c0.473-1.126,0.98-2.376,0.422-3.647c-0.072-0.184-0.248-0.313-0.457-0.313   c-0.27,0-0.49,0.22-0.49,0.49c0,0.06,0.014,0.116,0.033,0.169c0,0.002,0,0.004,0,0.006c0.002,0.003,0.002,0.006,0.004,0.009   c0.002,0.004,0.004,0.008,0.004,0.012c0.404,0.909,0.014,1.841-0.428,2.893c-0.465,1.109-0.98,2.339-0.461,3.592   C20.143,11.539,20.148,11.553,20.154,11.566z"
          fill={filledColor || "#00000"}
        />
        <path
          d="M15.019,7.212c0.003,0.006,0.005,0.012,0.008,0.018c0,0,0.001,0,0.002,0c0.084,0.16,0.25,0.271,0.443,0.271   c0.277,0,0.502-0.226,0.502-0.503c0-0.043-0.007-0.085-0.018-0.125c0.002-0.007,0.002-0.013,0-0.02   c-0.375-0.882-0.019-1.85,0.419-2.892c0.473-1.126,0.98-2.376,0.422-3.647C16.725,0.13,16.549,0,16.34,0   c-0.27,0-0.49,0.22-0.49,0.49c0,0.06,0.012,0.116,0.032,0.169c0,0.002,0,0.004,0.001,0.006c0.001,0.003,0.002,0.006,0.003,0.009   c0.001,0.004,0.003,0.008,0.004,0.012c0.404,0.909,0.013,1.841-0.428,2.893c-0.466,1.109-0.982,2.339-0.462,3.592   C15.007,7.185,15.012,7.198,15.019,7.212z"
          fill={filledColor || "#00000"}
        />
      </g>
    </svg>
  );
};

export default RamenOutline;
