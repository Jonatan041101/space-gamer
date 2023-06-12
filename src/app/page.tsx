import Carruzel from '@/components/Carruzel/Carruzel';
import Cards from '@/components/Cards';
import LinksProducts from '@/components/LinksProducts';
import LinksComponentsPc from '@/components/LinksComponentsPc';
import Title from '@/components/Title';
import MiniBanner from '@/components/MiniBanner';
import CardsV2 from '@/components/CardsV2';
import CarruzelBrand from '@/components/CarruzelBrand/CarruzelBrand';
import ProductModal from '@/components/ProductModal';

export default function Home() {
  return (
    <main className="main">
      <div className="main__div">
        <Carruzel />
        <LinksProducts />
        <LinksComponentsPc />
        <Title />
        <Cards />
        <MiniBanner />
        <CarruzelBrand />
        <CardsV2 />
      </div>
    </main>
  );
}
