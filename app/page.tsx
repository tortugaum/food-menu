'use client';
import Head from 'next/head';
import { useState } from 'react';
import MenuSection from '../components/MenuSection';
import OrderSection from '../components/OrderSection';
import HeroSection from '@/components/HeroSection';

const Home: React.FC = () => {
  const [orderItems, setOrderItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  const addToOrder = (item: { name: string; price: number }) => {
    setOrderItems((prev) => {
      const existingItem = prev.find((i) => i.name === item.name);
      if (existingItem) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (itemName: string) => {
    setOrderItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  const updateQuantity = (itemName: string, quantity: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity } : item
      )
    );
  };

  return (
    <>
      <Head>
        <title>Humburbom - Delicious Burgers</title>
        <meta
          name='description'
          content='Order your favorite burgers from Humburbom!'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto px-4'>
        <HeroSection />
        <MenuSection addToOrder={addToOrder} />
        <OrderSection
          orderItems={orderItems}
          removeFromOrder={removeFromOrder}
          updateQuantity={updateQuantity}
        />
      </main>
    </>
  );
};

export default Home;
