import "./App.css";
import { motion } from "motion/react";
import { LayoutGrid, List, LucideIcon, Trash2 } from "lucide-react";
import { useState } from "react";

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

const ListView = () => {
  return (
    <motion.div>
      <div className="flex flex-col">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            index={index}
            className="flex mt-5 gap-4 border-1 rounded-md bg-slate-200 p-5"
          >
            <motion.div className="rounded-full bg-black size-10" />

            <motion.div className="flex flex-col">
              <motion.p>Jane Doe</motion.p>
              <motion.p className="text-sm text-gray-500">
                janedoe@.com
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col flex-1 mt-2">
              <motion.div className="rounded-xl w-full h-2 bg-black" />
              <motion.div className="rounded-xl w-1/2 h-2 bg-black mt-3" />
            </motion.div>

            <motion.div className="size-8 rounded-full border-2 border-black flex items-center justify-center">
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
            index={index}
            className="mt-5 border-1 rounded-md bg-slate-200 p-5"
          >
            <motion.div className="flex justify-start gap-4">
              <motion.div className="rounded-full bg-black size-10" />

              <motion.div className="flex flex-col flex-1">
                <motion.p>Jane Doe</motion.p>
                <motion.p className="text-sm text-gray-500">
                  janedoe@.com
                </motion.p>
              </motion.div>

              <motion.div className="size-8 rounded-full border-2 border-black flex items-center justify-center">
                <Trash2 className="size-4 text-gray-500 " />
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col flex-1 mt-2">
              <motion.div className="rounded-xl w-full h-2 bg-black" />
              <motion.div className="rounded-xl w-1/2 h-2 bg-black mt-3" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

function App() {
  const [view, setView] = useState<myView>('grid')
  return (
    <motion.div className="w-full p-20">
      <motion.div className="border-b-2 border-black flex justify-between">
        <h1 className="text-4xl font-bold">Grid to List</h1>
        <motion.div className="toggle border-black border-2 rounded-xl p-3 flex mb-2">
          <LayoutGrid className="mr-2" />
          <List />
        </motion.div>
      </motion.div>

      <ListView />
      <GridView />
    </motion.div>
  );
}

export default App;
