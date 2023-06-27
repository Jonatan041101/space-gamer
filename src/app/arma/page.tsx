'use client';
import {
  GetProductCategorySubQuery,
  Products,
} from '@/__generated__/graphql-types';
import Button from '@/atoms/Button';
import Icons from '@/atoms/Icons';
import Armament from '@/components/ArmaPc/Armament';
import CardComponent from '@/components/ArmaPc/CardComponent';
import Windows from '@/components/ArmaPc/Windows';
import { mapListArma } from '@/components/ArmaPc/list';
import Container from '@/components/Container';
import Modal from '@/components/Modal/Modal';
import { ProductToCart } from '@/store/slices/cart';
import { deleteCopy, updateCarArmament } from '@/utils/filters';
import { GET_PRODUCT_CATEGORY_SUB } from '@/utils/graphql/query';
import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';

export interface ProductsWithCount extends Products {
  count?: number;
}
export type ArmamentPCProduct = (
  evt: React.ChangeEvent<HTMLInputElement>,
  product: Products
) => void;
export default function ArmaPage() {
  const [products, setProducts] = useState<ProductsWithCount[]>([]);
  const [productsPC, setProductsPC] = useState<ProductToCart[]>([]);
  const [viewMother, setViewMother] = useState<boolean>(false);
  const [procesador, setProcesador] = useState<undefined | string>(undefined);
  const [view, setView] = useState<boolean>(false);
  const [getProducts] = useLazyQuery<GetProductCategorySubQuery>(
    GET_PRODUCT_CATEGORY_SUB,
    { fetchPolicy: 'no-cache' }
  );
  const handleGetProducts = async (name: string) => {
    const data = await getProducts({
      variables: {
        name,
        motherBoard: procesador,
      },
    });
    setProducts(data.data?.getCategoryOrSub?.products as ProductsWithCount[]);
    setView(true);
  };
  const closeModal = () => {
    setProducts([]);
    setView(false);
  };
  const addCountProduct = (id: string, counter: number) => {
    const copyProducts = [...products];
    const product = copyProducts.find((prod) => prod.id === id);
    if (product) {
      product.count =
        typeof product.count === 'number' ? product.count + counter : counter;
      setProducts(copyProducts);
    }
  };
  const addProducts = () => {
    let mapping: ProductToCart[] = [];

    products.forEach((product) => {
      if (product.count) {
        if (product.count > 0) {
          const productP: Products = {
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            brand: product.brand,
            __typename: product.__typename,
            brandId: product.brandId,
            category: product.category,
            categoryId: product.categoryId,
            description: product.description,
            isCombo: product.isCombo,
            post: product.post,
            product: product.product,
            quotes: product.quotes,
            stock: product.stock,
            subCategory: product.subCategory,
          };
          const newProduct: ProductToCart = {
            product: productP,
            count: product.count ?? 0,
          };
          mapping.push(newProduct);
        }
        product.count = undefined;
      }
    });
    if (mapping.length > 0) {
      if (mapping[0].product?.subCategory?.name === 'microprocesadores') {
        setViewMother(true);

        let str: string[] = [];
        let brands: string[] = [];

        mapping.forEach((product) => {
          if (typeof product.product?.brand?.name === 'string') {
            str.push(product.product.brand.name);
          }
        });

        deleteCopy<string>(str, brands);
        setProcesador(
          typeof procesador === 'string'
            ? procesador.concat(brands.join(''))
            : brands.join('')
        );
      }
    }
    const copyProductsPc = [...productsPC];
    const newMapping = updateCarArmament(copyProductsPc, mapping);
    setProductsPC([...copyProductsPc, ...newMapping]);
    closeModal();
  };
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    product: Products
  ) => {
    const { checked } = evt.target;

    if (checked) {
      const newProduct: ProductToCart = {
        product,
        count: 1,
      };
      setProductsPC([...productsPC, newProduct]);
      return;
    }
    const products = productsPC.filter(
      (prod) => prod.product?.id !== product?.id
    );
    setProductsPC(products);
  };

  return (
    <Container title="Arma tu PC">
      {view && (
        <Modal>
          <div className="armapc__container">
            <div className="armapc__modal">
              <i className="armapc__i" onClick={closeModal}>
                <Icons icon="close" />
              </i>
              <div className="armapc__pad">
                <section className="armapc__pop">
                  {products.map((product) => (
                    <CardComponent
                      key={product.id}
                      product={product}
                      addCountProduct={addCountProduct}
                    />
                  ))}
                </section>
              </div>
            </div>
            <div className="armapc__add" onClick={addProducts}>
              <Button text="AGREGAR" />
            </div>
          </div>
        </Modal>
      )}
      <div className="armapc">
        <div className="armapc__items">
          {mapListArma.map((arma) => (
            <>
              {arma.name === 'motherboards' && !viewMother ? null : (
                <Windows
                  handleGetProducts={handleGetProducts}
                  key={arma.id}
                  arma={arma}
                />
              )}
            </>
          ))}
        </div>
        <Armament products={productsPC} handleChange={handleChange} />
      </div>
    </Container>
  );
}
