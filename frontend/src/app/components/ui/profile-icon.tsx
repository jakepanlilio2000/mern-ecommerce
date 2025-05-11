import React from "react";

function ProfileIcon({ src, className }: { src: string, className?: string }) {

  const getIcon = (): string => {
    if (!src || src.trim() === "") {
      return "https://picsum.photos/id/237/200/300";
    }
    return src;
  };
  
  return (
    <img src={getIcon()} alt="Profile Icon" className={`${className} rounded-full size-9`} />
  );
}

export default ProfileIcon;
