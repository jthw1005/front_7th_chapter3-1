import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const nativeSelectVariants = cva(
  "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: "h-8 py-1 text-xs",
        md: "h-9 py-2 text-sm",
        lg: "h-10 py-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface NativeSelectProps
  extends Omit<React.ComponentProps<"select">, "size">,
    VariantProps<typeof nativeSelectVariants> {}

function NativeSelect({ className, size, ...props }: NativeSelectProps) {
  return (
    <div
      className="group/native-select relative w-full has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        className={cn(nativeSelectVariants({ size }), className)}
        {...props}
      />
      <ChevronDownIcon
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      />
    </div>
  )
}

function NativeSelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  )
}

// FormSelect wrapper - Compatible with FormInput API
interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends VariantProps<typeof nativeSelectVariants> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  className?: string;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      name,
      value,
      onChange,
      options,
      label,
      placeholder = "Select an option...",
      required = false,
      disabled = false,
      error,
      helpText,
      size = "md",
      className,
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={name}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        <NativeSelect
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : helpText ? `${name}-description` : undefined}
          size={size}
          className={className}
        >
          <NativeSelectOption value="" disabled>
            {placeholder}
          </NativeSelectOption>
          {options.map((option) => (
            <NativeSelectOption key={option.value} value={option.value}>
              {option.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>

        {error && (
          <p id={`${name}-error`} className="text-sm text-destructive">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={`${name}-description`} className="text-sm text-muted-foreground">
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

FormSelect.displayName = "FormSelect"

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption, FormSelect, nativeSelectVariants }
export type { NativeSelectProps, FormSelectProps, Option }
