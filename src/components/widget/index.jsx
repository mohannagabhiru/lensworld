import React, { useEffect, useState } from 'react'

function Index() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await fetch('https://dummyjson.com/test');
    const modified = await result.json();
    setProducts(modified);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>Its a poll widget</div>
  )
}

export default Index