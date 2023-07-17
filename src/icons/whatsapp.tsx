const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={41} fill="none">
    <path
      fill="#1B547F"
      d="M4.666 19.365c0 2.639.69 5.216 2 7.487l-2.125 7.76 7.941-2.083a14.974 14.974 0 0 0 7.159 1.823h.006c8.256 0 14.976-6.718 14.98-14.975a14.882 14.882 0 0 0-4.384-10.595 14.886 14.886 0 0 0-10.597-4.391c-8.256 0-14.976 6.717-14.98 14.974"
    />
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M4.13 19.36c0 2.733.714 5.402 2.072 7.754L4 35.152l8.226-2.157a15.51 15.51 0 0 0 7.415 1.889h.007c8.552 0 15.513-6.96 15.517-15.512a15.418 15.418 0 0 0-4.54-10.975 15.42 15.42 0 0 0-10.977-4.55c-8.554 0-15.514 6.96-15.518 15.512Zm4.899 7.35-.307-.488A12.859 12.859 0 0 1 6.75 19.36c.003-7.109 5.789-12.893 12.903-12.893a12.814 12.814 0 0 1 9.118 3.782 12.815 12.815 0 0 1 3.774 9.121c-.003 7.11-5.789 12.894-12.897 12.894h-.005a12.883 12.883 0 0 1-6.565-1.798l-.47-.279-4.882 1.28 1.303-4.758Z"
      />
    </g>
    <path
      fill="#fff"
      d="M15.77 12.874c-.29-.645-.596-.658-.872-.67-.226-.01-.485-.009-.743-.009-.259 0-.68.098-1.034.485-.356.388-1.357 1.326-1.357 3.234s1.39 3.751 1.583 4.01c.194.258 2.682 4.298 6.623 5.852 3.275 1.292 3.942 1.035 4.652.97.712-.064 2.295-.938 2.617-1.843.324-.905.324-1.681.227-1.843-.097-.162-.356-.259-.743-.453-.388-.194-2.294-1.132-2.65-1.261-.355-.13-.614-.194-.872.195-.259.387-1.001 1.26-1.228 1.519-.226.259-.452.291-.84.097-.388-.194-1.636-.603-3.118-1.924-1.152-1.028-1.93-2.297-2.157-2.685-.226-.388-.024-.598.17-.79.175-.175.388-.454.582-.68.194-.226.258-.388.388-.646.129-.26.064-.486-.033-.68-.097-.194-.85-2.111-1.195-2.878Z"
    />
    <defs>
      <linearGradient
        id="b"
        x1={1562.25}
        x2={1562.25}
        y1={3134.31}
        y2={3.848}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <filter
        id="a"
        width={39.164}
        height={39.305}
        x={0}
        y={0.848}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2000_58547"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2000_58547"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export { WhatsAppIcon };