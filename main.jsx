import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './global.scss'
import Homepage from './Hompage.jsx'
import Aboutus from './Aboutus.jsx'
import Registration from './Registration.jsx'
import PageNotFound from './Not-Found.jsx'
import Contactus from './Contactus.jsx'
import FAQs from './FAQs.jsx'
import Franchising from './Franchising.jsx'
import LabTests from './LabTests.jsx'
import Locations from './Locations.jsx'
import Shipping from './Shipping.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import Sitemap from './Sitemap.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <Homepage/>,
  errorElement: <PageNotFound/>
},
{
  path:'/aboutus',
  element: <Aboutus/>
},
{
  path:'/registration',
  element:<Registration/>
},
{
path: '/contactus',
element: <Contactus/>,
},
{
path:'/faqs',
element: <FAQs/>
},
{
path:'/franchising',
element:<Franchising/>
},
{
  path:'/labtests',
  element: <LabTests/>
},
{
  path:'/locations',
  element:<Locations/>
},
{
path: '/shipping',
element: <Shipping/>,
},
{
path:'/shop',
element: <Shop/>
},
{
path:'/cart',
element:<Cart/>
},
{
path:'/sitemap',
element:<Sitemap/>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
