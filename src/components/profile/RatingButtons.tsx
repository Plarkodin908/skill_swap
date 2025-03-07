
const RatingButtons = () => {
  return (
    <div className="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-start text-2xl items-center shadow-xl z-10 bg-dark-purple border border-primary-purple/20 gap-2 p-3 rounded-full">
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Like'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-2 cursor-pointer hover:scale-125 bg-primary-purple/10 dark:bg-primary-purple/10 rounded-full p-2 px-3">
        👍
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Cheer'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-2 cursor-pointer hover:scale-125 bg-primary-purple/10 dark:bg-primary-purple/10 rounded-full p-2 px-3">
        👏🏻
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Celebrate'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-2 cursor-pointer hover:scale-125 bg-primary-purple/10 dark:bg-primary-purple/10 rounded-full p-2 px-3">
        🎉
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Appreciate'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-2 cursor-pointer hover:scale-125 bg-primary-purple/10 dark:bg-primary-purple/10 rounded-full p-2 px-3">
        ✨
      </button>
      <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Smile'] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-2 cursor-pointer hover:scale-125 bg-primary-purple/10 dark:bg-primary-purple/10 rounded-full p-2 px-3">
        🙂
      </button>
    </div>
  );
};

export default RatingButtons;
