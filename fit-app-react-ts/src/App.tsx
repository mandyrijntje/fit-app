import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function App() {
  const [isPageTop, setIsPageTop] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  useEffect(() => {
    const handleScroll = () => {
      const isTopOfWindow = window.scrollY === 0;
      setIsPageTop(isTopOfWindow);
      setSelectedPage(SelectedPage.Home);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPageTop]);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isPageTop={isPageTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
