import React from "react";
import classes from "./NavbarHead.module.css";

function NavbarHead() {
    return (
        <div className={classes.header}>
            <nav class='navbar-expand-lg bg-light'>
                <div className={classes.header__inside}>
                    <div class='container-fluid'>

                        <form class="form-inline">
                            <a class='navbar-brand' href='#mainPage'>Serbia Rates</a>
                            <ul class='navbar-nav'>
                                <li class='nav-item'>
                                    <a class='nav-link' aria-current='page' href='#rates'>Map</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' aria-current='page' href='#rates'>Support</a>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </nav>
        </div>


    );
}

export default NavbarHead;
