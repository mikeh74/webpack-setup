# Webpack Setup

A modern webpack configuration template with Babel and React support for building JavaScript applications.

## Overview

This project provides a pre-configured webpack setup that includes:

- **Webpack 5** - Modern bundler with improved performance and features
- **Babel** - Transpile modern JavaScript (ES6+) and JSX
- **React 18** - Build user interfaces with the latest React version
- **ESLint** - Code quality and consistency with Standard style
- **Development Server** - Hot reloading for fast development

## Features

- ✅ Modern JavaScript (ES6+) support via Babel
- ✅ React and JSX transformation
- ✅ Hot Module Replacement (HMR) for development
- ✅ Production-ready builds with optimization
- ✅ Source maps for debugging
- ✅ ESLint integration for code quality
- ✅ Watch mode for automatic rebuilding

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone this repository or use it as a template
2. Install dependencies:

```bash
npm install
```

This will generate a `package-lock.json` file and install all required dependencies.

## Usage

### Development

Start the webpack development server with hot reloading:

```bash
npm start
```

Then open your browser to `http://localhost:8080`

### Build for Development

Create a development build without starting the server:

```bash
npm run build:dev
```

Output will be in the `dist` directory.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This will generate minified and optimized files in the `dist` directory.

### Watch Mode

Automatically rebuild when files change:

```bash
npm run watch
```

## Project Structure

```
webpack-setup/
├── src/
│   └── index.js          # Application entry point
├── dist/
│   ├── index.html        # HTML file for testing
│   └── main.js           # Compiled bundle (generated)
├── webpack.config.js     # Webpack configuration
├── package.json          # Project dependencies and scripts
├── .eslintrc.json       # ESLint configuration
└── README.md            # This file
```

## Configuration

### Webpack

The webpack configuration (`webpack.config.js`) includes:

- Entry point: `src/index.js`
- Output: `dist/main.js`
- Babel loader for `.js` and `.jsx` files
- Development server on port 8080
- Source maps enabled
- Hot module replacement

### Babel

Babel is configured to use:

- `@babel/preset-env` - Transform modern JavaScript
- `@babel/preset-react` - Transform JSX
- `@babel/plugin-transform-runtime` - Optimize helper usage

### ESLint

ESLint is configured with:

- Standard JavaScript style
- React plugin for JSX linting
- ES2021+ features support

## Customization

### Adding CSS Support

To add CSS/SCSS support, install loaders:

```bash
npm install --save-dev style-loader css-loader
```

Then add to `webpack.config.js`:

```javascript
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}
```

### Adding TypeScript Support

To add TypeScript support, install:

```bash
npm install --save-dev typescript ts-loader @types/react @types/react-dom
```

Then configure webpack to handle `.ts` and `.tsx` files.

### Adding Asset Support

Webpack 5 has built-in asset modules. Add rules for images, fonts, etc.:

```javascript
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource'
}
```

## Scripts

- `npm start` - Start development server with HMR
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run watch` - Watch files and rebuild on changes

## Browser Support

The setup targets modern browsers with ES6+ support. You can customize browser targets in the `package.json` Babel configuration or create a `.browserslistrc` file.

## Troubleshooting

### Module not found errors

Make sure all dependencies are installed:

```bash
npm install
```

### Port 8080 already in use

Change the port in `webpack.config.js` under `devServer.port`.

### Build errors

Check that your Node.js version is 14 or higher:

```bash
node --version
```

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
