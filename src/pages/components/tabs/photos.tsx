import * as React from 'react';
import { Backdrop, Fade, ImageList, ImageListItem, Modal } from '@mui/material';
import { VENUE_PHOTOS, ENGAGEMENT_PHOTOS } from './photo_lists';

import s from '../../../styles/main.module.scss';
import {
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
} from '@mui/icons-material';
import cn from 'classnames';

type Version = 'venue' | 'engagement';
type Props = { version: Version };

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const VenuePhotos = (props: Props): JSX.Element => {
  const [imageModalOpen, setImageModalOpen] = React.useState(false);
  const [spotlitImageIndex, setSpotlitImageIndex] = React.useState(0);

  const spotlightImage = (index: number) => {
    setSpotlitImageIndex(index);
    setImageModalOpen(true);
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    const imageOffset = direction === 'left' ? -1 : 1;
    const newIndex = spotlitImageIndex + imageOffset;
    const numPhotos = VENUE_PHOTOS.length;
    if (newIndex < 0) return setSpotlitImageIndex(numPhotos - 1);
    if (newIndex > numPhotos - 1) return setSpotlitImageIndex(0);
    return setSpotlitImageIndex(newIndex);
  };

  const venueVersion = props.version === 'venue';

  return (
    <div>
      <h1>{venueVersion ? 'Venue Photos' : 'Engagement Photos'}</h1>
      <ImageList variant="quilted" cols={4}>
        {(venueVersion ? VENUE_PHOTOS : ENGAGEMENT_PHOTOS).map(
          (data, index) => (
            <ImageListItem
              key={data.alt}
              cols={data.cols || 1}
              rows={data.rows || 1}
            >
              <img
                className={s.ImageListItem}
                {...srcset(data.src, 121, data.rows, data.cols)}
                alt={data.alt}
                loading="lazy"
                onClick={() => spotlightImage(index)}
              />
            </ImageListItem>
          )
        )}
      </ImageList>
      <Modal
        className={s.Modal}
        open={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={imageModalOpen}>
          <div className={s.SpotlightImageContainer}>
            <ArrowCircleLeftTwoTone
              classes={{ root: cn(s.ArrowLeft, s.root) }}
              onClick={() => handleArrowClick('left')}
            />
            <img
              className={s.SpotlightImage}
              src={VENUE_PHOTOS[spotlitImageIndex].src}
              alt={VENUE_PHOTOS[spotlitImageIndex].src}
            />
            <ArrowCircleRightTwoTone
              classes={{ root: cn(s.ArrowRight, s.root) }}
              onClick={() => handleArrowClick('right')}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default VenuePhotos;
