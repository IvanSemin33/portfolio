import { useWindowSize } from "react-use";

const sizes = {
  small: 320,
  medium: 768,
  large: 1440,
};

export const useScreen = () => {
  const { width } = useWindowSize();

  return {
    isSmall: width < sizes.medium,
    isMedium: width < sizes.large,
    isLarge: width >= sizes.large,
  };
};
