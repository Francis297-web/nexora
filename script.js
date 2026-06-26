// NEXORA TECHNOLOGIES - FULL UPGRADED SYSTEM

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FIREBASE CONFIG (ADD YOUR KEYS)
    // =========================
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // =========================
    // SMOOTH SCROLL
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // =========================
    // SCROLL ANIMATION
    // =========================
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".card, .project-card, .stats div, form").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

    // =========================
    // ELEMENTS
    // =========================
    const devForm = document.getElementById("developerForm");
    const contactForm = document.getElementById("contactForm");

    const devMsg = document.getElementById("devMsg");
    const contactMsg = document.getElementById("contactMsg");

    // =========================
    // VALIDATION FUNCTION
    // =========================
    function validateForm(inputs) {
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#1f2937";

                if (input.type === "email") {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        valid = false;
                        input.style.borderColor = "red";
                    }
                }
            }
        });

        return valid;
    }

    // =========================
    // DEVELOPER FORM (FIRESTORE)
    // =========================
    if (devForm) {
        devForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const inputs = devForm.querySelectorAll("input, textarea, select");

            if (!validateForm(inputs)) {
                devMsg.textContent = "Please fill all fields correctly.";
                devMsg.style.color = "red";
                return;
            }

            devMsg.textContent = "Submitting...";
            devMsg.style.color = "white";

            try {
                await addDoc(collection(db, "developers"), {
                    name: devForm.name.value,
                    email: devForm.email.value,
                    specialty: devForm.specialty.value,
                    skills: devForm.skills.value,
                    timestamp: Date.now()
                });

                devMsg.textContent = "Application submitted successfully!";
                devMsg.style.color = "lightgreen";

                devForm.reset();

            } catch (error) {
                devMsg.textContent = "Error submitting application.";
                devMsg.style.color = "red";
            }
        });
    }

    // =========================
    // CONTACT FORM (FIRESTORE)
    // =========================
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll("input, textarea");

            if (!validateForm(inputs)) {
                contactMsg.textContent = "Please fill all fields correctly.";
                contactMsg.style.color = "red";
                return;
            }

            contactMsg.textContent = "Sending...";
            contactMsg.style.color = "white";

            try {
                await addDoc(collection(db, "projects"), {
                    name: contactForm.name.value,
                    email: contactForm.email.value,
                    project: contactForm.project.value,
                    idea: contactForm.idea.value,
                    timestamp: Date.now()
                });

                contactMsg.textContent = "Project request sent successfully!";
                contactMsg.style.color = "lightblue";

                contactForm.reset();

            } catch (error) {
                contactMsg.textContent = "Error sending request.";
                contactMsg.style.color = "red";
            }
        });
    }

    // =========================
    // COUNTER ANIMATION
    // =========================
    const counters = document.querySelectorAll(".stats h3");

    counters.forEach(counter => {
        const target = parseInt(counter.innerText.replace(/\D/g, ""));
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
                counter.innerText =
                    counter.innerText.includes("%")
                        ? Math.floor(count) + "%"
                        : Math.floor(count) + "+";
            }
        }, 20);
    });

});

// =========================
// WHATSAPP FLOAT EFFECT
// =========================
const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {
    setInterval(() => {
        whatsapp.style.transform = "scale(1.1)";

        setTimeout(() => {
            whatsapp.style.transform = "scale(1)";
        }, 500);
    }, 2000);
}
