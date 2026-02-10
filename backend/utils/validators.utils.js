/**
 * Password must be at least 8 characters, contain 1 uppercase letter and 1 number
 */
export const validatePassword = (password) => {
    const errors = [];

    if (!password || password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least 1 uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least 1 number");
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
