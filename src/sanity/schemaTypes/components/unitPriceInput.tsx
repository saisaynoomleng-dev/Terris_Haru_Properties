import { NumberInputProps, useFormValue } from 'sanity';

export function UnitPriceInput(props: NumberInputProps) {
  const price = (useFormValue(['price']) as number) || undefined;

  return (
    <p>
      {typeof props.value === 'number' && price ? (
        <span>This unit is {price.toLocaleString()} per month.</span>
      ) : null}
    </p>
  );
}
