import List from "./List";
import NewButton from "./NewButton";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-900 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white items-center ">
      <List/>
      <NewButton/>
    </aside>
  );
};
