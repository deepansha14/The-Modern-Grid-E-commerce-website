import React from 'react'

// Importing the context
import { useFilterContext } from '../context/filter_context'

// Importing the components
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
    const { filtered_products: products, grid_view } = useFilterContext()
    if (products.length < 1) {
        return (
            <h5 style={{ textTransform: 'none' }}>
                Sorry, no such products found...
            </h5>
        )
    }
    if (grid_view === false) {
        return <ListView products={products} />
    }
    return <GridView products={products}>Product list</GridView>
}

export default ProductList