import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { LIGHTGALLERY_LICENSE_KEY } from "./config";

const Gallery = ({ screenshots }) => {
  if (!screenshots) {
    return null;
  }

  return (
    <LightGallery
      licenseKey={LIGHTGALLERY_LICENSE_KEY}
      plugins={[lgThumbnail]}
      elementClassNames="flex gap-5 my-2"
      download={false}
    >
      {screenshots.map(({ original, thumb }, index) => (
        <a href={original} key={original}>
          <img
            className="rounded-md"
            alt={`Screenshot ${index + 1}`}
            src={thumb}
            width="200"
          />
        </a>
      ))}
    </LightGallery>
  );
};

export default Gallery;
