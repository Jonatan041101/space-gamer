import React from 'react';
import CardV2 from './CardV2';
import TitleProducts from './TitleProducts';

export default function CardsV2() {
  return (
    <div className="cardsv2">
      <div className="cardsv2__container">
        <section className="cardsv2__section">
          <TitleProducts title="Ofertas" />
          <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 />
        </section>
        <section className="cardsv2__section">
          <TitleProducts title="Nuevos" />
          <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 />
        </section>
        <section className="cardsv2__section">
          <TitleProducts title="Top 5 de esta semana" />
          <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 />
        </section>
        <section className="cardsv2__section">
          <TitleProducts title="Top 5 de hoy" />
          <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 /> <CardV2 />
        </section>
      </div>
    </div>
  );
}
