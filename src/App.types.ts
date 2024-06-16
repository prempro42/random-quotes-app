export type AppStateType = {
  state: {
    author: string;
    quote: string;
    isLoading: boolean;
    initialRender: boolean;
    isDarkMode: boolean;
  };
  ToggleDarkMode?: () => void;
};
