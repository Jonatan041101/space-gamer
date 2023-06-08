import InputSquare from '@/atoms/InputSquare';
import React from 'react';
import AllComents from './AllComents';
// ★ ç
export default function Comentarios() {
  const stars = [
    { id: 1380, value: 1 },
    { id: 1381, value: 2 },
    { id: 1382, value: 3 },
    { id: 1383, value: 4 },
    { id: 1384, value: 5 },
  ];
  return (
    <div className="options__description">
      <h2 className="options__title">Dejanos tu comentario</h2>
      <div className="options__comment">
        <InputSquare input labelText="Tu Nombre" />
        <div className="options__flex">
          <h3 className="options__h3">Selecciona un puntaje</h3>
          <div className="options__stars">
            {stars.map((star) => (
              <span key={star.id}>{'★'}</span>
            ))}
          </div>
        </div>
      </div>
      <InputSquare labelText="Tu Comentario" />
      <button className="options__btn">Enviar</button>
      <AllComents />
    </div>
  );
}
