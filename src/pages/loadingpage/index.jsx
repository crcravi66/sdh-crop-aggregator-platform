function index({ statusBarTime = '9:41' }) {
  return (
    <div className="flex flex-col justify-between px-2 h-screen  bg-white">

      {/* Logo */}
      <div className="mx-auto flex justify-center max-w-sm items-center flex-grow">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z1wxkq_uyZiCJNb6"
          alt="Logo"
          className="w-full h-40 sm:w-44 sm:h-44"
        />
      </div>
    </div>
  );
}

export default index;
