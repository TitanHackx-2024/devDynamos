function Footer() {
  return (
    <footer className="container mx-auto flex justify-between items-center bg-slate-600 p-4">
      <p className="text-white">
        Made with <p className="inline text-red-500">♥</p> by Dev Dynamos for
        TitanHackx 2024
      </p>
      <div className="flex space-x-4">
        <a
          href="https://github.com/TitanHackx-2024/devDynamos"
          className="text-white hover:text-gray-300"
        >
          GitHub
        </a>
      </div>
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} Tech Titan Community. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
