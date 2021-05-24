import cn from 'classnames';
import styles from '../../components/P/P.module.css';
import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
