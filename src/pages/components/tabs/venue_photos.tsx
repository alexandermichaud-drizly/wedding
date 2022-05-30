import { ImageList, ImageListItem } from "@mui/material";

const PHOTOS = [
  {
    src: 'string',
    alt: 'string',
  }
];

const VenuePhotos = (): JSX.Element => 
  <ImageList>
    {PHOTOS.map(data => 
      <ImageListItem>
        <img
          src={data.src}
          alt={data.alt}
        />
      </ImageListItem>
    )}
  </ImageList>;

export default VenuePhotos;
