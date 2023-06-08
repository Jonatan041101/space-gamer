import React from 'react';
import { AcordeonDetail, ListAcordeon } from './OptionsList';
interface Props {
  list: ListAcordeon;
  acordeon: AcordeonDetail;handleChangePageAcordeon:(acordeon:AcordeonDetail)=>void
}
export default function Acordeon({ list, acordeon,handleChangePageAcordeon }: Props) {
  return (
    <div onClick={()=>handleChangePageAcordeon(list.text)} className="optionslist__text" data-text={acordeon === list.text}>
      {list.text}
    </div>
  );
}
