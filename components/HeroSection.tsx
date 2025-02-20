import burger1 from '@/public/images/burger1.jpg';

const HeroSection: React.FC = () => {
  return (
    <div
      className='relative h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${burger1.src})` }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 text-center text-white'>
        <h1 className='text-4xl md:text-6xl font-bold'>Welcome to Humburbom</h1>
        <p className='text-xl md:text-2xl mt-4'>
          Delicious food delivered to your table
        </p>
        <a
          href='#menu'
          className='mt-8 inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition'
        >
          View Menu
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
