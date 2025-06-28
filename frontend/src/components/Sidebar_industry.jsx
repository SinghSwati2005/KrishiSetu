// // components/Sidebar.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from './ui/CustomUI';
// import { Link } from 'react-router-dom';

// const Sidebar_industry = () => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { label: 'Dashboard', path: '/industry-dashboard' },
//     { label: 'Listings', path: '/lists-industry' },
//     { label: 'Buy Waste', path: '/orders-industry' },
//     { label: 'Payments', path: '/' },
//     { label: 'Messages', path: '/' },
//     { label: 'Analytics', path: '/' },
//     { label: 'Settings', path: '/' },
//   ];

//   return (
//     <aside className="w-64 bg-[#26188c] text-white p-4 space-y-6">
//       <div className="text-2xl font-bold tracking-wide"> 🌿 W2W</div>
//       <nav className="flex flex-col space-y-4">
//         {menuItems.map(({ label, path }) => (
//           <button
//             key={label}
//             onClick={() => navigate(path)}
//             className="text-left hover:text-[#a7b1f4]"
//           >
//             {label}
//           </button>
//         ))}
//       </nav>
//       <div className="mt-auto text-sm text-center">
//         <div className="mb-2">Need Help?</div>
//         <Button variant="secondary" className="w-full bg-[#1eb980] text-white">
//           Contact Us
//         </Button>
//       </div>
//       <Link to="/sign-up" className="mt-4 text-red-500 hover:underline">Log Out</Link>
//     </aside>
//   );
// }

// export default Sidebar_industry;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/CustomUI';
import { Link } from 'react-router-dom';

const Sidebar_industry = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/industry-dashboard' },
    { label: 'Listings', path: '/lists-industry' },
    { label: 'Buy Waste', path: '/orders-industry' },
    { label: 'Payments', path: '/' },
    { label: 'Messages', path: '/' },
    { label: 'Analytics', path: '/' },
    { label: 'Settings', path: '/' },
  ];

  return (
    <aside className="w-64 bg-[#26188c] text-white p-4 space-y-6 flex flex-col">
      <div className="text-2xl font-bold tracking-wide">🌿 W2W</div>

      <nav className="flex flex-col space-y-2 mt-6">
        {menuItems.map(({ label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="text-left px-4 py-2 rounded transition duration-200 hover:bg-[#3d2dd1] hover:text-[#c8d1fd]"
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto text-sm text-center">
        <div className="mb-2">Need Help?</div>
        <Button variant="secondary" className="w-full bg-[#1eb980] text-white hover:bg-[#14a26b]">
          Contact Us
        </Button>
      </div>

      <Link
        to="/sign-up"
        className="mt-4 text-red-400 hover:underline text-center"
      >
        Log Out
      </Link>
    </aside>
  );
};

export default Sidebar_industry;
