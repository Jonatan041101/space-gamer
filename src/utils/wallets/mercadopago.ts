import { initMercadoPago } from '@mercadopago/sdk-react';
if (!process.env.NEXT_PUBLIC_API_MERCADO_PAGO) {
  throw new Error('No has colocado la Public Key de Mercado Pago');
}
export default initMercadoPago(process.env.NEXT_PUBLIC_API_MERCADO_PAGO);
