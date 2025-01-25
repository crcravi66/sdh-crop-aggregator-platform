// Navigation Bar Component
function NavigationBar({ title, onSearch, searchIcon }) {
  return (
    <nav className="w-full  h-[53px] flex items-center justify-between  px-4 bg-white shadow-md">
      <button
        className="flex items-center justify-center"
        onClick={() => window.history.back()}
      >
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z11uKps-923gCQd5"
          alt="Back"
          className="w-4 h-4"
        />
      </button>
      <h3 className="font-poppins font-semibold text-[20px] leading-[28px] text-black">
        {title}
      </h3>
      { !searchIcon
        ? <span></span>
        : (
            <button
              onClick={onSearch}
              className="flex items-center justify-center"
            >
              <img className="w-7 h-7  brightness-50 contrast-50" src="https://img.icons8.com/pastel-glyph/128/search--v2.png" alt="search" />
            </button>
          )}
    </nav>
  );
}

export default NavigationBar;
