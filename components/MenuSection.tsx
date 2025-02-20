import MenuItem from './MenuItem';

interface MenuItemData {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuSectionProps {
  addToOrder: (item: { name: string; price: number }) => void; // Accept addToOrder as a prop
}

const MenuSection: React.FC<MenuSectionProps> = ({ addToOrder }) => {
  const menuItems: MenuItemData[] = [
    {
      name: 'Classic Hamburger',
      description:
        'A juicy beef patty with fresh lettuce, tomato, and our special sauce.',
      price: 10.99,
      image: '/images/burger1.jpg',
    },
    {
      name: 'Cheese Burger',
      description:
        'A classic hamburger topped with cheddar cheese and pickles.',
      price: 11.99,
      image: '/images/burger2.jpg',
    },
    {
      name: 'Bacon Burger',
      description: 'A cheeseburger topped with crispy bacon strips.',
      price: 12.99,
      image: '/images/burger3.jpg',
    },
    {
      name: 'Veggie Burger',
      description:
        'A plant-based patty with fresh lettuce, tomato, and vegan mayo.',
      price: 9.99,
      image: '/images/burger4.jpg',
    },
  ];

  return (
    <section id='menu' className='py-12 bg-[#FFFFFF]'>
      <h2 className='text-4xl font-bold text-center text-[#FF3D00] mb-8'>
        Our Menu
      </h2>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {menuItems.map((item) => (
          <MenuItem key={item.name} item={item} addToOrder={addToOrder} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
