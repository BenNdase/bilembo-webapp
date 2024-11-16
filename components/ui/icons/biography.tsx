import React from "react";

export type Props = {
  className?: string;
};

const BiographyIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`w-8 h-10 ${className}`}
    >
      <path
        fill="currentColor"
        d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22H6Zm5-11l2.5-1.5L16 11V4h-5v7Z"
      />
    </svg>
  );
};

export default BiographyIcon;
