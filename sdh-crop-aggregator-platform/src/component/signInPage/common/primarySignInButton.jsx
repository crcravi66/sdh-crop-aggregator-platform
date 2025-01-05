const PrimarySignInButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="w-[327px] h-[44px] bg-[#4660b6] rounded-full flex items-center justify-center hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
    >
      <span className="font-poppins text-[#FFFFFF] text-sm font-medium leading-6">
       {text}
      </span>
    </button>
  );
};

export default PrimarySignInButton; 