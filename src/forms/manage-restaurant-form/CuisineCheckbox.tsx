import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
  //field.value=["pasta","pizza"]
  //cuisine='pizza
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
              //all we are doing is updating the [] of cuisines based onit it's checked/not
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine}</FormLabel>
    </FormItem>
  );
};

export default CuisineCheckbox;

//CuisineCheckBox is a component that takes two things:
// cuisine: This tells the component which type of food this checkbox represents, like "Pizza" or "Sushi".
// field: This is a set of tools provided by react-hook-form to manage the checkbox's state.
//It keeps track of whether the checkbox is checked or not and updates the list of selected cuisines accordingly.
