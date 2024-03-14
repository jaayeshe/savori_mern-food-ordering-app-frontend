import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

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
            <div className="grid md:grid-cols-5 gap-1"></div>
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
