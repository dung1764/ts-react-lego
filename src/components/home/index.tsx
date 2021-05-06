const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="md:text-2xl text-xl bg-red-500 rounded-full text-white py-2 px-4">樂高教育精神，讓孩子自己動手做</h1>
      <p className="m-5 md:w-6/12 w-full">
        讓孩子們觀察周邊事物，利用積木模擬結構自行組裝，經由不斷測試重組與修正，了解其中的物理原理、機械結構，如剛性結構、柔性結構、齒輪、滑輪、槓桿、斜面、摩擦力等知識，其實學習可以很開心的
      </p>
      <div className="p-5 pt-56 md:pt-64 relative rounded-xl bg-red-500 md:w-6/12 w-full">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/Xs3hggQfaXY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      </div>
    </div>
  );
};

export default Home;
