import NavigationBar from '../../component/signInPage/common/NavigationBar';

const changePasswordSuccessDefaultProps = {
  onOkClick: () => console.log('Ok button clicked')
};

function ChangePasswordSuccess({ onOkClick } = changePasswordSuccessDefaultProps) {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />
      <div className="relative w-full max-w-[375px] h-full bg-white mx-auto">

        {/* Main Content */}
        <div className="flex flex-col items-center px-6 mt-[120px] sm:mt-[149px]">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z3pCw4H_EXkqg63Z"
            alt="Success Icon"
            className="w-[132px] h-[132px] mb-6 object-contain"
          />
          <h1 className="text-[#4A3AFF] text-lg font-semibold leading-6 mb-2">
            Change password successfully!
          </h1>
          <p className="text-[#343434] text-sm font-medium leading-[150%] text-center mb-10">
            You have successfully changed your password.
            <br />
            Please use the new password when signing in.
          </p>
          <button
            className="w-full h-11 bg-[#4A3AFF] rounded text-white text-base font-medium flex items-center justify-center"
            onClick={onOkClick}
          >
            Ok
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordSuccess;
