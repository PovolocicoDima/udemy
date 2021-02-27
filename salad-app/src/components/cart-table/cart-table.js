import React from 'react';
import {connect} from 'react-redux';

import './cart-table.scss';

const CartPage = ({items, onDelete}) => {
  return (
    <>
      <div className="cart__title">Ваш заказ</div>
      <div className="cart__list">
        {
          items.map(item => {
            const {title, price, url, id} = item;
            return (
              <div key={id} className="cart__item">
                <div className="cart__item-Img">
                  <img className="cart_item-img" src={url} alt={title}></img>
                </div>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price}$</div>
                <div onClick={() => onDelete(id)}
                     className="cart__close">&times;</div>
              </div>
            )
          })
        }

      </div>
    </>
  )
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
};

const mapDispatchToProps = () => {
  return {
    onDelete: (id) => {
      console.log(`Удалили ${id}`);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);