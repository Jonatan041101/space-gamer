import React from 'react';

import SectionProducts from '@/molecules/SectionProducts';

export default function CardsV2() {
  return (
    <div className="cardsv2">
      <div className="cardsv2__container">
        <SectionProducts limit={5} skip={0} title="Ofertas" />
        <SectionProducts limit={5} skip={5} title="Nuevos" />
        <SectionProducts limit={5} skip={10} title="Top 5 de esta semana" />
        <SectionProducts limit={5} skip={15} title="Top 5 de hoy" />
      </div>
    </div>
  );
}
