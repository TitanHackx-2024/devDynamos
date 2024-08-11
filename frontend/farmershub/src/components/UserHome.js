import React, { useState, useEffect, useRef } from 'react';
import { FluentProvider, webLightTheme, Spinner } from '@fluentui/react-components'; // Import Spinner for loading indication
import MenuBar from './menubar/menubar'; // Adjust import path as necessary
import { Stack } from '@fluentui/react';
import Card from './Card';
import productsData from '../sampleData/productdata.json'; // Import the JSON file

const PAGE_SIZE = 20; // Number of products to fetch per page

const UserHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const page = useRef(0);
  const dataLength = productsData.length;

  // Function to fetch products
  const fetchProducts = async (startIndex, count) => {
    // Simulate fetching data with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let newProducts = [];
    
    // Loop through data if needed
    for (let i = startIndex; i < startIndex + count; i++) {
      newProducts.push(productsData[i % dataLength]); // Loop back to start
    }
    
    return newProducts;
  };

  // Function to load more products
  const loadMoreProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newProducts = await fetchProducts(page.current * PAGE_SIZE, PAGE_SIZE);
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      page.current += 1;
      if (newProducts.length < PAGE_SIZE) {
        setHasMore(false); // Optional: Handle the case where you don't want to load more
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    } finally {
      setLoading(false);
    }
  };

  // Use IntersectionObserver to detect when to load more products
  const observer = useRef();
  const lastProductRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreProducts();
      }
    });
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    loadMoreProducts(); // Initial load
  }, []);

  return (
    <FluentProvider theme={webLightTheme}>
      <Stack>
        {/* Menu Bar */}
        <MenuBar />
        {/* Main Content */}
        <Stack
          tokens={{ padding: '20px', childrenGap: '20px' }} // Add gap between items if needed
          styles={{
            root: {
              padding: '20px 0', // Padding above and below
              display: 'flex',
              flexDirection: 'row', // Arrange cards in a row
              flexWrap: 'wrap', // Wrap to the next line if needed
              justifyContent: 'space-between', // Space out cards evenly
            },
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={index === products.length - 1 ? lastProductRef : null}
            >
              <Card product={product} />
            </div>
          ))}
          {loading && (
            <Stack
              horizontal
              verticalAlign="center"
              horizontalAlign="center"
              styles={{ root: { margin: '20px 0' } }} // Add margin for spacing
            >
              <Spinner label="Loading more products..." />
            </Stack>
          )}
        </Stack>
      </Stack>
    </FluentProvider>
  );
};

export default UserHome;
