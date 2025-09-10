export default function ProductCard({ product }) {
  return (
    <div className="artisanal-card p-4">
      <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
        {product.category}
      </span>

      <div className="flex justify-center my-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 object-contain"
        />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-foreground">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
        <span className="font-bold text-primary text-lg">{product.price}</span>
      </div>
    </div>
  )
}