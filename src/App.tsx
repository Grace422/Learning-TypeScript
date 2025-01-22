import "./App.css";
import { AnimatePresence, motion } from "motion/react";
import { LayoutGrid, List, LucideIcon, Trash2 } from "lucide-react";
import { useState } from "react";
// import { div } from "motion/react-client";

const ListView = () => {
  return (
      <motion.div className="flex flex-col" layout >
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="flex mt-5 gap-4 border-1 rounded-md bg-slate-200 p-5"
            layoutId={`list-items-${index}`}
          >
            <motion.div
              className="rounded-full bg-black size-10"
              layoutId="list-avatar"
            />

            <div className="flex flex-col text-justify">
              <motion.p layoutId="list-name">Jane Doe</motion.p>
              <motion.p className="text-sm text-gray-500" layoutId="list-email">
                janedoe@.com
              </motion.p>
            </div>

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
      </motion.div>
  );
};

const GridView = () => {
  return (
      <motion.div className="grid grid-cols-3 gap-4" layout >
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="mt-5 border-1 rounded-md bg-slate-200 p-5"
            layoutId={`grid-items-${index}`}
          >
            <div className="flex justify-between gap-4">
              <div className="flex gap-4">
                <motion.div
                  className="rounded-full bg-black size-10"
                  layoutId="avatar"
                />

                <div
                  className="flex flex-col flex-1 text-justify"
                >
                  <motion.p layoutId="name">Jane Doe</motion.p>
                  <motion.p className="text-sm text-gray-500" layoutId="email">
                    janedoe@.com
                  </motion.p>
                </div>
              </div>

              {/* Trash */}

              <motion.div
                className="size-8 rounded-full border-2 border-black flex items-center justify-center"
                layoutId="trash"
              >
                <Trash2 className="size-4 text-gray-500 " />
              </motion.div>
            </div>

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
        <AnimatePresence mode="popLayout">
          {view === "grid" ? (
            <motion.div key="grid-view" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            layoutId="grid-view"
            >
              <GridView />
            </motion.div>
          ) : (
            <motion.div key="list-view"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            layoutId="list-view"
            >
              <ListView />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default App;
