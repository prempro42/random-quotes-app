import { AppStateType } from "../App.types";

const QuoteCard: React.FC<AppStateType> = ({ state }) => {
  return (
    <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-2xl  ">
      <div className="relative block overflow-hidden p-4 sm:p-6 lg:p-8">
        <span className="rounded-b-lg absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="dark:text-white text-lg text-gray-900 sm:text-xl">
              {state.quote}
            </h3>
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-md text-gray-600 dark:text-gray-300">
            -- {state.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
