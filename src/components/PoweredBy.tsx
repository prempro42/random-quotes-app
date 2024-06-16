import newTabIcon from "./../assets/newTab.ico";
import reactLogo from "./../assets/react.svg";
import tailwindIcon from "./../assets/tailwindcss.svg";
import viteLogo from "/vite.svg";

function PoweredBy() {
  return (
    <div className="absolute flex-col bottom-0 mb-5 w-1/2 md:w-1/4">
      <p className="mb-2 justify-center flex dark:text-slate-300">Powered by</p>
      <div className=" flex ">
        <a
          href="https://quotesnewtab.com/api/docs"
          target="_blank"
          className="w-9 m-auto "
        >
          <img src={newTabIcon} alt="quotes new tab logo" />
        </a>

        <a href="https://react.dev" target="_blank" className="w-9 m-auto ">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="w-9 m-auto "
        >
          <img src={tailwindIcon} alt="Tailwind CSS logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" className="w-9 m-auto  ">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  );
}

export default PoweredBy;
