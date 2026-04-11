import {
  useForm,
  type SubmitHandler,
  type UseFormRegister,
  type FieldErrors,
} from 'react-hook-form';
import { useTasks } from '../../hooks/index';
import type { NewTaskData, Priority } from '../../types';
import { PRIORITY } from '../../config';

import { displayFlex, displayFlexSmallGap } from '../../tailwindStyles';

type Inputs = {
  id: keyof FormFields;
  placeholder?: string;
  value?: string;
}
type FormFields = {
  description: string;
  priority: string;
}
const FORM_INPUTS: Record<keyof FormFields, Inputs> = {
  description: {
    id: 'description',
    placeholder: 'Add description...',
  },
  priority: {
    id: 'priority',
    value: PRIORITY.default,
  },
};

type FormComponentProps = {
  formInput: Inputs,
  register: UseFormRegister<FormFields>,
  errors: FieldErrors<FormFields>,
}

const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const FormComponent: React.FC<FormComponentProps> = ({ formInput, register, errors }: FormComponentProps) => {
  const { id, value, placeholder } = formInput;
  const capitalizedId = capitalize(id);
  return (
    <div className={displayFlexSmallGap}>
      <label htmlFor={id}>{capitalizedId}</label>
      {
        id === 'priority' ? (
          <select
            {...register(id, { required: true })}
            className={`cursor-pointer`}
          >
            {Object.entries(PRIORITY).map(([priority, display]) => (
              <option
                defaultValue={priority === PRIORITY.default ? priority : undefined}
                value={priority}
                key={priority}>
                {display}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...register(id, { required: true })}
            type="text" id={id}
            defaultValue={value}
            placeholder={placeholder}
          />
        )
      }
      {errors[id as keyof FormFields] && <span>{capitalizedId} is required</span>}
    </div>
  );
};

export const TaskForm = () => {
  const { dispatch } = useTasks();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const newTask: NewTaskData = {
      description: data.description,
      priority: data.priority as Priority,
    };
    try {
      dispatch({ type: 'add', payload: newTask });
      reset();
    } catch (e) {
      console.error(e);
    }
  };
  const displayFormComponents = () => Object.values(FORM_INPUTS).map(formInput => <FormComponent key={formInput.id} formInput={formInput} register={register} errors={errors} />);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={displayFlex}>
      {displayFormComponents()}
      <button type="submit">Add</button>
    </form>
  );
};
