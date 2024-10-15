export default function InputWithLabel ({label = 'label',id='id',name='name',type='text',required='false', autocomplete='off'}){
    return(
        <div>
        <label className="block text-sm font-mdeium leading-6 text-gray-800">
          {label}
        </label>
        <div className="mt-2">
          <input 
          id={id}
          name={name}
          type={type}
          required={required}
          autocomplete={autocomplete}
          className="block w-full rounded-md borde-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
           placeholder:text-gray-400 
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></input>
        </div>
      </div>
    )
}