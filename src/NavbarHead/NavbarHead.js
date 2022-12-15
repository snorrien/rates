import React, {useContext} from "react";
import classes from "./NavbarHead.module.css";
import { useTranslation } from "react-i18next";
import TranslationValue from "../Services/Translation/TranslationContext";
import i18n from "../Services/Translation/i18n";

function NavbarHead(props) {
  const { t } = useTranslation();
  const { locale } = useContext(TranslationValue);
  
  const changeLocale = (lang) => {
    if (locale !== lang) {
      i18n.changeLanguage(lang);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Serbia Rates</a>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          {t('language')}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#" onClick={() => changeLocale('en')}>English</a></li>
            <li><a class="dropdown-item" href="#" onClick={() => changeLocale('ru')}>Русский</a></li>
            <li><a class="dropdown-item" href="#" onClick={() => changeLocale('srb')}>Srpski</a></li>
          </ul>
        </div>
    </nav>

  );
}

export default NavbarHead;
