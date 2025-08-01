'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const SplashScreens = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const router = useRouter();

    const slides = [
        {
            bg: "/images/splash1.png",
            logo: "/images/logo.png",
            title: "Bookings at a Glance",
            text: "Manage your appointments seamlessly with a clear view of your schedule. Easily manage last-minute changes and keep your calendar running smoothly!",
            buttons: [],
        },
        {
            bg: "/images/splash2.png",
            title: "Know your Numbers",
            text: "Dive into real-time analytics of your business performance. Track revenue, customer trends, and service stats to make smarter business decisions effortlessly.",
            buttons: [],
        },
        {
            bg: "/images/splash3.png",
            title: "Your Client Playbook",
            text: "Turn every client into a loyal regular with detailed profiles, service history, and tailored experiences that keep them coming back.",
            buttons: [
                { label: "Sign in", action: () => router.push("/auth/signin") },
                { label: "Sign up", action: () => router.push("/auth/signup") },
            ],
        },
    ];

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50 && currentSlide < slides.length - 1) {
            // Swipe left (next slide) - Only if not on the last slide
            setCurrentSlide((prev) => prev + 1);
        }
        if (touchStartX - touchEndX < -50 && currentSlide > 0) {
            // Swipe right (previous slide) - Only if not on the first slide
            setCurrentSlide((prev) => prev - 1);
        }
    };
    const goToNextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const goToPreviousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };
    return (
        <section className="onboarding">
            <div className="slider-container" onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)} onTouchEnd={handleTouchEnd}>
                <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide" style={{ backgroundImage: `url(${slide.bg})` }}>
                            <div className="container content">
                                {slide.logo && <Image src={slide.logo} width={450} height={150}  priority={index === 0} alt="logo" />}
                                <div className="content_inner">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.text}</p>
                                    {slide.buttons.length > 0 && (
                                        <div className="splash_buttons">
                                            {slide.buttons.map((button, i) => (
                                                <button key={i} onClick={button.action}>{button.label}</button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <span key={index} className={`dot ${currentSlide === index ? "active" : ""}`} onClick={() => setCurrentSlide(index)} />
                ))}
                <a href="auth/signin">Skip</a>
            </div>
            <div className="navigation-buttons">
                <button onClick={goToPreviousSlide} disabled={currentSlide === 0}>
                    <FaArrowLeftLong />
                </button>
                <button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
                    <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
};

export default SplashScreens;