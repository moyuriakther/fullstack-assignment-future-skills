import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchSection: React.FC = () => {
  return (
    <section className="bg-[#E9EAF6] text-center py-10">
      <h1 className="text-4xl font-bold mb-6">How can we help?</h1>
      <Search placeholder="Search" enterButton className="max-w-md mx-auto" />
    </section>
  );
};

export default SearchSection;
