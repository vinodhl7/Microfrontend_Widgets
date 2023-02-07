# l7-order-list-widget

> Listing all orders as well as orders filtered by customer id

[![NPM](https://img.shields.io/npm/v/l7-order-list-widget.svg)](https://www.npmjs.com/package/l7-order-list-widget) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save l7-order-list-widget
```

## Usage

```jsx
import React, { Component } from 'react'

import OrderListWidget from 'l7-order-list-widget'
import 'l7-order-list-widget/dist/index.css'

class Example extends Component {
  // to list all orders
  render() {
    return <OrderListWidget isRecentOrders={false}  />
  }
}

class Example extends Component {
  // to list a customers order
  render() {
    return <OrderListWidget isRecentOrders={true} customerId={customerId} />
  }
}
```

## License

MIT © [simonlit7](https://github.com/simonlit7)
