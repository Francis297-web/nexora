// NEXORA TECHNOLOGIES

document.addEventListener("DOMContentLoaded", () => {

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Animation
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".service-card,.project-card,.stat-card,.developer-form,.contact-form"
    ).forEach(el => {

        el.classList.add("hidden");
        observer.observe(el);

    });

    // Forms
    document.querySelectorAll("form").forEach(form => {

        form.addEventListener("submit", e => {

            e.preventDefault();

            alert(
                "Thank you for contacting Nexora Technologies. Our team will reach out shortly."
            );

            form.reset();

        });

    });

    // Counter Animation
    const counters = document.querySelectorAll(".stat-card h2");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = parseInt(
                counter.innerText.replace(/\D/g, "")
            );

            let count = 0;

            const speed = target / 100;

            const interval = setInterval(() => {

                count += speed;

                if (count >= target) {

                    counter.innerText =
                        counter.innerText.includes("%")
                            ? target + "%"
                            : counter.innerText.includes("/")
                            ? "24/7"
                            : target + "+";

                    clearInterval(interval);

                } else {

                    if (counter.innerText.includes("%")) {

                        counter.innerText =
                            Math.floor(count) + "%";

                    } else {

                        counter.innerText =
                            Math.floor(count) + "+";

                    }

                }

            }, 20);

        };

        updateCounter();

    });

});

// Floating WhatsApp Glow Effect
const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    setInterval(() => {

        whatsapp.style.transform = "scale(1.1)";

        setTimeout(() => {

            whatsapp.style.transform = "scale(1)";

        }, 500);

    }, 2000);

}
