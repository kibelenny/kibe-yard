const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-12 text-gray-800 text-center flex p-4">
      <p>&copy; {currentYear} Kibe Yard. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
