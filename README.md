# Apple Basket Task

A simple React application that demonstrates state management through an interactive apple-moving interface between two baskets.

## Features

- Two baskets with apples that can be moved between them
- Interactive buttons with arrow indicators for moving apples
- Real-time count updates for each basket
- Total of 10 apples that can be distributed between baskets

## Tech Stack

- React 18.3.1
- Parcel 2.13.0 (bundler)

## Project Structure

```
AppleBasketTask/
├── components/           # React components
│   ├── AppleBasket.js   # Individual basket component
│   ├── AppleCounter.js  # Main component managing apple distribution
│   └── Button.js        # Reusable button component
├── assets/              # Static assets
│   └── image/          
│       ├── left-arrow.png
│       └── right-arrow.png
├── App.js               # Root component
└── index.js            # Application entry point
```



## How It Works

The application maintains a state of apple distribution between two baskets. Users can:
- Move apples from left basket to right basket using the right arrow button
- Move apples from right basket to left basket using the left arrow button
- The total number of apples remains constant (10)
- Buttons are disabled when the source basket is empty

## Dependencies

- react: ^18.3.1
- react-dom: ^18.3.1
- parcel: ^2.13.0 (dev dependency)
- process: ^0.11.10 (dev dependency)
