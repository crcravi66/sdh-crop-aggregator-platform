import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

function NewPostScreen() {
  const [categories] = useState([
    { name: 'Wheat', borderColor: 'blue', image: 'https://3.imimg.com/data3/EP/JB/IMOB-18886571/wheat.jpg' },
    { name: 'Corn', image: 'https://static.vecteezy.com/system/resources/thumbnails/047/904/634/small_2x/fresh-sweet-corn-kernels-background-photo.jpg' },
    { name: 'Bajra', image: 'https://cdn.pixabay.com/photo/2020/06/21/10/11/bajra-5324228_640.jpg' },
    { name: 'Jwar (Sorghum)', image: 'https://4.imimg.com/data4/PQ/QJ/MY-26074937/whole-jowar-250x250.jpg' },
    { name: 'Rice', image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/FD/WN/XE/134285150/rice-500x500.jpg' },
    { name: 'Barley', image: 'https://static3.depositphotos.com/1007298/252/i/450/depositphotos_2521176-stock-photo-barley-grain.jpg' },
    { name: 'Ragi', image: 'https://3.imimg.com/data3/WQ/GL/MY-19728918/ragi-dal.jpg' },
    { name: 'Millet', image: 'https://4.imimg.com/data4/YK/AY/NSDMERP-3369906/johar-250x250.png' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white h-screen  ">
      <NavigationBar title="New Post" searchIcon />
      <div className=" mx-auto flex-col max-w-md  mt-4 flex justify-around ">

        {/* Search Bar */}
        <div className="flex items-center px-4 py-1   bg-gray-100 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 py-2 px-3 bg-transparent text-sm text-gray-700 rounded-md outline-none"
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
          />
          <img src="https://dashboard.codeparrot.ai/api/assets/Z3qYowT5FckTQ4IS" alt="search" className="w-5 h-5 ml-2" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 sm:gap-8 px-4 mt-6">
          {filteredCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <img src={category.image} alt={category.name} className="w-16 sm:w-20 h-16 sm:h-20 object-fit mb-2 border-slate-800 border-2 rounded-full" />
              <p className="text-sm text-gray-700">{category.name}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="px-2 sm:p-4 my-4 ">
          <Link to="/newpost/unitdescriptionpage">
            <PrimaryNextButton title="Next" />

          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewPostScreen;
