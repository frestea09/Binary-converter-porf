
import { convert, decToBinary } from "@/app/common/getNumberToBinary"
import { useState } from "react"
import { useForm, SubmitHandler} from "react-hook-form"
import { InputState } from "./FormInput.type"
function FormInput(){
    const [resultOfConvert, setResultOfConvert] = useState<any>(0)
    const {watch, register, handleSubmit, getValues} = useForm<InputState>({
        defaultValues : {
            inputFrom : 0, 
            outputTo : ''
        }
    })
    const onSubmit: SubmitHandler<InputState> = (data) => {
        setResultOfConvert(decToBinary(Number(data.inputFrom)))
    }
    const labelButton = 'convert'
    const labelForInputFrom = `Enter decimal number`
    const labelResult = 'Binary number'
    const listOfOption = [
        { 
            type : 'decimal', 
            base : 10
        }, 
        {
            type : 'octal',
            base : 8
        },
        {
            type : 'hexadecimal',
            base : 16
        },
        {
            type : 'text',
            base : 256
        },
    ]
    return <div className="w-[100%] flex flex-col justify-cente align-middler">
        <div className="flex flex-col lg:flex-row px-8 gap-2">
            <div className="flex flex-col gap-2">
                <label>From</label>
                <select disabled className="bg-gray-100 border rounded  px-4 py-3" {...register('typeFrom')}>
                    {listOfOption.map(
                        item => <option className="bg-gray-100 border capitalize" key={item.base} value={item.base}>{item.type}</option>
                    )}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label>To</label>
                <select disabled className="bg-gray-100 border rounded  px-4 py-3"  {...register('typeTo')}>
                    {listOfOption.map(
                        item => <option  className="bg-gray-100 borde capitalize" key={item.base} value={'Binary'}>{'Binary'}</option>
                        )}
                </select>
            </div>
        </div>
        <form className="w-auto lg:w-[500px] px-4 py-8 justify-center gap-7 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3  justify-center py-4 px-6">
                <label htmlFor="inputFrom">{labelForInputFrom}</label>
                <input id="inputFrom px-6" className="border rounded-md shadow focus:shadow-outline border-gray-100 px-4 py-4" type={'text'} {...register('inputFrom')}/>
            </div>
            <div className="flex flex-col gap-3 justify-center py-4 px-6">
                <label htmlFor="outputTo">Enter {labelResult} number</label>
                <input id={'outputTo'} className="border rounded-md shadow focus:shadow-outline border-gray-100 bg-gray-300 px-4 py-4" readOnly  value={resultOfConvert}/>
            </div>  
            <div className="px-6 py-2">
                <button className="bg-green-300 capitalize px-6 py-4 rounded-md shadow">{labelButton}</button>
            </div>  
        </form>
    </div>
}

export default FormInput