import React from "react";

const Virtual = () => {
  return (
    <div className="h-full w-full bg-black py-2 z-20">
      <iframe
        width="100%"
        height="480"
        src="https://my.matterport.com/show/?m=iFbRSyL3aXK"
        allowFullScreen
        allow="xr-spatial-tracking"
        title="Virtuálna prehliadka"
        className="w-full h-[480px]"
      ></iframe>
    </div>
  );
};

export default Virtual;
