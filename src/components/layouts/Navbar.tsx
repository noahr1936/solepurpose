import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        Solepurpose
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            href="/about/mission-statement"
                                            className="dropdown-item">
                                            Mission Statement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about/photos" className="dropdown-item">
                                            Photos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="dropdown-item">
                                            Home
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/glossary" className="nav-link">
                                    Glossary
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/search" className="nav-link">
                                    Search Database
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/student-collaboration" className="nav-link">
                                    Student Collaboration
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

{
    /* <div align:"center">
    
    <img th:src="@{/images/laced-up-sticker.png}" style="width: 450px; height: 150px"/>

</div>

<div class="bs-example">
    <nav class="navbar navbar-inverse navbar-fixed-top">

        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">Laced Up</a>
        </div>

        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                <li><a href="/">Home</a></li>
                <li><a href="/product/">Products</a></li>
                <li><a href="/about/">About</a></li>
                <li class="dropdown user user-menu" sec:authorize="hasAnyAuthority('CUSTOMER', 'ADMIN')">
                    <a href="/admin/products">Admin products</a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right " style="padding-right: 50px">
                <li><a href="/register/">Register</a></li>
                <li><a href="/login/">Login </a></li>
                <li>
                    <form th:action="@{/logout}" method="POST">
                        <input type="submit" value="Log out" />
                    </form>
                </li>
            </ul>
        </div>
    </nav>
</div> */
}
