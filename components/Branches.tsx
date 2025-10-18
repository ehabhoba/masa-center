import React from 'react';

const branches = [
  { name: 'فرع القاهرة', address: '123 شارع النيل, القاهرة', phone: '010-123-4567' },
  { name: 'فرع الجيزة', address: '456 شارع الأهرام, الجيزة', phone: '010-987-6543' },
];

const Branches: React.FC = () => {
  return (
    <section id="branches" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">فروعنا</h2>
          <p className="mt-4 text-lg text-gray-300">أقرب إليك دائماً</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((branch) => (
            <div key={branch.name} className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">{branch.name}</h3>
              <p className="text-gray-300 mb-1">{branch.address}</p>
              <p className="text-gray-300">
                <a href={`tel:${branch.phone}`} className="hover:text-amber-400 transition-colors">
                  {branch.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
