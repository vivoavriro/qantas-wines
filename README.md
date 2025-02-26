# Qantas Wine Test

![image](https://github.com/user-attachments/assets/7a988f61-e921-4d94-a7c7-f8bda63d1c87)


## Prerequisites

Ensure you have the following installed:

Node.js (Latest LTS recommended)

npm (for package management)

## Installation

Clone the repository and install dependencies:

## Install dependencies

npm install

## Running the Project

Start the development server:

```bash
npm run dev
```

This will start Vite's development server with hot module replacement (HMR).

## Building for Production

To build the application for production, run:

```bash
npm run build
```

The output will be available in the dist/ directory.

## Previewing the Build

To preview the built project locally:

```bash
npm run preview
```

## Linting and Formatting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Automatically fix linting issues:

```bash
npm run lint:fix
```

## Format code using Prettier:

```bash
npm run format
```

## Running Tests

Run the test suite:

```bash
npm run test
```

## Run tests in watch mode:

```bash
npm run test:watch
```

## Run tests with coverage:

```bash
npm run test:coverage
```

## Run specific test files or patterns:

```bash
npm run test:file -- testFileName
```

## **Technologies Used**

- **React** 19.0.0
- **TypeScript** ~5.7.2
- **Vite** 6.2.0
- **Vitest** 3.0.4

## **Project Approach**

### **Overview**

This project is a **React application** built with **TypeScript** and **Vite**. The goal is to implement a **carousel for product cards** for **Qantas Wine**.

### **Code Structure**

- **core/**: This folder separates core functionalities and reusable components from business logic.

  - assets/ - Contains icons (can also include fonts, logos, etc.).
  - components/ - Houses **design system components** and other **pure components**.
  - theme/ - Provides global styles, including font styles, color palettes, mixins, and other reusable attributes.

- **pages/**: Contains the main pages of the application.
- **services/**: Handles API calls and data fetching. Each service can be used directly or via a **custom hook**. Using a **custom hook** is beneficial when working with libraries like **React Query**, allowing for a **single source of truth** and caching with unique keys.
- **utils/**: Contains utility functions for common operations. (This folder could also be placed under core/.)

## **Libraries Used**

### **Vite**

- **Why?** Vite is a fast **build tool** and **development server**.
- **Pros**: Instant server start, optimized build process, modern JavaScript support.
- **Cons**: Relatively new, smaller community compared to Webpack.

- **Official Recommendation**: Vite is recommended by the official React website for new projects. [See here](https://react.dev/learn/build-a-react-app-from-scratch).

### **Styled-Components**

- **Why?** Allows writing **CSS-in-JS**, providing scoped styles.
- **Pros**: Scoped styles, dynamic styling, easy theming.
- **Cons**: Can lead to larger bundle sizes, runtime performance overhead.

### **Testing Library & Vitest**

- **Why?** Testing Library provides utilities for testing React components, and **Vitest** is a fast alternative to Jest.
- **Pros**: Encourages best practices, fast test execution.
- **Cons**: Jest has a larger community and more plugins.

## **Additional Notes & Decisions**

### **1\. Separation of core/ for a Monorepo-Like Architecture**

The **core/** folder helps modularize the project, mimicking a **monorepo** structure. In **monorepos**, code is broken down into **smaller libraries** for better separation of concerns.

### **2\. Choosing Styled-Components Over Tailwind/MUI**

The decision to use **styled-components** was based on **personal preference** and project requirements.While **TailwindCSS** or **MUI** could have been alternatives, styling choices depend on the **architecture and scalability needs** of the project.

### **3\. Keeping It Simple: No React Router / Next.js**

Since this is a **single-route test project**, we **avoided adding React Router** and **kept it simple with React instead of Next.js**.

### **4\. API Handling: RTK Query or React Query**

For real-world API calls, using **RTK Query** (over Redux) or **TanStack React Query** would be ideal for **query/mutation management**.

### **5\. Carousel Optimization with Lazy Loading**

For production, **lazy loading** would improve performance.

- We could use **IntersectionObserver API** to load carousel items dynamically.

### **6\. Storybook for Design System**

In a real-world project, **Storybook** would be beneficial for maintaining and showcasing **core components** in an isolated environment.

### **7\. Enhancing the Card Component**

If product URLs were available, the **Card component** could be developed as a **clickable link**.

### **8\. Memoization for Performance**

Some components **could** be memoized to **prevent unnecessary re-renders**.

- However, due to the **simplicity** of this project, **memoization isn’t necessary**.
- In some cases, **memoization can cause unnecessary computations** if not used carefully.

### **9\. Choosing Vitest Over Jest**

- **Why Vitest?** It has **better compatibility** with **Vite** and executes tests **faster**.
- **Jest Consideration**: Despite its **large community**, Jest might be **better for large-scale projects** at this time.
- **Vitest** is similar to Jest, making it easier for developers familiar with Jest to use it.

### **10\. Improving Image Quality & Responsiveness**

To improve card visuals:

- I **downloaded product images** from production instead of using random images.
- We could also implement **srcset** for responsive images, enhancing **performance and quality**.
- Additionally, a skeleton loader could be implemented to improve the loading experience. also to enhance initial page load time we could add lazy loading to img tag.

### **11\. Adding e2e test 
- To enhance the testing coverage, we can integrate Cypress or any other prefered framework for E2E testing. Cypress provides a robust framework for testing user interactions and application workflows. 

### **12\. More functionalities on Carousel 
The carousel already includes mobile swipe functionality, allowing users to smoothly navigate through items on touch devices.
we can add:
- Auto-play: Automatically cycles through carousel items.
- Infinite scroll: Loops items infinitely for a seamless experience.
- Keyboard navigation: Enables left/right arrow key support for desktop users.

