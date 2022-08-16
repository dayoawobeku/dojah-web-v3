import Hero from './Hero';
import Products from './Products';

export default function ProductsLayout({
  ALL_PRODUCTS,
  selectedProducts,
  setSelectedProducts,
}) {
  const handleProductChange = event => {
    setSelectedProducts(event.target.value);
  };
  return (
    <>
      <Hero
        input={
          <input
            value={selectedProducts}
            type="search"
            name=""
            id=""
            className="w-full max-w-full md:w-[698px] h-[50px] rounded"
            placeholder="Search product"
            onChange={handleProductChange}
          />
        }
      />
      <Products ALL_PRODUCTS={ALL_PRODUCTS} />
    </>
  );
}
