//@flow
import * as React from 'react';
import {TimelineItems} from './timelineTypes';
import Logo from '../Logo';

export const Timeline = ({ items, periodComponentWidth }: TimelineItems): React.Element<'ul'> => {
  const elementStyle = periodComponentWidth && {style: {minWidth: periodComponentWidth}};

  return (
    <ul className="list-unstyled">
      {
        items.map(({ logo, period, name, content }) => (
          <li key={period} className="dg-timeline">
            <div
              className="dg-timeline__period d-flex justify-content-sm-end my-sm-2"
              {...elementStyle}
            >
              {period}
            </div>

            <div className="dg-timeline__content d-flex flex-column flex-sm-row pr-sm-3 pl-sm-2 pt-sm-4 pb-4">
              <Logo type={`${logo}`} className="mx-3 mb-2 mb-sm-0 flex-shrink-0" />
              <div className="d-flex flex-column dg-timeline__text">
                <div><b>{name}</b></div>
                <div>{content}</div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default Timeline;
