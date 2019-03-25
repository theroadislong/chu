import React from 'react';
import './PreviewUser.scss';

class PreviewUser extends React.Component {
  render() {
    const { name, phone, image, age, phrase, video } = this.props;
    return (
      <div className={video ? 'card card--video' : 'card'}>
        <div
          className={
            video ? 'card__element card__element--video' : 'card__element'
          }
        >
          <div className="card__header">
            <div className="card__user">
              <img
                className="user__img"
                alt="text"
                src={`./images/${image}.svg`}
              />
              <span className="user__name">{name}</span>
            </div>
            <input className="user__favorites" type="checkbox" />
          </div>
          <span className="card__age">{age} лет</span>
          <a className="card__phone" href={`tel:+${phone}`}>
            {phone}
          </a>
          <p className="card__phrase">{phrase}</p>
        </div>
        {video && (
          <div className="card__video">
            <video className="card__video-element" controls>
              <source src={`./videos/${video}.mp4`} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    );
  }
}

export default PreviewUser;
