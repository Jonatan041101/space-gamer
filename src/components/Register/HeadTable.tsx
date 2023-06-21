import React from 'react';

export default function HeadTable() {
  return (
    <thead className="orders__thead">
      <tr className="orders__tr">
        <th className="orders__th">Orden</th>
        <th className="orders__th">Fecha</th>
        <th className="orders__th">Estado</th>
        <th className="orders__th">Resumen</th>
        <th className="orders__th">Factura</th>
      </tr>
    </thead>
  );
}
