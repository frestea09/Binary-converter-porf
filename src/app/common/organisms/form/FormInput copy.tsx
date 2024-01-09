
import { convert, decToBinary } from "@/app/common/getNumberToBinary"
import { useState } from "react"
import { useForm, SubmitHandler} from "react-hook-form"
import { InputState } from "./FormInput.type"

export const FormInput = () =>{
    const [resultOfConvert, setResultOfConvert] = useState<any>(0)
    const {watch, register, handleSubmit , formState} = useForm<InputState>({
        defaultValues : {
            inputFrom : 0, 
            outputTo : ''
        }
    })
    const onSubmit: SubmitHandler<InputState> = (data) => {
        setResultOfConvert(convert(Number(data.inputFrom), Number(data.typeFrom),  Number(data.typeTo   )))
    }
    const labelButton = 'convert'
    const labelForInputFrom = 'Enter decimal number'
    const labelResult = 'Binary number'
    return <div className="w-[100%] flex flex-col justify-center">
        <form className="w-[500px] px-4 py-8 justify-center gap-7 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center py-4 px-6">
            <label htmlFor="inputFrom">{labelForInputFrom}</label>
            <input id="inputFrom px-6" className="border rounded-md shadow focus:shadow-outline border-gray-100 px-4" type={'number'} {...register('inputFrom')}/>
        </div>
        <div className="flex flex-col  justify-center py-4">
            <label htmlFor="outputTo">{labelResult}</label>
            <input id={'outputTo'} className="border rounded-md shadow focus:shadow-outline border-gray-100 px-4 bg-gray-600" readOnly  value={resultOfConvert}/>
        </div>    
        <button className="bg-green-300 capitalize">{labelButton}</button>
    </form>
    </div>
        
}
