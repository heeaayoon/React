import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {
  return (
    <div className="w-9/10 gap-4 grid grid-cols-1 lg:grid-cols-2">
      <MyToggleBox setcolor = "blue" />
      <MyToggleBox setcolor = "orange" />
    </div>
  )
}
