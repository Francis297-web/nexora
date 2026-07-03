// ======================================================
// NEXORA TECHNOLOGIES
// Navigation Module
// Version 5.0
// ======================================================

class Navigation {

    constructor() {

        this.navbar = document.querySelector("header");
        this.navLinks = document.querySelector(".nav-links");
        this.menuToggle = document.querySelector(".menu-toggle");
        this.backToTop = document.querySelector("#backToTop");

        this.init();

    }

    init() {

        this.mobileMenu();

        this.smoothScrolling();

        this.stickyNavbar();

        this.activeLinks();

        this.backToTopButton();

    }

    // ==========================
    // Mobile Menu
    // ==========================

    mobileMenu() {

        if (!this.menuToggle || !this.navLinks) return;

        this.menuToggle.addEventListener("click", () => {

            this.navLinks.classList.toggle("active");

            this.menuToggle.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                this.navLinks.classList.remove("active");

                this.menuToggle.classList.remove("active");

            });

        });

    }

    // ==========================
    // Sticky Navbar
    // ==========================

    stickyNavbar() {

        if (!this.navbar) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {

                this.navbar.classList.add("sticky");

            } else {

                this.navbar.classList.remove("sticky");

            }

        });

    }

    // ==========================
    // Smooth Scroll
    // ==========================

    smoothScrolling() {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const target = document.querySelector(this.getAttribute("href"));

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            });

        });

    }

    // ==========================
    // Active Navigation Links
    // ==========================

    activeLinks() {

        const sections = document.querySelectorAll("section");

        const navItems = document.querySelectorAll(".nav-links a");

        if (!sections.length || !navItems.length) return;

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 120;

                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop) {

                    current = section.getAttribute("id");

                }

            });

            navItems.forEach(link => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                if (href === "#" + current) {

                    link.classList.add("active");

                }

            });

        });

    }

    // ==========================
    // Back To Top Button
    // ==========================

    backToTopButton() {

        if (!this.backToTop) return;

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                this.backToTop.classList.add("show");

            } else {

                this.backToTop.classList.remove("show");

            }

        });

        this.backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

}

export default Navigation;
