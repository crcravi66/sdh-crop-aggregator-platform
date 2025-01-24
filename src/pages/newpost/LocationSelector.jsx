import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

function LocationSelector() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    console.log('Selected location:', location);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setSelectedLocation(location);
        if (handleLocationSelect)
          handleLocationSelect(location);
      });
    }
  };

  return (
    <div className="bg-white h-screen   items-center flex flex-col">
      <NavigationBar title="New Post" searchIcon />

      <div className="flex justify-between flex-col   w-full max-w-md p-4 font-poppins">
        <h2 className="text-xs font-semibold text-[#979797] mb-2">Location</h2>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full h-11 px-3 rounded-lg border border-[#E7E7E7] text-sm focus:outline-none focus:border-[#4A3AFF]"
          />
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z4C9-wIBBLnlud1A"
            alt="search"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>

        {/* Location Options */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-4 text-[#4A3AFF] mb-4 cursor-pointer" onClick={handleCurrentLocation}>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4C9-wIBBLnlud1B" alt="location" className="w-3 h-4" />
            <span className="text-sm font-medium">Use current location</span>
          </div>
          <div className="border-t border-[#E7E7E7] my-2"></div>
          <div className="flex items-center gap-4 text-[#4A3AFF] cursor-pointer">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4C9-wIBBLnlud1C" alt="map" className="w-3 h-3" />
            <span className="text-sm font-medium">Add on map</span>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-lg my-3 overflow-hidden bg-white shadow-lg">
          <h3 className="text-base font-semibold text-[#343434] p-4">Select on Map</h3>
          <div className=" w-full  bg-gray-100">
            <img
              src="https://dashboard.codeparrot.ai/api/assets/Z4C9-wIBBLnlud1D"
              alt="map"
              className="w-full  h-72 object-cover   "
            />
          </div>
        </div>

        <Link to="/newpost/postpreview">
          <PrimaryNextButton title="Next" />
        </Link>
      </div>

    </div>
  );
}

export default LocationSelector;
