import { useState } from "react";
import { Select, Accordion } from "../../shared"
import { Option } from "../../shared/Select/option.interface"

const Test = () => {

  const options: Option[] = [
    {
      value: "1",
      label: "Option 1",
      imageUrl: "https://via.placeholder.com/24", // Example image URL
    },
    {
      value: "2",
      label: "Option 2",
      imageUrl: "https://via.placeholder.com/24", // Example image URL
    },
    {
      value: "3",
      label: "Option 3",
      //imageUrl: "https://via.placeholder.com/24", // Example image URL
    },
  ];

  const panels = [
    {
      title: 'Panel 1',
      content: <div>Content for Panel 1</div>,
    },
    {
      title: 'Panel 2',
      content: <div>Content for Panel 2</div>,
    },
    {
      title: 'Panel 3',
      content: <div>Content for Panel 3</div>,
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>Custom Select Example</h1>
      <Select options={options} onChange={handleChange} defaultValue={selectedValue} />
      <p>Selected value: {selectedValue}</p>
      <h1>Accordion Example</h1>
      <Accordion panels={panels} />
    </div>
  )
}

export default Test