import githubIcon from "./../assets/icons8-github.svg";

function PoweredBy() {
  return (
    <div className="absolute flex-col bottom-0 mb-5 w-1/2 md:w-1/4">
      <div className=" flex ">
        <a
          href="https://github.com/prempro42/random-quotes-app"
          target="_blank"
          className="w-9 m-auto "
        >
          <img src={githubIcon} alt="quotes new tab logo" />
        </a>
      </div>
    </div>
  );
}

export default PoweredBy;
