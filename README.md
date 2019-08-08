# react-houston

> A simple countdown component for React

[![NPM](https://img.shields.io/npm/v/react-houston.svg)](https://www.npmjs.com/package/react-houston) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-houston
```

## Usage

```jsx
import React from 'react';
// Import Countdown component
import Countdown from 'react-houston';
// Import CSS for default styling
import 'react-houston/dist/css/houston.css';

const Example = () => {
  return <Countdown endDate={new Date('December 25, 2019 00:00:00')} />;
};

export default Example;
```

### Props

React Houston takes exactly **one** prop: `endDate`. It must be a valid date object.

| Name    | Type | Required |
| ------- | ---- | -------- |
| endDate | Date | true     |

### Using a default timezone

In many cases you may find the need to end the countdown on a specific time in a specific timezone. To do that, include the timezone in the date object like `new Date('December 25, 2019 00:00:00 EST)`.

If you needed the countdown to expire on Christmas Day at midnight in San Francisco, the example above could be written like so:

```jsx
import React from 'react';

import Countdown from 'react-houston';
// Import CSS for default styling
import 'react-houston/dist/css/houston.css';

const Example = () => {
  return <Countdown endDate={new Date('December 25, 2019 00:00:00 PST')} />;
};

export default Example;
```

> Note that any valid timezone can be used. See a list of valid timezones [here](https://gist.github.com/rxaviers/8481876).

### Customize styles

React Houston uses simple css for the default styling. Be sure to import `houston.css` if you want to use the defaults. You can, of course, customize the styles by adding your own css. Just be sure to use the proper class names. The default styles are listed below for reference:

```css
.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.countdown__item {
  color: #111;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 30px;
  margin: 10px;
  padding-top: 10px;
  position: relative;
  width: 100px;
  height: 100px;
}

.countdown__item span {
  color: #333;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
```

## Todo

- Add test for countdown calculation
- Make customizing styles more convenient

## License

MIT © [Geoff Selby](https://github.com/GeoffSelby)
