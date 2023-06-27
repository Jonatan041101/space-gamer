import { ListModal } from '@/components/Footer';
import React from 'react';

interface Props {
  modal: ListModal;
  pasarela?: boolean;
}

export default function ArticleFooter({ modal, pasarela = false }: Props) {
  return (
    <div className="cardf__container" data-article={pasarela}>
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
  );
}
