import React from 'react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderSectionProps {
  orderItems: OrderItem[];
  removeFromOrder: (itemName: string) => void; // Accept removeFromOrder as a prop
  updateQuantity: (itemName: string, quantity: number) => void; // Accept updateQuantity as a prop
}

const OrderSection: React.FC<OrderSectionProps> = ({
  orderItems,
  removeFromOrder,
  updateQuantity,
}) => {
  const contact = '5512988747080';

  const calculateTotalPrice = () => {
    return orderItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleOrderNow = () => {
    const orderMessage = orderItems
      .map(
        (item) =>
          `- Item: ${item.name} \n- Quantity: ${item.quantity} \n- Total: $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n');
    const total = calculateTotalPrice();
    const whatsappMessage = `Order details: \n${orderMessage} \n- Total Price: $${total}`;
    const whatsappUrl = `https://wa.me/${contact}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className='py-12 bg-[#FFFFFF]'>
      <h2 className='text-4xl font-bold text-center text-[#FF3D00] mb-8'>
        Your Order
      </h2>
      <div className='mt-8 max-w-md mx-auto bg-[#F7F7F7] p-6 rounded-lg shadow-lg'>
        {orderItems.length === 0 ? (
          <p className='text-center text-[#4A4A4A]'>No items in your order.</p>
        ) : (
          <div>
            <ul className='space-y-4'>
              {orderItems.map((item) => (
                <li
                  key={item.name}
                  className='flex justify-between items-center text-[#4A4A4A]'
                >
                  <span>{item.name}</span>
                  <span className='flex items-center'>
                    <button
                      onClick={() =>
                        updateQuantity(item.name, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1} // Disable if quantity is 1
                      className='bg-gray-300 text-gray-700 py-1 px-2 rounded-l hover:bg-gray-400 transition'
                    >
                      -
                    </button>
                    <span className='mx-2'>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.name, item.quantity + 1)
                      }
                      className='bg-gray-300 text-gray-700 py-1 px-2 rounded-r hover:bg-gray-400 transition'
                    >
                      +
                    </button>
                    <span className='ml-4'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromOrder(item.name)}
                      className='ml-4 text-red-500 hover:text-red-700 transition'
                    >
                      Remove
                    </button>
                  </span>
                </li>
              ))}
            </ul>
            <h3 className='mt-4 text-xl font-bold text-[#FF9800]'>
              Total: ${calculateTotalPrice()}
            </h3>
            <button
              onClick={handleOrderNow}
              className='mt-4 w-full bg-[#FF5722] text-white py-2 px-4 rounded hover:bg-[#C62828] transition'
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderSection;
