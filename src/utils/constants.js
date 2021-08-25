import React from 'react'
import { GiSofa, GiBedLamp, GiComputerFan } from 'react-icons/gi'
export const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url: '/about',
    },
    {
        id: 3,
        text: 'products',
        url: '/products',
    },
]

export const services = [
    {
        id: 1,
        icon: <GiSofa />,
        title: 'Furniture',
        text:
            'Our Online furniture site provides various furniture for your Living Room, Bed Room, Dining Room, and Modular Kitchen. We offer a range of products from Sofa sets to recliners which are inspired by modern designs. We also provide Home Furniture at our offline furniture stores across India.',
    },
    {
        id: 2,
        icon: <GiBedLamp />,
        title: 'Decor',
        text:
            'We provide a good assortment of home decor products and accessories to suit all our customers’ requirements and style. Our variety of decor items include lightings, vases, figurines, photo frames, clocks and wall decor.',
    },
    {
        id: 3,
        icon: <GiComputerFan />,
        title: 'Hindware',
        text:
            'we bring you the daily home essentials - The Air Purifier and the Water Purifier. Equipped with State of the art technology, these appliances are sure to make you love the way you feel at home. Ranging from Built-in Hobs, Cooktops and Induction Cooktops to Chimneys and Dish Washers',
    },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`