export const customStyles = {
    //main background color
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#fff",
      padding: "2px",
      outline: "none",
      border: state.isFocused ? "solid 1px #D32F2F" : "solid 1px grey ",
      boxShadow: state.isFocused ? "solid 1px #D32F2F" : "solid 1px red",
      "&:hover": {
        border: state.isFocused ? "solid 1px #D32F2F" : "solid 1px red",
      },
    }),
  
    //selected value
    multiValueLabel: (provided, state) => ({
      ...provided,
  
      backgroundColor: "#D32F2F",
      borderTopLeftRadius: "2px",
      borderBottomLeftRadius: "2px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      color: "black",
    }),
  
    //cross symbolin selected value
    multiValueRemove: (provided, state) => ({
      ...provided,
  
      backgroundColor: "#D32F2F",
      color: "black",
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      borderTopRightRadius: "2px",
      borderBottomRightRadius: "2px",
    }),
  
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  
    //all the possible value vala manu
    menuList: (provided) => ({
      ...provided,
      height: "table",
      backgroundColor: "#fff",
      color: "black",
    }),
  
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#fff",
      color: state.isSelected ? "#D32F2F" : "black",
      ":active": {
        backgroundColor: "#D32F2F",
      },
    }),
  };
  