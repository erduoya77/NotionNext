import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`back-to-top ${visible ? 'show' : ''}`} onClick={scrollToTop}>
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L6 8H11V22H13V8H18L12 2Z" />
            </svg>
        </div>
    );
};

export default BackToTopButton;