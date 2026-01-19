import React, { useState, useEffect } from 'react';
const AnimatedTitle = () => {
    const roles = [
        "Web Developer",
        "UI/UX Designer",
        "Tech Enthusiast",
         "IT Student",
    ];

    const [currentRoleIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurText] = useState('');
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const current = roles[currentRoleIndex];
            
            if(!isDeleting){
                // Typing mode
                if(currentText.length < current.length){
                    setCurText(current.substring(0, currentText.length + 1));
                } else {
                    // Full text typed, wait then start deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting mode
                if(currentText.length > 0){
                    setCurText(current.substring(0, currentText.length - 1));
                } else {
                    // Text fully deleted, move to next role
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }
            }
        };
        
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

return (
    <div className="text-center md:text-start">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-outline pb-1">{currentText}</span>
            <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
        </h1>
    </div>
);
};

export default AnimatedTitle;