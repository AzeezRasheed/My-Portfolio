function Input({label,value,onChange,errorMessage,require,...input }){

    return(

       <div>
            <>
        <label>{label}</label>
        <input  value={value}  {...input}  onChange={onChange} errorMessage={errorMessage} require={require}  />
        </>

        <span>{errorMessage}</span>
       </div>
    )
}

export default Input;