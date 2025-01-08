import React, { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';

const UnitDescriptionPage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [images, setImages] = useState([]);
  
    const tags = ["Pesticide-free", "Organic", "Hand harvested", "Ipsum"];
  
    const handleTagClick = (tag) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter(t => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file && images.length < 4) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages([...images, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    };
    return (
      <div className="  flex flex-col  h-screen items-center mb-4">   
      <NavigationBar title={'New Post'} />
      
      <div className="sm:w-7/12 flex justify-between flex-col px-4 py-6 ">
        {/* Dropdown Select */}
        <div className="my-6">
            <label className="block mb-2 text-xs font-semibold text-[#979797]">
                Choose unit
            </label>
        <div className="relative">
            <select
                onChange={(e) => setSelectedOption(e.target.value)}
                value={selectedOption}
                className="w-full h-11 px-3  border border-gray-300 rounded-xl text-sm font-medium text-[#8E8E8E] appearance-none"
            >
                <option value="" disabled>Select</option>
                <option value="Option 1">Kilogram</option>
                <option value="Option 2">Quintal</option>
                <option value="Option 3">Tons</option>
                <option value="Option 3">Lbs</option>
                {/* Add more options as necessary */}
            </select>
        </div>
     </div>

     
      {/* Quality Description */}
      <div className="my-6">
        <label className="block text-[#979797] text-xs font-semibold mb-2">
          Quality description (optional)
        </label>
        <div className="relative my-4">
          <div className="w-full h-14 border border-[#E5E5E5] rounded-md px-3 py-2 flex flex-wrap gap-2">
            {selectedTags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center bg-[#4A3AFF] text-white px-3 py-1 rounded-[15px] text-sm"
              >
                <span>{tag}</span>
                <button
                  onClick={() => handleTagClick(tag)}
                  className="ml-4"
                >
                  <img 
                    src="https://dashboard.codeparrot.ai/api/assets/Z300l3wdoACPgrH1" 
                    alt="remove" 
                    className="w-4 h-4"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-[15px] text-sm font-medium
                ${selectedTags.includes(tag) 
                  ? 'bg-[#4A3AFF] text-white' 
                  : 'bg-white text-[#343434] border border-[#E5E5E5]'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Image Uploader */}
      <div>
        <label className="block text-[#979797] text-xs font-semibold leading-4 mb-4">
          Add picture (optional)
        </label>
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="min-w-14 h-20 sm:h-28 flex items-center justify-center border border-[#E5E5E5] rounded-lg overflow-hidden"
            >
              {images[index] ? (
                <img
                  src={images[index]}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <label className="w-full h-full flex items-center justify-center cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <span className="text-[38.76px] font-light text-[#989898] leading-[29.07px]">
                    +
                  </span>
                </label>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
     
      {/* <div className="mb-6">
        <label className="block mb-2 text-xs font-semibold text-[#979797]">
          Choose unit
        </label>
        <div className="relative">
          <select className="w-full h-11 px-3 text-sm font-medium text-[#8e8e8e] bg-white border border-[#E5E7EB] rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#4a3aff]">
            <option value="" disabled>Select</option>
            <option value="unit1">Unit 1</option>
            <option value="unit2">Unit 2</option>
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <img 
              src="https://dashboard.codeparrot.ai/api/assets/Z3032XwdoACPgrIF" 
              alt="dropdown arrow"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-xs font-semibold text-[#979797]">
          Quality description (optional)
        </label>
        <input
          type="text"
          value="Pesticide-free,"
          className="w-full h-11 px-3 rounded-lg border border-[#E5E5E5] text-sm font-medium focus:outline-none focus:border-[#4A3AFF]"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {["Pesticide-free", "Hand harvested", "Organic", "Ipsum"].map((tag, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-1 rounded-[15px] ${
                tag === "Pesticide-free"
                  ? "bg-[#4A3AFF] text-white"
                  : "bg-white text-[#343434] border border-[#E5E5E5]"
              }`}
            >
              <span className="text-sm font-medium">{tag}</span>
              {tag === "Pesticide-free" && (
                <img 
                  src="https://dashboard.codeparrot.ai/api/assets/Z300l3wdoACPgrH1"
                  alt="close"
                  className="w-4 h-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[12px] font-semibold text-[#979797] mb-4">
          Add picture (optional)
        </label>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((id) => (
            <button
              key={id}
              className="w-[72.67px] h-[72.67px] relative bg-white border border-dashed border-[#E5E5E5] rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[38.76px] font-light text-[#989898]">+</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button className="w-full h-11 bg-blue-600 rounded-full text-white font-medium text-base flex items-center justify-center">
        Next
      </button> */}
      {/* </div> */}
    </div>
  );
};

export default UnitDescriptionPage;
