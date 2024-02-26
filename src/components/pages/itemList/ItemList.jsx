import { ProductCard } from "../../common/ProductCard"

export const ItemList = ({elements}) => {

  return (
		<div>
			{
				elements.map(({id, img, title, description, price, stock, category })=>{
					return(
					<ProductCard 
						key={id}
						img={img}
						title={title}
						description={description}
						price={price}
						stock={stock}
						category={category}
					/>
					)
					

				})
			}
		</div>
  )
}
