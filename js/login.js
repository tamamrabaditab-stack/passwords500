// ==================== TRANSLATIONS ====================
const translations = {
    ar: {
        navHome: "الصفحة الرئيسية",
        navArticles: "المقالات",
        navConsult: "الاستشارات",
        navContact: "تواصل معنا",
        welcome: "أهلاً وسهلاً",
        infoDesc: "منصة طبية متقدمة توفر استشارات من أفضل الأطباء المتخصصين",
        secure: "آمن وموثوق",
        secureDesc: "تشفير عسكري لحماية بيانات المستخدمين",
        experts: "خبراء مختصون",
        expertsDesc: "فريق من أفضل الأطباء والمتخصصين",
        support: "دعم ٢٤/٧",
        supportDesc: "متاح في أي وقت لمساعدتك",
        loginTitle: "تسجيل الدخول",
        loginSubtitle: "ادخل بيانات حسابك للمتابعة",
        userLabel: "اسم المستخدم أو البريد الإلكتروني",
        passLabel: "كلمة المرور",
        btnText: "دخول",
        rememberMe: "تذكرني",
        forgot: "نسيت كلمة المرور؟",
        or: "أو",
        noAccount: "ليس لديك حساب؟",
        signup: "انشئ حساباً جديداً",
        errors: {
            usernameRequired: "اسم المستخدم مطلوب",
            emailInvalid: "البريد الإلكتروني غير صحيح",
            passwordRequired: "كلمة المرور مطلوبة",
            passwordShort: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
        },
        success: "تم تسجيل الدخول بنجاح!",
        dir: "rtl"
    },
    en: {
        navHome: "Home",
        navArticles: "Articles",
        navConsult: "Consultations",
        navContact: "Contact",
        welcome: "Welcome Back",
        infoDesc: "Advanced medical platform providing consultations from top specialist doctors",
        secure: "Secure & Trusted",
        secureDesc: "Military-grade encryption to protect your data",
        experts: "Expert Specialists",
        expertsDesc: "Team of the best doctors and specialists",
        support: "24/7 Support",
        supportDesc: "Always available to help you",
        loginTitle: "Login",
        loginSubtitle: "Enter your credentials to continue",
        userLabel: "Username or Email",
        passLabel: "Password",
        btnText: "Sign In",
        rememberMe: "Remember me",
        forgot: "Forgot password?",
        or: "Or",
        noAccount: "Don't have an account?",
        signup: "Create a new account",
        errors: {
            usernameRequired: "Username is required",
            emailInvalid: "Invalid email address",
            passwordRequired: "Password is required",
            passwordShort: "Password must be at least 6 characters",
        },
        success: "Login successful!",
        dir: "ltr"
    },
    fr: {
        navHome: "Accueil",
        navArticles: "Articles",
        navConsult: "Consultations",
        navContact: "Contact",
        welcome: "Bienvenue",
        infoDesc: "Plateforme médicale avancée offrant des consultations des meilleurs médecins spécialistes",
        secure: "Sécurisé et fiable",
        secureDesc: "Chiffrement militaire pour protéger vos données",
        experts: "Spécialistes experts",
        expertsDesc: "Équipe des meilleurs médecins et spécialistes",
        support: "Support 24/7",
        supportDesc: "Toujours disponible pour vous aider",
        loginTitle: "Connexion",
        loginSubtitle: "Entrez vos identifiants pour continuer",
        userLabel: "Nom d'utilisateur ou Email",
        passLabel: "Mot de passe",
        btnText: "Se connecter",
        rememberMe: "Se souvenir de moi",
        forgot: "Mot de passe oublié?",
        or: "Ou",
        noAccount: "Vous n'avez pas de compte?",
        signup: "Créer un nouveau compte",
        errors: {
            usernameRequired: "Le nom d'utilisateur est requis",
            emailInvalid: "Adresse email invalide",
            passwordRequired: "Le mot de passe est requis",
            passwordShort: "Le mot de passe doit contenir au moins 6 caractères",
        },
        success: "Connexion réussie!",
        dir: "ltr"
    }
};

