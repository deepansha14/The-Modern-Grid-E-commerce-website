import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { BagProvider } from './context/Bag_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.render(
  <Auth0Provider
    domain="dev-kxkg4rd4.us.auth0.com"
    clientId="PIdr4H3DLosUHm79qGRrlwieml8uAZm6"
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <BagProvider>
            <App />
          </BagProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider >,
  document.getElementById('root')
);

