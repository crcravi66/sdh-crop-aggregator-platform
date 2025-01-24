import React, { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import { Link } from 'react-router-dom';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

const NewPostScreen = () => {
  const [categories] = useState([
    { name: 'Wheat', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IT' },
    { name: 'Corn', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IU' },
    { name: 'Bajra', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IV' },
    { name: 'Jwar (Sorghum)', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IW' },
    { name: 'Rice', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IX' },
    { name: 'Barley', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IY' },
    { name: 'Ragi', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4IZ' },
    { name: 'Millet', image: 'https://dashboard.codeparrot.ai/api/assets/Z3qYrAT5FckTQ4Ia' },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleNext = () => {
  //   console.log('Next button clicked');
  // };

  return ( 
    <div className="bg-white h-screen  items-center flex flex-col">
      <NavigationBar title={"New Post"} searchIcon={true}/>
      <div className=' mx-auto flex-col max-w-lg  flex justify-around '>

      {/* Search Bar */}
      <div className="flex items-center px-4 py-2 mt-4  bg-gray-100 rounded-md">
        <input 
          type="text" 
          placeholder="Search" 
          className="flex-1 py-2 px-3 bg-transparent text-sm text-gray-700 rounded-md outline-none" 
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)} 
        />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z3qYowT5FckTQ4IS" alt="search" className="w-5 h-5 ml-2" />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 sm:gap-8 px-4 mt-6">
        {filteredCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <img src={category.image} alt={category.name} className="w-16 sm:w-20 h-16 sm:h-20 object-contain mb-2" />
            <p className="text-sm text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>

      
        {/* Next Button */}
      <div className="px-2 sm:p-4 my-4 ">
        <Link to="/newpost/unitdescriptionpage">
        <PrimaryNextButton title={"Next"}/>
        
        </Link>
      </div>
      </div>
    </div>
  );
};

export default NewPostScreen;
