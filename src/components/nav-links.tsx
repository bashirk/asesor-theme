import React from 'react';

export const NavLinks: React.FC = () => {
  const links = [
    { href: "#", text: "Product", className: "text-white hover:text-blue-600 transition-colors" },
    { href: "#", text: "Resources", className: "text-white hover:text-blue-600 transition-colors" },
    { href: "#", text: "Pricing", className: "text-white hover:text-blue-600 transition-colors" },
    { href: "#", text: "Love", className: "text-white hover:text-blue-600 transition-colors" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <a key={index} href={link.href} className={link.className}>
          {link.text}
        </a>
      ))}
    </>
  );
};