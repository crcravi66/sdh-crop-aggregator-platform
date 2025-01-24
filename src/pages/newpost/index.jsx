import React, { useState } from 'react';
import NavigationBar from '../../component/signInPage/common/NavigationBar';
import { Link } from 'react-router-dom';
import PrimaryNextButton from '../../component/signInPage/common/PrimaryNextButton';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    { title: 'Grains', description: 'Pay electric bill this month', image: 'https://plus.unsplash.com/premium_photo-1722945635992-8eda6a907978?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Vegetables', description: 'Pay water bill this month', image: 'https://plus.unsplash.com/premium_photo-1664640733890-17acaf0529a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Fruits', description: 'Pay mobile bill this month', image: 'https://images.unsplash.com/photo-1485637701894-09ad422f6de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzc0MTA2fHxlbnwwfHx8fHw%3D' },
    { title: 'Spices', description: 'Pay internet bill this month', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="flex flex-col min-h-screen bg-white ">
    <NavigationBar title={"New Post"} searchIcon={true}/>
    <div className='max-w-md mx-auto w-64 sm:w-96'>

      {/* Search Bar */}
      <div className="px-2 sm:px-6 py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-11 pl-3 pr-12 rounded-lg border border-gray-200 text-sm font-medium"
          />
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z3pG0gT5FckTQ4HV"
            alt="search"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 px-2 my-3 sm:px-6 space-y-4">
        {filteredPosts.map((post, index) => (
          <div key={index} className="p-4 border rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-base font-semibold text-[#343434]">{post.title}</h4>
              <p className="text-xs font-medium text-[#979797] mt-2">{post.description}</p>
            </div>
            <img src={post.image} alt={post.title} className="w-16 sm:w-24 h-16 sm:h-20 object-center rounded-lg" />
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="p-2 sm:p-6  ">
        <Link to="/newpost/newpostscreen">
        <PrimaryNextButton title={"Next"}/>
        
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Index;
