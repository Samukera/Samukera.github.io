import React from 'react';
import '../index.css'

interface CenteredImageProps {
  src: string;
  alt: string;
}

const CenteredImage: React.FC<CenteredImageProps> = ({ src, alt }) => {
 return (
    <div className="flex justify-center items-center overflow-hidden h-screen w-screen">
      <img src={src} alt={alt} className="max-w-full max-h-full" style={{ marginTop: '20rem', transform: 'scale(1.5)', zIndex:'-1'}} />
    </div>
  );
};

export default CenteredImage; 
