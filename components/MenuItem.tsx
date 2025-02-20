import Image from 'next/image';

interface MenuItemProps {
  item: {
    name: string;
    description: string;
    price: number;
    image: string;
  };
  addToOrder: (item: { name: string; price: number }) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addToOrder }) => {
  const handleAddToOrder = () => {
    addToOrder({ name: item.name, price: item.price });
  };

  return (
    <div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-200 bg-[#F7F7F7]'>
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={300}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-[#FF3D00]'>{item.name}</h3>
        <p className='text-[#4A4A4A]'>{item.description}</p>
        <p className='text-xl font-bold mt-2 text-[#FF9800]'>
          ${item.price.toFixed(2)}
        </p>
        <button
          onClick={handleAddToOrder}
          className='mt-4 bg-[#FF5722] text-white py-2 px-4 rounded hover:bg-[#C62828] transition'
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
