/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import HelpCard from './HelpCard';
import { Input } from 'antd';
import { useGetAllBlogsQuery } from '../redux/features/blogs/blogsApi';

const { Search } = Input;



const CardsSection: React.FC = () => {
    const {data:cards } = useGetAllBlogsQuery({})
    console.log(cards)
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Function to handle search input
    const handleSearch = (value: string) => {
      setSearchQuery(value.toLowerCase());
    };
  
    // Filter cards based on the search query
    const filteredBlogs = cards?.data?.filter((blog: any) =>
      blog.title.toLowerCase().includes(searchQuery) ||
      blog.description.toLowerCase().includes(searchQuery)
    );
  return (
   <>
    <div className="bg-[#E9EAF6] text-center py-16">
      <h1 className="text-4xl font-bold mb-6">How can we help?</h1>
      <Search placeholder="Search" enterButton className="max-w-md mx-auto" onSearch={handleSearch}  />
    </div>
    <div className="flex flex-wrap justify-center gap-6 py-16">
    {filteredBlogs?.map((blog: any, index: number) => (
      <HelpCard key={index} title={blog.title} description={blog.description} />
    ))}
  </div>
   </>
  );
};

export default CardsSection;
