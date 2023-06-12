import { ListModal } from '@/components/Footer';
import Modal from '@/components/Modal/Modal';
import Image from 'next/image';
import React, { useState } from 'react';
import Icons from './Icons';

interface Props {
  modal: ListModal;
  view?: boolean;
}

export default function CardFooter({ modal, view = false }: Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <article className="cardf" onClick={handleClick}>
        <Image
          className="cardf__image"
          src={modal.image ?? ''}
          alt="Imagen de la modal"
          width={50}
          height={50}
        />
        <h3 className="cardf__h3">{modal.title}</h3>
        <p className="cardf__p">{modal.text}</p>
      </article>
      {modalOpen && view && (
        <Modal>
          <div className="cardf__modal">
            <i className="cardf__i" onClick={handleClick}>
              <Icons icon="close" />
            </i>
            <div className="cardf__container">
              <h2 className="cardf__h2">{modal.titleModal}</h2>
              <section className="cardf__section">
                {modal.list?.map((list) => (
                  <article key={list.id} className="cardf__article">
                    <h4 className="cardf__h4">{list.title}</h4>
                    <p className="cardf__text">{list.text}</p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
