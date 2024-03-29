import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import TranslationValue from "../Services/Translation/TranslationContext";
import i18n from "../Services/Translation/i18n";
import logoRu from "./Images/ru.png";
import logoEn from "./Images/en.png";
import logoRs from "./Images/rs.png";
import "./NavbarHead.scss";


function NavbarHead() {
  const logos: { [id: string] : string; } = {
    "ru": logoRu,
    "rs": logoRs,
    "en": logoEn
  };

  const { t } = useTranslation();
  const { locale } = useContext(TranslationValue);

  const [logo, setLogo] = useState(logos[locale]);

  const changeLocale = (lang: string) => {
    if (locale !== lang) {
      i18n.changeLanguage(lang);
      setLogo(logos[lang]);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">Serbia Rates</a>

        <div className="dropdown">
          <img className="flag" src={logo} id="flagShow"></img>
          <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {t('language')}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" id="btnEn" onClick={() => changeLocale('en')}>English</a></li>
            <li><a className="dropdown-item" id="btnRu" onClick={() => changeLocale('ru')}>Русский</a></li>
            <li><a className="dropdown-item" id="btnSr" onClick={() => changeLocale('rs')}>Srpski</a></li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavbarHead;
