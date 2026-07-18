# IEEE 754 Viewer

![GitHub License](https://img.shields.io/github/license/phenomenonus/ieee-754-viewer?color=blue)

[IEEE 754 standard visualization](https://phenomenonus.github.io/ieee-754-viewer/)

_APP does not claim to replace the standard or be the final authority. Its purpose is to facilitate understanding of the standard._

---

## Table of contents

- [Configuration](#configuration)
  - [Localization](#localization)
    - [Namespaces](#namespaces)
    - [Languages](#languages)
- [Development](#development)
  - [Quick start](#quick-start)
    - [Installation](#installation)
    - [Running](#running)
    - [Building](#building)
    - [Formatting and Linting](#formatting-and-linting)
- [Links](#links)
  - [Development](#development-1)
  - [Math](#math)
  - [Computer Science](#computer-science)
- [Copyright and License](#copyright-and-license)

---

## Configuration

### Localization

A language-region code is a two-letter language and two-letter region joined by a hyphen (ISO 639-1 + ISO 3166-1 alpha-2), e.g. "en-GB". Codes are defined in src/utils/language.ts (LanguageRegion).

#### Namespaces

1. Add/remove JSON files under `i18n/locales/<lang-region>/<namespace>.json` for each language.
2. Edit src/i18n/nsMap.ts
   - Import one language copy: `import myNs from "./locales/en-GB/myNs.json";`
   - Add/remove entry in NsMap:
     ```ts
     export type NsMap = {
       common: typeof common;
       error: typeof error;
       myNs: typeof myNs; // example of new namespace
     };
     ```
3. Edit src/i18n/namespaces.ts
   - Add/remove namespace in `ns`:
     ```ts
     export const ns: Ns = ["common", "error", "myNs"];
     ```
   - Optionally set `defaultNS`:
     ```ts
     export const defaultNS: NsUnion = "myNs";
     ```

#### Languages

1. Create/remove folder `i18n/locales/<lang-region>/`.
2. Add/remove JSON files for every namespace inside that folder.
3. Edit src/i18n/languages.ts
   - Update `supportedLngs`:
     ```ts
     export const supportedLngs = [LanguageRegion.EN_GB, LanguageRegion.RU_RU] as const;
     ```
   - Optionally set `defaultLng`:
     ```ts
     export const defaultLng = LanguageRegion.EN_GB;
     ```

---

## Development

Follow the conventions/practices/rules described in [this repository](https://github.com/phenomenonus/development-guidelines/blob/main/README.md).

### Quick start

Follow the steps below to start development quickly.

---

#### Installation

Install the required packages using [npm](https://github.com/npm/cli) with the following command:

```sh
npm install
```

---

#### Running

Start the development server with the following command:

```sh
npm run dev
```

---

#### Building

Build the project with the following command:

```sh
npm run build
```

---

#### Formatting and Linting

You can format and lint the project after editing:

```sh
npm run format:check # Prettier check
npm run format       # Format files
npm run lint         # ESLint check
npm run lint:fix     # ESLint autofix
```

These checks are also run automatically before each commit via Git hooks (Husky + lint-staged), ensuring that code is formatted and validated before it is committed.

> The project uses [Prettier](https://prettier.io/) for code formatting and [ESLint](https://eslint.org/) for code quality checks.

---

## Links

### Development

- [development-guidelines](https://github.com/phenomenonus/development-guidelines) - Summary of development conventions — a concise overview of the project's rules and practices
- [Vite](https://vite.dev/) – build tool for faster development
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/tree/main) – Vite plugin for React support
  - [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Vite plugin to transform SVGs into React components
- [TypeScript](https://www.typescriptlang.org/) – typed superset of JavaScript
- [React](https://react.dev/) - front-end framework
- [Zustand](https://zustand.docs.pmnd.rs/learn/getting-started/introduction) - A small, fast, and scalable bearbones state management solution
- [react-i18next](https://react.i18next.com/) react-i18next is a powerful internationalization framework for React based on [i18next](https://www.i18next.com/)
- [fluentui](https://github.com/microsoft/fluentui) - a collection of utilities, React components, and Web Components for building web applications
- [griffel](https://griffel.js.org/) - runtime CSS-in-JS engine
- [Eslint](https://eslint.org/) - tool for fixing, finding, formatting
- [Prettier](https://prettier.io/) - formatter
- [commitlint](https://commitlint.js.org/) - Lint commit messages
- [Husky](https://typicode.github.io/husky/) - Automatically lint your commit messages, code, and run tests upon committing or pushing
- [lint-staged](https://github.com/lint-staged/lint-staged) - Run tasks like formatters and linters against staged git files and don't let 💩 slip into your code base
- [CI](https://docs.github.com/en/actions/get-started) - GitHub Actions

---

### Math

- [Number](https://en.wikipedia.org/wiki/Number)
- [Numeral system](https://en.wikipedia.org/wiki/Numeral_system)
- [Fractional part](https://en.wikipedia.org/wiki/Fractional_part)
- [Arithmetic](https://en.wikipedia.org/wiki/Arithmetic)
  - [Addition](https://en.wikipedia.org/wiki/Addition)
  - [Subtraction](https://en.wikipedia.org/wiki/Subtraction)
  - [Multiplication](https://en.wikipedia.org/wiki/Multiplication)
  - [Division](<https://en.wikipedia.org/wiki/Division_(mathematics)>)
  - [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation)
  - [Nth_root (root extraction)](https://en.wikipedia.org/wiki/Nth_root)
  - [Logarithm](https://en.wikipedia.org/wiki/Logarithm)
    - [Common logarithm](https://en.wikipedia.org/wiki/Common_logarithm)
    - [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm)
    - [Binary logarithm](https://en.wikipedia.org/wiki/Binary_logarithm)
    - [e (mathematical constant or Euler's number)](https://en.wikipedia.org/wiki/E_%28mathematical_constant%29)

---

### Computer Science

- [Bit](https://en.wikipedia.org/wiki/Bit)
- [Bit numbering](https://en.wikipedia.org/wiki/Bit_numbering)
- [Byte](https://en.wikipedia.org/wiki/Byte)
- [Endianness](https://en.wikipedia.org/wiki/Endianness)
- [Bitwise operation](https://en.wikipedia.org/wiki/Bitwise_operation)
- [Primitive data type](https://en.wikipedia.org/wiki/Primitive_data_type)

---

- [Radix](https://en.wikipedia.org/wiki/Radix)
- [Computer number format(representation)](https://en.wikipedia.org/wiki/Computer_number_format)
- [Hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal)
  - [Bit pattern](https://en.wikipedia.org/wiki/Hexadecimal#Bit_pattern)
  - [Exponential notation](https://en.wikipedia.org/wiki/Hexadecimal#Exponential_notation)
- [Decimal](https://en.wikipedia.org/wiki/Decimal)
- [Binary number](https://en.wikipedia.org/wiki/Binary_number)

---

- [Infix notation](https://en.wikipedia.org/wiki/Infix_notation)
- [Polish notation](https://en.wikipedia.org/wiki/Polish_notation)
- [Reverse Polish notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation)
- [Shunting yard algorithm](https://en.wikipedia.org/wiki/Shunting_yard_algorithm)

---

- [American Standard Code for Information Interchange (ASCII)](https://en.wikipedia.org/wiki/ASCII)
- [Unicode](https://en.wikipedia.org/wiki/Unicode)
  - [Unicode block](https://en.wikipedia.org/wiki/Unicode_block)

---

- [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754)
  - [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985)
  - [IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754-2008_revision)
- [Floating point in modern computers](https://en.wikipedia.org/wiki/Floating-point_arithmetic#IEEE_754:_floating_point_in_modern_computers)
- [Significand](https://en.wikipedia.org/wiki/Significand)
- [Exponent bias](https://en.wikipedia.org/wiki/Exponent_bias)
- [Sign bit](https://en.wikipedia.org/wiki/Sign_bit)
- [Offset binary (bias)](https://en.wikipedia.org/wiki/Offset_binary)
- [Subnormal number](https://en.wikipedia.org/wiki/Subnormal_number)
- [Extended precision](https://en.wikipedia.org/wiki/Extended_precision)
- [Scientific notation](https://en.wikipedia.org/wiki/Scientific_notation)
- [Arbitrary-precision arithmetic](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic)

---

## Copyright and License

Copyright © 2026 [Mikhail Prugov](https://github.com/phenomenonus). Code released under the [MIT License](./LICENSE).
