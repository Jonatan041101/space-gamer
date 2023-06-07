import React from 'react';
import { EnviosT } from './PriceDetail';

interface Props {
  envio: EnviosT;
}

export default function Envios({ envio }: Props) {
  return (
    <div className="envios">
      <h3 className="envios__h3">{envio.title}</h3>
      <p
        className="envios__p"
        style={{
          color: `${envio.content === 'GRATIS' ? '#ff3026' : '#262626'}`,
        }}
      >
        {envio.content}
      </p>
    </div>
  );
}
