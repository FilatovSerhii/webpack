// file path: /polyfills/array-flatMap.js

// здесь никакие экспорты не нужны

console.log('polyfill for flatMap');

Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function flatMap() {
    // ... implementation for older browsers
  };
