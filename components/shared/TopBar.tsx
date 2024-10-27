import Image from "next/image"
import DropDownMenu from "../cards/DropDownMenu"

const TopBar = () => {
  return (
    <header
    className="flex items-center justify-between p-2 shadow-sm"
    >
      <div>
        <Image
        src="/assets/payment-icon.png"
        width={40}
        height={40}
        alt="Logo"
         />
      </div>

      <DropDownMenu />
    </header>
  )
}

export default TopBar
