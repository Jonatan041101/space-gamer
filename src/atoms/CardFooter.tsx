import { ListModal } from '@/components/Footer';
import Modal from '@/components/Modal/Modal';
import Image from 'next/image';
import React, { useState } from 'react';
import Icons from './Icons';
import ArticleFooter from './ArticleFooter';
import Close from './Close';

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
            <Close handleClick={handleClick} />
            <ArticleFooter modal={modal} />
          </div>
        </Modal>
      )}
    </>
  );
}
