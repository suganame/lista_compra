import React, {createContext, useState} from 'react';

export const ModalContext = createContext({});

export function ModalProvider({children}) {
  const [show, setShow] = useState(false);

  function toggleShow(_show) {
    setShow(_show);
  }

  return (
    <ModalContext.Provider
      value={{
        show,
        toggleShow,
      }}>
      {children}
    </ModalContext.Provider>
  );
}
