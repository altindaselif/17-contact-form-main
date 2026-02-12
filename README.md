# Contact Form Component ✉️

A fully responsive contact form built with **Vanilla JavaScript** and **CSS Grid**. This project focuses on client-side form validation, accessibility (a11y) and state management without relying on the browser's default validation UI.

## 🚀 Overview

The goal was to build a visually engaging form that provides immediate feedback to the user. The project handles comprehensive validation logic—including email regex checks and custom radio/checkbox states—and displays a timed success toast message upon valid submission.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/17-contact-form-main/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/17-contact-form-main)

## 💡 Key Features

- **✅ Custom Validation:** JavaScript-driven validation for required fields, email format patterns and radio/checkbox selection.
- **🍞 Success Feedback:** A dynamic toast message appears upon successful submission and auto-dismisses after 5 seconds.
- **♿ Accessibility:** Full semantic HTML using `aria-describedby` for error linkage and `aria-live` for status updates.
- **🎨 Custom Form Controls:** Styled radio buttons and checkboxes using CSS instead of default browser styles.
- **📐 Responsive Layout:** Utilizes **CSS Grid** for the desktop layout (dual-column) and switches to a stacked layout on mobile devices.

## 🛠️ Technical Implementation

### 1. Accessible Error Handling

To ensure the form is usable by screen readers, error messages needed to be programmatically linked to their inputs.

- **Solution:** I utilized the `aria-describedby` attribute on input fields pointing to the ID of the error span. Additionally, the `showError()` and `clearError()` helper functions dynamically toggle the visibility of these alerts, ensuring the DOM stays clean.

### 2. Real-Time UX Improvements

Standard validation often leaves error messages on screen even after the user fixes the issue, leading to confusion.

- **Solution:** Implemented event listeners for `input` and `change` events. The moment a user interacts with a flagged field, the error state is cleared immediately, providing a smoother user experience compared to validate-on-submit only.

## 📸 Screenshots

- [View Desktop Version](https://www.google.com/search?q=./desktop-screenshot.png)
- [View Mobile Version](https://www.google.com/search?q=./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Custom Properties)**
- **CSS Grid & Flexbox**
- **Vanilla JavaScript (ES6+)**
- **Desktop-First Workflow**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
