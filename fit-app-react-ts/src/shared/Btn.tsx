import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type BtnProps = {
  value: string;
  page: SelectedPage;
  setSelectedPage?: (value: SelectedPage) => void;
  link?: boolean;
};

const Btn = ({ value, page, setSelectedPage, link }: BtnProps) => {
  return (
    <AnchorLink
      className={`px-5 py-2 ${
        link
          ? "text-grey-500 underline hover:text-primary-500"
          : "rounded-md bg-secondary-500 hover:bg-primary-500 hover:text-white"
      }`}
      href={`#${page}`}
      onClick={() => setSelectedPage && setSelectedPage(page)}
    >
      {value}
    </AnchorLink>
  );
};

export default Btn;
