import { useState } from 'react'
import { motion } from 'framer-motion'
import { Listbox } from '@headlessui/react'

interface ListBoxItem {
  name: string;
}

const listBoxItems: ListBoxItem[] = [
  { name: 'Option 1' },
  { name: 'Option 2' },
  { name: 'Option 3' },
  { name: 'Option 4' },
  { name: 'Option 5' },
]

interface ListboxItemProps {
  item: ListBoxItem;
  selected: boolean;
  onClick: () => void;
}

const CustomListBoxItem: React.FC<ListboxItemProps> = ({ item, selected, onClick }) => {
  return (
    <motion.li
      onClick={onClick}
      className={`relative cursor-pointer select-none py-2 px-10 hover:bg-slate-300 ${
        selected ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
        {item.name}
      </span>
      {selected && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
          ✓
        </span>
      )}
    </motion.li>
  )
}

const CustomListbox: React.FC = () => {
  const [selected, setSelected] = useState<ListBoxItem>(listBoxItems[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="w-1/4 relative">
        <Listbox.Button
          className="relative w-full cursor-pointer rounded-lg text-black bg-CustomWhite py-4 px-8 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block truncate">{selected.name}</span>
          <motion.span
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              className="h-5 w-5 ml-6 mr-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.span>
        </Listbox.Button>
        <Listbox.Options
          as={motion.ul}
          className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {listBoxItems.map((item, index) => (
            <CustomListBoxItem
              key={index}
              item={item}
              selected={selected === item}
              onClick={() => {
                setSelected(item)
                setIsOpen(false)
              }}
            />
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default CustomListbox
