import { useState } from "react";
import "../css files/Add-data.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Alert } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// BASIC DATA
const Add_data = () => {
  const [data, setData] = useState({
    recipename: "",
    category: {
      breakfast: "breakfast",
      lunch: "lunch",
      snakes: "snakes",
      dinner: "dinner",
      desert: "desert",
      drinks: "drinks",
      baking: "baking",
    },
    cookingtime: "",
    // recipetags: "",
    // Nutritionalingridients: "",
    // description: "",
    // image: "",
  });

  // CATEGORY SELECTION
  const [selectedValue, setSelectedValue] = useState("");

  // FORM ROUTE
  const [form1, Setform1] = useState(true);
  const [form2, Setform2] = useState(false);
  const [form3, Setform3] = useState(false);

  // LOADER
  const [isLoading, setIsLoading] = useState(false);

  // SUCCESSFULLY DATA ADDED MESSAGE
  const [data_added, setdata_added] = useState(false);

  // IMAGE 
  // const [selectedImage, setSelectedImage] = useState(null);

  // MY CODE
  //   const[ingridient,setIngridient]=useState([{
  //     name:"",
  //     measurement:""
  // }])
  //   const[items,setItems]=useState([])

  // INGRIDIENTS LIST
  const [items, setItems] = useState([]);

  // RECIPE STEPS
  const [steps, setSteps] = useState([]);

  var navigate = useNavigate();

  //var ingredientsArray;
  const get_data_teaxtbox = (e, field) => {
    var value = e.target.value;

    // dropdown memu seleted value stored
    setSelectedValue(value);
    setData({ ...data, [field]: value });
    // console.log(ingredientsArray)
  };

  const form1_handler = (e) => {
    e.preventDefault();

    if (data.recipename === "") {
      toast.error("please enter recipe name", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.category === "") {
      toast.error("please select category", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    // if (data.recipetags === "") {
    //   Setform1(true);
    //   toast.error("please enter recipe tag name", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    // }
    if (
      data.recipename !== "" &&
      data.category !== ""
      // data.recipetags !== ""
    ) {
      Setform1(false);
      Setform2(true);
    }
  };

  const form2_handler = (e) => {
    e.preventDefault();
    if (items.name === "") {
      Setform2(true);
      toast.error("please enter ingredients name", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    // if (data.cookingtime === "") {
    //   Setform2(true);
    //   toast.error("please enter cooking time", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    // }
    if (items.Measurement === "") {
      Setform2(true);
      toast.error("please enter measurement", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (
      items.name !== "" &&
      // data.cookingtime !== "" &&
      items.Measurement !== ""
    ) {
      Setform2(false);
      Setform3(true);
    }
  };

  //Function for all data sent to the backend(server)
  const send_data_server = (e) => {
    e.preventDefault();
    console.log("items", items);
    // show data in the console just for check
    console.log("recipe basic data :", data);
    console.log("recipe steps : ", steps);
    // only ingridient array
    // ingredientsArray = data.ingredients.split("\n");
    // console.log("ingedients array : ", ingredientsArray);

    // if (data.Nutritionalingridients === "") {
    //   Setform3(true);
    //   setData({ ...data.ingredients, items });
    //   toast.error("please enter Nutritionalingridients", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    // }
    // if (data.description === "") {
    //   Setform3(true);
    //   toast.error("please enter recipe steps", {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //   });
    // }
    if (steps.step !== "") {
      // for loader
      setIsLoading(true);
      setTimeout(() => {
        // for loading disabled
        setIsLoading(false);
        // API axios/simple fetch method

        
        // msg shown on screen when succesfully recipe added
        setdata_added(true);
      }, 3000);

      // for navigate main page
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  };

  // image handler
  // const handleImageChange = (event, field) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setSelectedImage(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  //   // only name weite "file.name"
  //   setData({ ...data, [field]: file });
  // };

  //code for ingridients
  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: "",
      measurement: "",
    };
    setItems([...items, newItem]);
  };

  const handleItemChange = (index, event) => {
    event.preventDefault();
    const updatedItems = [...items];
    updatedItems[index][event.target.name] = event.target.value;
    setItems(updatedItems);
    // console.log(index)
    //  console.log("this is :",items)
  };

  // code for recipe steps/description
  const handleAddStep = (e) => {
    e.preventDefault();
    const newStep = {
      step: "",
    };
    setSteps([...steps, newStep]);
  };

  const handleStepChange = (index, event) => {
    event.preventDefault();
    const updatedSteps = [...steps];
    updatedSteps[index][event.target.name] = event.target.value;
    setSteps(updatedSteps);
  };

  return (
    <>
      <form>
        <div className="header">
          <h1>
            <center>Get recipe information</center>
          </h1>
        </div>
        <div className="form-container">
          <form>
            {/* form-1 */}
            {form1 && (
              <div>
                <label htmlFor="recipe-name">Recipe Name:</label>
                <input
                  type="text"
                  id="recipe-name"
                  value={data.recipename}
                  onChange={(e) => get_data_teaxtbox(e, "recipename")}
                  required
                />
                {/* 
                <label htmlFor="recipe-tags">Recipe Tags:</label>
                <input
                  type="text"
                  id="recipe-tags"
                  name="recipetags"
                  value={data.recipetags}
                  onChange={(e) => get_data_teaxtbox(e, "recipetags")}
                /> */}

                <label htmlFor="cooking-time">Cooking Time:</label>
                <input
                  type="text"
                  id="cooking-time"
                  name="cookingtime"
                  value={data.cookingtime}
                  onChange={(e) => get_data_teaxtbox(e, "cookingtime")}
                />

                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  name="category"
                  value={selectedValue}
                  onChange={(e) => {
                    get_data_teaxtbox(e, "category");
                  }}
                >
                  <option defaultValue="none" selected hidden>
                    choose category
                  </option>
                  <option value={data.category.breakfast}>breakfast</option>
                  <option value={data.category.lunch}>lunch</option>
                  <option value={data.category.snakes}>snakes</option>
                  <option value={data.category.lunch}>dinner</option>
                  <option value={data.category.desert}>desert</option>
                  <option value={data.category.drinks}>drinks</option>
                  <option value={data.category.baking}>baking</option>
                </select>

                {/* image uploader */}
                {/* <div>
                  <form>
                    <input
                      type="file"
                      onChange={(e) => handleImageChange(e, "image")}
                      accept="image/*"
                    />
                    {selectedImage && (
                      <div>
                        <h3>Preview:</h3>
                        <img
                          src={selectedImage}
                          alt="Selected"
                          style={{ width: "660px" }}
                        />
                      </div>
                    )}
                  </form>
                </div> */}

                <button
                  className="btn "
                  onClick={form1_handler}
                  style={{
                    width: "90px",
                    marginLeft: "590px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2xl"
                    style={{ color: "#ea168a" }}
                  />
                </button>
              </div>
            )}

            {/* form-2 */}
            {form2 && (
              <div>
                
                {items.map((item, index) => (
                  
                  <div key={index}>
                    <div className="ingidients">
                      <p style={{ color: "white" }}>Ingridient : {index + 1}</p>
                      <input
                        type="text"
                        name="name"
                        value={item.name}
                        onChange={(event) => handleItemChange(index, event)}
                      />
                    </div>
                    <div className="measurement">
                      <p style={{ color: "white" }}>
                        measurement : {index + 1}
                      </p>
                      <input
                        type="text"
                        name="measurement"
                        value={item.measurement}
                        onChange={(event) => handleItemChange(index, event)}
                      />
                    </div>
                  </div>  
                ))}
                
                <center>
                <div className="addbtn">
                  <button className="btn" onClick={handleAddItem}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                </div>

                </center>
                <div className="twoarrows">
                  <button
                    className="privious_btn btn "
                    onClick={() => {
                      Setform1(true);
                      Setform2(false);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="2xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                  <button className="next_btn btn " onClick={form2_handler}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="2xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* form-3 */}
            {form3 && (
              <>
                <div>
                  {/* <label
                    htmlFor="Nutritional ingridients"
                    name="Nutritionalingridients"
                  >
                    Nutritional ingridients:
                  </label>
                  <input
                    type="text"
                    id="Nutritional ingridients"
                    name="Nutritional ingridients"
                    value={data.Nutritionalingridients}
                    onChange={(e) =>
                      get_data_teaxtbox(e, "Nutritionalingridients")
                    }
                  /> */}

                  {/*CODE DESCRIPION / STEPS*/}
                  <button onClick={handleAddStep}>Add Step</button>

                  {steps.map((step, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        name="step"
                        value={step.description}
                        onChange={(event) => handleStepChange(index, event)}
                        placeholder="Step Description"
                      />
                    </div>
                  ))}
                  {/* <button
                      className="privious_btn btn "
                      onClick={() => {
                        Setform2(true);
                        Setform3(false);
                      }}
                    >
                      previous
                    </button> */}

                  <input
                    onClick={send_data_server}
                    disabled={isLoading}
                    className="btn btn-success"
                    style={{ width: "660px", marginTop: "20px" }}
                    type="submit"
                    name="submit"
                  />
                </div>
              </>
            )}
            <ToastContainer />
          </form>
        </div>
        ,
        <div style={{ marginLeft: "620px", marginTop: "-330PX" }}>
          {isLoading ? (
            <FadeLoader color="blue" loading={true} size={50} />
          ) : (
            " "
          )}
        </div>
        ,
        {data_added && (
          <div className="successmsg">
            <Alert variant="filled" severity="success">
              Recipe added Successfully
            </Alert>
          </div>
        )}
      </form>
    </>
  );
};

export default Add_data;
