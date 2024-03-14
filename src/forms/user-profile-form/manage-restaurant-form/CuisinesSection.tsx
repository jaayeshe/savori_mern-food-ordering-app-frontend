import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisinesList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckbox";

const CuisinesSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Choose the types of cuisines offered by your restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-1">
              {cuisinesList.map((cuisineItem) => (
                <CuisineCheckBox cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CuisinesSection;

//const { control } = useFormContext();: all we are doing
//here is getting the control function which helps us
//link our form fields to the form.

//field={field}: sp that we can register the inputs
//& such inside our cuisine check box component to the rest of the formItem.
