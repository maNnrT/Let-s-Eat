import React from 'react';
import './GlobalStyles.scss';
interface Props {
  children: React.ReactNode;
}
function GlobalStyles({ children }: Props) {
  return children;
}

export default GlobalStyles;
