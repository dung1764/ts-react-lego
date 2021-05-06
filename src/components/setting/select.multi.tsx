import { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import { LessonsOption } from "../../core/FireBaseDataContext";
import Update from "./update";

type Props = {
  options: LessonsOption[];
  selectedO: LessonsOption[];
};

const SelectMulti: React.FC<Props> = ({ options, selectedO }) => {
  const [selected, setSelected] = useState<LessonsOption[]>([]);

  useEffect(() => {
    setSelected(selectedO);
  }, [selectedO]);

  return (
    <div className="mt-1 md:inline-block ">
      <MultiSelect
        className="w-full md:mx-1 md:max-w-xl md:w-auto md:inline-block h-10 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        overrideStrings={{
          "selectSomeItems": "Select Lego Classes"
        }}
      />
      <Update selected={selected} />
    </div>
  );
};
export default SelectMulti;
