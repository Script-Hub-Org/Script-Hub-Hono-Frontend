import {
  NativeSelect,
  // NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function ActionPicker({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <NativeSelect value={value} onChange={(e) => onChange(e.target.value)}>
      <NativeSelectOption value="rewrite">Rewrite</NativeSelectOption>
      <NativeSelectOption value="ruleset">Ruleset</NativeSelectOption>
    </NativeSelect>
  )
}
