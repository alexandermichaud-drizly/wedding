import classNames from 'classnames';
import * as React from 'react';
import s from '../../../styles/main.module.scss';

const CastleMap = (): JSX.Element => {
  return (
    <div>
      <h1>Castle Map</h1>
      <div className={s.CastleMap}>
        <iframe
          className={s.iFrame}
          width="100%"
          src="https://drive.google.com/file/d/18M3V0jKkReJhgUbUqMkp_mQDSxHV1gkO/preview"
        />
      </div>
    </div>
  );
};

export default CastleMap;
