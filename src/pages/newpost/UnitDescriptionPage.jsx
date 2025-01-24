import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

function UnitDescriptionPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [images, setImages] = useState([]);

  const tags = ['Pesticide-free', 'Organic', 'Hand harvested', 'Ipsum'];

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    }
    else {
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
      <NavigationBar title="New Post" />

      <div className=" mx-auto flex-col max-w-lg px-2  flex justify-around ">
        {/* Dropdown Select */}
        <div className="my-6">
          <label className="block mb-2 text-xs font-semibold text-[#979797]">
            Choose unit
          </label>
          <div className="relative">
            <select
              onChange={e => setSelectedOption(e.target.value)}
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
                {images[index]
                  ? (
                      <img
                        src={images[index]}
                        alt={`Uploaded ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )
                  : (
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
        {/* Next Button */}
        <div className="px-2 sm:px-1 my-4 ">
          <Link to="/newpost/quantitypage">
            <PrimaryNextButton title="Next" />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default UnitDescriptionPage;
