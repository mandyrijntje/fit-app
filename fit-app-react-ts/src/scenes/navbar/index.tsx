import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import Link from "../Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/Btn";

type Props = {
  isPageTop: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isPageTop, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex justify-between items-center";
  const isAboveMd = useMediaQuery("(min-width: 768px)");
  const navBg = isPageTop ? "" : "bg-primary-100 drop-shadow";
  const [resize, toggleResize] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${navBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-8`}>
            <img alt="logo" src={Logo} />
            {isAboveMd ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton
                    setSelectedPage={setSelectedPage}
                    value="Join"
                    page={SelectedPage.Contact}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => toggleResize(!resize)}
              >
                <Bars3Icon className="h-6 w-6 text-gray-800" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMd && resize && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => toggleResize(!resize)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-20 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <p>Sign In</p>
            <ActionButton
              setSelectedPage={setSelectedPage}
              value="Join"
              page={SelectedPage.Contact}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
