import React from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

const NewPostScreen = ({ categories, onBack, onSearch, onNext }) => {
  return (
    <>
        <div className="bg-white h-screen  items-center flex flex-col">
        <NavigationBar title={"New Post"} searchIcon={true}/>
      
            {/* Search Bar */}
            <div className="flex items-center px-4 py-2 mt-4 w-5/6   bg-gray-100 rounded-md">
                <input type="text" placeholder="Search" className="flex-1 py-2 px-3 bg-transparent text-sm text-gray-700 rounded-md outline-none" />
                <img src="https://dashboard.codeparrot.ai/api/assets/Z3qYowT5FckTQ4IS" alt="search" className="w-5 h-5 ml-2" />
            </div>

            {/* Category Grid */}
            <div className="grid grid-row-3  gap-4 px-4 mt-6">
                {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                <img src={category.image} alt={category.name} className="w-16 h-16 object-contain mb-2" />
                <p className="text-sm text-gray-700">{category.name}</p>
            </div>
            ))}
            {/* Next Button */}
            <button className="my-6 mx-4 py-2  bg-black text-white rounded-md  hover:bg-gray-700 transition duration-200" onClick={onNext}>
            Next
            </button>
        </div>
        </>
  );
};

NewPostScreen.defaultProps = {
  categories: [
    { name: 'Wheat', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IT' },
    { name: 'Corn', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IU' },
    { name: 'Bajra', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IV' },
    { name: 'Jwar (Sorghum)', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IW' },
    { name: 'Rice', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IX' },
    { name: 'Barley', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IY' },
    { name: 'Ragi', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IZ' },
    { name: 'Millet', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4Ia' },
  ],
  onBack: () => {},
  onSearch: () => {},
  onNext: () => {},
};

export default NewPostScreen;