// ==================== LANGUAGE CHANGE ====================
function changeLanguage() {
    const lang = document.getElementById('langSelector').value;
    const data = translations[lang];

    // Update all elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
            el.textContent = data[key];
        }
    });

    // Change direction
    document.documentElement.dir = data.dir;
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    document.getElementById('langSelector').value = savedLang;
    changeLanguage();
});

// ==================== PASSWORD TOGGLE ====================
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', (e) => {
        e.preventDefault();
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Change icon
        const icon = togglePassword.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
}

// ==================== FORM VALIDATION ====================
const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput2 = document.getElementById('password');
const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateUsername() {
    const value = usernameInput.value.trim();
    const data = translations[document.documentElement.lang];
    
    if (!value) {
        usernameError.textContent = data.errors.usernameRequired;
        return false;
    }
    
    if (value.includes('@') && !isValidEmail(value)) {
        usernameError.textContent = data.errors.emailInvalid;
        return false;
    }
    
    usernameError.textContent = '';
    return true;
}

function validatePassword() {
    const value = passwordInput2.value;
    const data = translations[document.documentElement.lang];
    
    if (!value) {
        passwordError.textContent = data.errors.passwordRequired;
        return false;
    }
    
    if (value.length < 6) {
        passwordError.textContent = data.errors.passwordShort;
        return false;
    }
    
    passwordError.textContent = '';
    return true;
}

// Real-time validation
if (usernameInput) {
    usernameInput.addEventListener('blur', validateUsername);
    usernameInput.addEventListener('change', validateUsername);
}

if (passwordInput2) {
    passwordInput2.addEventListener('blur', validatePassword);
    passwordInput2.addEventListener('change', validatePassword);
}

// ==================== FORM SUBMISSION ====================
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate both fields
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
        
        if (!isUsernameValid || !isPasswordValid) {
            return;
        }
        
        // Add loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>جاري التحقق...</span>';
        
        // Simulate API call (replace with actual API call)
        setTimeout(() => {
            const data = translations[document.documentElement.lang];
            
            // Show success message
            showNotification(data.success, 'success');
            
            // Log the form data
            console.log('Login attempt:', {
                username: usernameInput.value,
                rememberMe: document.getElementById('remember-me')?.checked
            });
            
            // Reset form and button
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            usernameError.textContent = '';
            passwordError.textContent = '';
            
            // Redirect after 2 seconds (replace with actual redirect)
            setTimeout(() => {
                // window.location.href = '/dashboard';
            }, 2000);
        }, 1500);
    });
}

// ==================== NOTIFICATION ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add notification styles dynamically if not already added
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                backdrop-filter: blur(10px);
                animation: slideInNotification 0.3s ease-out;
                z-index: 10000;
            }
            
            .notification-success {
                background: rgba(6, 214, 160, 0.15);
                border: 1px solid rgb(6, 214, 160);
                color: rgb(6, 214, 160);
            }
            
            .notification-info {
                background: rgba(0, 102, 204, 0.15);
                border: 1px solid rgb(0, 102, 204);
                color: rgb(0, 102, 204);
            }
            
            .notification-error {
                background: rgba(239, 71, 111, 0.15);
                border: 1px solid rgb(239, 71, 111);
                color: rgb(239, 71, 111);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                font-weight: 500;
            }
            
            .notification-content i {
                font-size: 1.2rem;
            }
            
            @keyframes slideInNotification {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOutNotification {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ==================== SOCIAL LOGIN ====================
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = btn.classList.contains('google-btn') ? 'Google' : 'Apple';
        console.log(`Login with ${provider}`);
    });
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && form && form.contains(document.activeElement)) {
        form.dispatchEvent(new Event('submit'));
    }
});

// ==================== SECURITY: Clear sensitive data on unload ====================
window.addEventListener('beforeunload', () => {
    if (!document.getElementById('remember-me')?.checked) {
        if (form) form.reset();
    }
});
