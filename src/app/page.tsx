'use client'
import FormInput from "@/app/common/organisms/form/FormInput";

export default function Home() {
  const labelFooter = '© 2023 by Ilman Teguh.'
  return (
    <div className="flex flex-col justify-between">
    <div className="flex justify-center items-center py-10 lg:px-[35%] lg:py-[5%]">
        <FormInput/>
    </div>
        <div className="flex align-middle justify-center">
            {labelFooter}
        </div>
    </div>
   
  )
}
