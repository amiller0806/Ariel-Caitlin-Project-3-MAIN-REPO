import { useQuery } from '@apollo/client';
import { PRODUCT_BY_CATEGORY } from '../utils/queries';

const Products = ({onProductSelected}) => {

    const {loading, error, data} = useQuery(PRODUCT_BY_CATEGORY);

    if(loading) return 'Loading...';

    if(error) return `Error! ${error.message}`;
       

    return (
        <select name='product' onChange={onProductSelected}>
            {data.products.map((product) => (
                <option key={product._id} value={product.title}>
                    {product.title}
                </option>
            ))}
        </select>
    )
}

export default Products