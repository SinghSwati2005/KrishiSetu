// // components/Sidebar.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from './ui/CustomUI';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const menuItems = [
//     { label: 'Dashboard', path: '/farmer-dashboard' },
//     { label: 'Listings', path: '/lists-farmer' },
//     { label: 'Sell Waste', path: '/orders-farmer' },
//     { label: 'Payments', path: '/farmer-track-order' },
//     { label: 'Messages', path: '/' },
//     { label: 'Analytics', path: '/analytics' },
//     { label: 'Settings', path: '/' },
//   ];

//   return (
//     <aside className="w-64 bg-[#0f3d2e] text-white p-4 space-y-6">
//       <div className="text-2xl font-bold tracking-wide">🌿KrishiSetu</div>
//       <nav className="flex flex-col space-y-4">
//         {menuItems.map(({ label, path }) => (
//           <button
//             key={label}
//             onClick={() => navigate(path)}
//             className="text-left hover:text-[#95ecb3]"
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

// export default Sidebar;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/CustomUI';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/farmer-dashboard' },
    { label: 'Listings', path: '/lists-farmer' },
    { label: 'Sell Waste', path: '/orders-farmer' },
    { label: 'Payments', path: '/farmer-track-order' },
    { label: 'Messages', path: '/' },
    { label: 'Analytics', path: '/analytics' },
    { label: 'Settings', path: '/' },
  ];

  return (
    <aside className="w-64 bg-[#0f3d2e] text-white p-4 space-y-6 flex flex-col">
      <div className="text-2xl font-bold tracking-wide">🌿KrishiSetu</div>

      <nav className="flex flex-col space-y-2 mt-6">
        {menuItems.map(({ label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="text-left px-4 py-2 rounded transition duration-200 hover:bg-[#1a5c44] hover:text-[#95ecb3]"
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto text-sm text-center">
        <div className="mb-2">Need Help?</div>
        <Link to="/chatbot" variant="secondary" className="w-full bg-[#1eb980] text-white hover:bg-[#14a26b]">
          KrishiSaathi
        </Link>
      </div>

      <Link
        to="/sign-up"
        className="mt-4 text-red-500 hover:underline text-center"
      >
        Log Out
      </Link>
    </aside>
  );
};

export default Sidebar;
