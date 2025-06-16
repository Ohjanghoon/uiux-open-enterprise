interface Nav {
  name: string;
  url: string;
  styleClassName?: string;
}

const navLinks: Nav[] = [
  {
    name: "Why Open Enterprise",
    url: "#hero-section",
  },
  {
    name: "Features",
    url: "#work-section",
  },
  {
    name: "Help Us",
    url: "",
  },
  {
    name: "Contact Us",
    url: "",
    styleClassName: "ring-green ring-1 rounded-lg px-4 py-2",
  },
];

function Header({ isScrolled }: { isScrolled: boolean }) {
  return (
    <header
      id="root-header"
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-14 transition-all duration-300 ${isScrolled ? "bg-white/80 py-4 shadow-sm backdrop-blur-2xl" : "py-10"}`}
    >
      <div id="header-logo-wrapper" className="flex items-center gap-2">
        <img
          id="logo-image"
          src="/assets/logo.svg"
          alt="Logo image"
          className="h-10"
        />
        <h1
          id="logo-title"
          className="font-nunito text-[32px] font-semibold tracking-[-4%]"
        >
          Open Enterprise
        </h1>
      </div>
      <nav id="header-nav" className="flex items-center gap-10">
        {navLinks.map((item) => {
          return (
            <li key={item.name}>
              <a
                href={item.url}
                className={`${item.styleClassName} hover:text-green scroll-smooth`}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
