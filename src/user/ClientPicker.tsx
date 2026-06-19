import {
  NativeSelect,
  // NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function ClientPicker({
  disabled,
  value,
  onChange,
}: {
  disabled?: boolean
  value: string
  onChange: (v: string) => void
}) {
  return (
    <NativeSelect
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      <NativeSelectOption value="egern">Egern</NativeSelectOption>
      <NativeSelectOption value="loon">Loon</NativeSelectOption>
      <NativeSelectOption value="qx">Quantumult X</NativeSelectOption>
      <NativeSelectOption value="shadowrocket">Shadowrocket</NativeSelectOption>
      <NativeSelectOption value="stash">Stash</NativeSelectOption>
      <NativeSelectOption value="surge">Surge</NativeSelectOption>
    </NativeSelect>
  )
}
