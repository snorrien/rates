import React, { useState} from "react";
import i18n from "./i18n";

const TranslationValue = React.createContext({
  locale: 'en',
  setLocale: ()=> {}
})
export default TranslationValue;

export const TranslationValueProvider = (props) => {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return <TranslationValue.Provider 
  value={{locale, setLocale}}>
 
    {props.children}
  </TranslationValue.Provider>
}


