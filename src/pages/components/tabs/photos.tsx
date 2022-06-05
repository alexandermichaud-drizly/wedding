import { ImageList, ImageListItem } from "@mui/material";

type Version = "venue" | "engagement";
type Props = { version: Version };
type Photo = {
  src: string;
  alt: string;
  cols?: number;
  rows?: number;
};

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const VENUE_PHOTOS: Photo[] = [
  {
    src: 'string',
    alt: 'string',
  }
];

const ENGAGEMENT_PHOTOS: Photo[] = [
  {
    src: 'string',
    alt: 'string',
  }
];

const VenuePhotos = (props: Props): JSX.Element => 
  <ImageList variant="quilted">
    {(props.version === "venue" ? VENUE_PHOTOS : ENGAGEMENT_PHOTOS).map(data => 
      <ImageListItem>
        <img
          {...srcset(data.src, 121, data.rows, data.cols)}
          alt={data.alt}
          loading="lazy"
        />
      </ImageListItem>
    )}
  </ImageList>;

export default VenuePhotos;
