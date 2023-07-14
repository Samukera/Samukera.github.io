import React from 'react';
import '../index.css'

interface CenteredImageProps {
  src: string;
  alt: string;
}

const CenteredImage: React.FC<CenteredImageProps> = ({ src, alt }) => {
 return (
    <div className="flex justify-center items-center">
  <div className="avatar">
    <div className="w-64 rounded-full ring ring-spider0 ring-offset-spider1 ring-offset-2">
      <img src={src} alt={alt}/>
    </div>
  </div>
</div>

  );
};

export default CenteredImage; 
