import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type ActionButtonProps = {
  value: string;
  setSelectedPage: (value: SelectedPage) => void;
  page: SelectedPage;
};

const ActionButton = ({ value, setSelectedPage, page }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      title={value}
      onClick={() => setSelectedPage(page)}
      href={`#${page}`}
    >
      {value}
    </AnchorLink>
  );
};

export default ActionButton;
