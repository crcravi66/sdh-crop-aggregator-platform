import NavigationBar from '@/component/signInPage/common/NavigationBar';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const changePasswordPageDefaultProps = {
  onSubmit: () => { }
};

function ChangePasswordPage(onSubmit) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (newPassword === confirmPassword && newPassword.length > 0) {
      onSubmit?.(newPassword);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavigationBar title="Change Password" />

      {/* Main Content */}
      {/* <div className="flex px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6"> */}
      <div className="flex flex-col min-w-64 sm:w-96 px-4 sm:px-8 py-6 bg-white shadow rounded-lg mx-auto sm:mx-4 mt-6">

        {/* New Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Type your new password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full h-12 px-4 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter new password"
            />
            <button
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              type="button"
            >
              <img
                src={
                  showNewPassword
                    ? 'https://dashboard.codeparrot.ai/api/assets/Z3o_eIH_EXkqg63T'
                    : 'https://dashboard.codeparrot.ai/api/assets/Z3o_eIH_EXkqg63U'
                }
                alt="Toggle visibility"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Confirm password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Confirm password"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <img
                src={
                  showConfirmPassword
                    ? 'https://dashboard.codeparrot.ai/api/assets/Z3o_eIH_EXkqg63V'
                    : 'https://dashboard.codeparrot.ai/api/assets/Z3o_eIH_EXkqg63U'
                }
                alt="Toggle visibility"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Link to="/signin/changepasswordsuccess">
          <button
            onClick={handleSubmit}
            className="w-full h-12 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Change Password
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default ChangePasswordPage;
