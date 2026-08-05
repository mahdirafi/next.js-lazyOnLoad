 
# Next.js LazyOnLoad

A lightweight utility for **lazy loading components, scripts, and assets** in Next.js projects.  
This helps reduce initial bundle size, improve performance, and deliver a smoother user experience.

---

## Features
- Lazy load components when they enter the viewport  
- Defer scripts until needed  
- Optimize images with lazy loading  
- Simple API, minimal configuration  
- Boosts Next.js performance and Core Web Vitals  

---

## Installation
```bash
npm install next.js-lazyOnLoad
# or
yarn add next.js-lazyOnLoad
```

---

## Usage
```jsx
import { LazyOnLoad } from "next.js-lazyOnLoad";

export default function Page() {
  return (
    <div>
      <h1>Example with LazyOnLoad</h1>
      <LazyOnLoad>
        <HeavyComponent />
      </LazyOnLoad>
    </div>
  );
}
```

---

## Why LazyOnLoad?
- Reduce **initial page load time**  
- Improve **SEO ranking** with faster performance  
- Deliver a **better user experience** without extra complexity  

---

## Contributing
Contributions are welcome!  
Please open an issue or submit a pull request to suggest improvements.

---

## License
MIT License – free to use, modify, and distribute.

 