'use client';
import {
  Description,
  GetProductDetailQuery,
  Image,
  Post,
  Products,
} from '@/__generated__/graphql-types';
import Loading from '@/components/Loader/Loading';
import LinksPrevProduct from '@/components/ProductDetail/LinksPrevProduct';
import OptionsList from '@/components/ProductDetail/OptionsList';
import PriceDetail from '@/components/ProductDetail/PriceDetail';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import QuotesDes from '@/components/ProductDetail/QuotesDes';
import { PRODUCT_DETAIL } from '@/utils/graphql/query';
import { useQuery } from '@apollo/client';
import React from 'react';
interface Params {
  name: string;
}

interface Props {
  params: Params;
}

export default function ProductQuery({ params }: Props) {
  const NAME = decodeURI(params.name);
  const { data, loading } = useQuery<GetProductDetailQuery>(PRODUCT_DETAIL, {
    variables: { name: NAME },
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="productd">
          <div className="productd__detail">
            <LinksPrevProduct
            // nameProduct={params.name}
            />
            <div className="productd__flex">
              <ProductDetail image={data?.getProduct?.image as Image[]} />
              <QuotesDes data={data?.getProduct as Products} />
              <PriceDetail product={data?.getProduct as Products} />
            </div>
            <OptionsList
              description={data?.getProduct?.description as Description}
              post={data?.getProduct?.post as Post[]}
              id={String(data?.getProduct?.id)}
            />
          </div>
        </div>
      )}
    </>
  );
}
