const CustomInput = ({type, name, placeholder='', value, onChange=()=>{}}) => {
    return (
<div className="custom_input">
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}></input>
</div>
    )
}

export default CustomInput;
