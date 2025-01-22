import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import { LayoutGrid, List, LucideIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import { div } from "motion/react-client";

const ListView = () => {
  return (
    <motion.div>
      <div className="flex flex-col">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="flex mt-5 gap-4 border-1 rounded-md bg-slate-200 p-5"
            layoutId="list-view"
          >
            <motion.div
              className="rounded-full bg-black size-10"
              layoutId="list-avatar"
            />

            <motion.div
              className="flex flex-col text-justify"
              layoutId="list-name-email"
            >
              <motion.p layoutId="list-name">Jane Doe</motion.p>
              <motion.p className="text-sm text-gray-500" layoutId="list-email">
                janedoe@.com
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col flex-1 mt-2"
              layoutId="list-lines"
            >
              <motion.div
                className="rounded-xl w-full h-2 bg-black"
                layoutId="list-line1"
              />
              <motion.div
                className="rounded-xl w-1/2 h-2 bg-black mt-3"
                layoutId="list-line2"
              />
            </motion.div>

            <motion.div
              className="size-8 rounded-full border-2 border-black flex items-center justify-center"
              layoutId="list-trash"
            >
              <Trash2 className="size-4 text-gray-500 " />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const GridView = () => {
  return (
    <motion.div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="mt-5 border-1 rounded-md bg-slate-200 p-5"
            layoutId="grid-view"
          >
            <motion.div className="flex justify-between gap-4">
              <motion.div className="flex gap-4">
                <motion.div
                  className="rounded-full bg-black size-10"
                  layoutId="avatar"
                />

                <motion.div
                  className="flex flex-col flex-1 text-justify"
                  layoutId="name-email"
                >
                  <motion.p layoutId="name">Jane Doe</motion.p>
                  <motion.p className="text-sm text-gray-500" layoutId="email">
                    janedoe@.com
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div
                className="size-8 rounded-full border-2 border-black flex items-center justify-center"
                layoutId="trash"
              >
                <Trash2 className="size-4 text-gray-500 " />
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col flex-1 mt-2" layoutId="lines">
              <motion.div
                className="rounded-xl w-full h-2 bg-black"
                layoutId="line1"
              />
              <motion.div
                className="rounded-xl w-1/2 h-2 bg-black mt-3"
                layoutId="line2"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

type myView = "grid" | "list";

const listItems: {
  name: myView;
  icon: LucideIcon;
}[] = [
  {
    name: "grid",
    icon: LayoutGrid,
  },
  {
    name: "list",
    icon: List,
  },
];

function App() {
  const [view, setView] = useState<myView>("grid");
  const onViewChange = (newView: myView) => {
    setView(newView);
  };
  return (
    <motion.div className="w-full p-20">
      <motion.div className="border-b-2 border-black flex justify-between">
        <h1 className="text-4xl font-bold">Grid to List</h1>
        <motion.div className="rounded-xl flex mb-2">
          <motion.div
            layout
            className="rounded-lg bg-gray-600 p-2 gap-4 flex items-center relative z-0"
          >
            {listItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onViewChange(item.name)}
                className={`size-10 flex items-center justify-center rounded text-white z-10 ${
                  view === item.name ? "font-bold" : ""
                }`}
              >
                <item.icon aria-hidden="true" className="size-5" />
              </button>
            ))}
            <motion.div
              layoutId="grid-line"
              className="size-10 bg-black absolute rounded-md"
              animate={{
                x: view === "grid" ? 0 : 56,
                transition: {
                  duration: 0.2,
                },
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8">
        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div key="grid">
              <GridView />
            </motion.div>
          ) : (
            <motion.div key="list">
              <ListView />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default App;
