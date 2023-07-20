import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css files/Add-data.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Loader from "../basic-components/Loader";

const URL = "http://localhost:8085";
// BASIC DATA

const Add_data = () => {
  var navigate = useNavigate();

  const [data, setData] = useState({
    recipe: {
      name: "",
      category: {
        breakfast: "breakfast",
        lunch: "lunch",
        snakes: "snakes",
        dinner: "dinner",
        desert: "desert",
        drinks: "drinks",
        baking: "baking",
      },
      cookingTime: 0,
      preparationTime: 0,
      imageUrl: "",
      ingredientsList: [],
      instructions: [],
      nutrition: {
        calories: "",
        fat: "",
        protein: "",
        carbohydrates: "",
      },
      // image: "",
    },
  });

  //FOR FORM ROUTE
  const [form1, Setform1] = useState(true);
  const [form2, Setform2] = useState(false);
  const [form3, Setform3] = useState(false);
  const [form4, Setform4] = useState(false);

  // CATEGORY SELECTION
  const [selectedValue, setSelectedValue] = useState("");

  // INGRIDIENTS LIST
  const [items, setItems] = useState([]);

  // RECIPE INSTRUCTION/STEP
  const [instructions, setinstructions] = useState([]);

  //IMAGE
  const [Image, setImage] = useState(null);

  // IMAGE LOADER
  const[loader,setLoader]=useState(false)

  const get_data_teaxtbox = (e, field) => {
    var value = e.target.value;
    // dropdown memu seleted value stored
    setSelectedValue(value);
    setData((prevState) => ({
      ...prevState,
      recipe: {
        ...prevState.recipe,
        [field]: value,
      },
    }));
  };
  const form1_handler = (e) => {
    e.preventDefault();
    if (data.recipe.name === "") {
      toast.error("please enter recipe name", {
        position: toast.POSITION.RIGHT,
      });
    }
    if (data.recipe.preparationTime === 0) {
      toast.error("please enter preparation time", {
        position: toast.POSITION.RIGHT,
      });
    }
    if (data.recipe.cookingTime === 0) {
      toast.error("please enter cooking time", {
        position: toast.POSITION.RIGHT,
      });
    }
    if (
      data.recipe.category !== "breakfast" &&
      data.recipe.category !== "baking" &&
      data.recipe.category !== "dinner" &&
      data.recipe.category !== "lunch" &&
      data.recipe.category !== "desert" &&
      data.recipe.category !== "drinks" &&
      data.recipe.category !== "snakes"
    ) {
      toast.error("please choose category", {
        position: toast.POSITION.RIGHT,
      });
    }
    if (
      data.recipe.name !== "" &&
      (data.recipe.category === "breakfast" ||
        data.recipe.category === "baking" ||
        data.recipe.category === "dinner" ||
        data.recipe.category === "lunch" ||
        data.recipe.category === "desert" ||
        data.recipe.category === "drinks" ||
        data.recipe.category === "snakes") &&
      data.recipe.preparationTime !== 0 &&
      data.recipe.cookingTime !== 0
    ) {
      Setform1(false);
      Setform2(true);
    }
  };
  const form2_handler = (e) => {
    e.preventDefault();
    if (
      items.length === 0 ||
      items.some((item) => item.ingredient === "" || item.measurement === "")
    ) {
      toast.error("please ADD ingredients", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (items.name !== "" && items.Measurement !== "") {
      Setform2(false);
      Setform3(true);
    }
  };
  const form3_handler = (e) => {
    e.preventDefault();
    if (data.recipe.nutrition.calories === "") {
      toast.error("please enter calories", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.recipe.nutrition.protein === "") {
      toast.error("please enter protein", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.recipe.nutrition.fat === "") {
      toast.error("please enter fat", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.recipe.nutrition.carbohydrates === "") {
      toast.error("please enter carbohydrates", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (
      data.recipe.nutrition.calories !== "" &&
      data.recipe.nutrition.fat !== "" &&
      data.recipe.nutrition.protein !== "" &&
      data.recipe.nutrition.carbohydrates !== ""
    ) {
      Setform3(false);
      Setform4(true);
    }
  };

  // FOR INGRIDIENTS
  const handleAddItem = (e, field) => {
    e.preventDefault();
    const newItem = {
      ingredient: "",
      measurement: "",
    };
    setItems([...items, newItem]);
    setData((prevState) => ({
      ...prevState,
      recipe: {
        ...prevState.recipe,
        ingredientsList: [...prevState.recipe.ingredientsList, newItem],
      },
    }));
  };
  const handleItemChange = (index, event) => {
    event.preventDefault();
    const updatedItems = [...items];
    updatedItems[index][event.target.name] = event.target.value;
    setItems(updatedItems);
    setData((prevState) => ({
      ...prevState,
      recipe: {
        ...prevState.recipe,
        ingredientsList: updatedItems,
      },
    }));
  };

  // FOR NUTRITION DATA STORES IN MAIN STATE
  const nutrition_handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // var value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      recipe: {
        ...prevData.recipe,
        nutrition: {
          ...prevData.recipe.nutrition,
          [name]: value,
        },
      },
    }));
  };

  // FOR RECIPE instructions
  const handleAddStep = (e) => {
    e.preventDefault();
    const newStep = {
      step: "",
      instruction: "",
    };
    setinstructions([...instructions, newStep]);
    setData((prevState) => ({
      ...prevState,
      recipe: {
        ...prevState.recipe,
        instructions: [...prevState.recipe.instructions, newStep],
      },
    }));
  };
  const handleStepChange = (index, event) => {
    event.preventDefault();

    const updatedinstructions = [...instructions];
    updatedinstructions[index][event.target.name] = event.target.value;
    setinstructions(updatedinstructions);
    setData((prevState) => ({
      ...prevState,
      recipe: {
        ...prevState.recipe,
        instructions: updatedinstructions,
      },
    }));
  };

  // IMAGE HANDLER FUNCTION
  const Image_handler = (e, field) => {
    e.preventDefault();
    const image_url = new FormData();
    image_url.append("file", Image);
    image_url.append("upload_preset", "images_preset");
    image_url.append("cloud_name", "dmd7zzmbv");
    setLoader(true)
    axios
      .post("https://api.cloudinary.com/v1_1/dmd7zzmbv/upload", image_url)
      .then((res) => {
        setLoader(false)
        const secureUrl = res.data.secure_url;
        toast.success("Picture Uploaded", {
          position: toast.POSITION.BOTTOM_CENTER
        });
        console.log(secureUrl);
        setData((prevState) => ({
          ...prevState,
          recipe: {
            ...prevState.recipe,
            [field]: secureUrl,
          },
        }));
      })
      .catch((err) => {
        setLoader(false)
        toast.error("Please select an Picture !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
  };

  //Function for all data sent to the backend(server)
  const send_data_server = (e) => {
    e.preventDefault();
    if (
      instructions.length === 0 ||
      instructions.some((instructions1) => instructions1.length === 0)
    ) {
      toast.error("please ADD recipe steps", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      data.recipe.instructions.forEach((ins, index) => {
        ins.step = index + 1;
      });

      // API axios/simple fetch method
        axios
        .post(URL + "/recipe/AddRecipe", data)
        .then((response) => {
          toast.success("Recipe added", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
          });
        })
        .catch((error) => {
          toast.error("Failed to add data", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.error(error);
        });

      //  for navigate main page
      setTimeout(() => {
        navigate("/");
      }, 4000);
      console.log("recipe basic data :", data);
    }
  };

  return (
    <>
      <Navbar />
      <form>
        <div className="form-container">
          <form>
            {/* form-1 */}
            {form1 && (
              <div>
                <div className="form_header">
                  <center>
                    <h3>RECIPE BASIC INFORMATION</h3>
                  </center>
                </div>
                <label htmlFor="recipe-name">Recipe Name:</label>
                <input
                  type="text"
                  id="recipe-name"
                  value={data.recipe.name}
                  onChange={(e) => get_data_teaxtbox(e, "name")}
                  required
                />

                <label htmlFor="preparation-time">Cooking Time:</label>
                <input
                  type="text"
                  id="cooking-time"
                  name="cookingTime"
                  value={data.recipe.cookingTime}
                  onChange={(e) => get_data_teaxtbox(e, "cookingTime")}
                />

                <label htmlFor="preparation-time">Preparation Time:</label>
                <input
                  type="text"
                  id="preparation-time"
                  name="preparationTime"
                  value={data.recipe.preparationTime}
                  onChange={(e) => get_data_teaxtbox(e, "preparationTime")}
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
                  <option value="breakfast">breakfast</option>
                  <option value="lunch">lunch</option>
                  <option value="snakes">snakes</option>
                  <option value="dinner">dinner</option>
                  <option value="desert">desert</option>
                  <option value="drinks">drinks</option>
                  <option value="baking">baking</option>
                </select>


                <div>
                  <label type="text">Upload Image : </label>
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <button
                  className="btn btn-primary"
                  onClick={(e) => Image_handler(e, "imageUrl")}>
                    UPLOAD
                  </button>
                </div>
                {loader &&
                <div style={{marginTop:"10px"}}>
                   <Loader/>
                </div>
                }
                <button
                  className="btn "
                  onClick={form1_handler}
                  style={{
                    width: "90px",
                    marginLeft: "590px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    size="2xl"
                    style={{ color: "#ea168a" }}
                  />
                </button>
              </div>
            )}

            {/* form-2 */}
            {form2 && (
              <div>
                <center>
                  <div className="form_header">
                    <h3>ADD INGRIDIENTS</h3>
                  </div>
                </center>
                {items.map((item, index) => (
                  <div key={index}>
                    <div className="ingidients">
                      <p style={{ color: "white" }}>Ingridient : {index + 1}</p>
                      <input
                        type="text"
                        name="ingredient"
                        value={item.ingredient}
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
                        icon={faCirclePlus}
                        size="2xl"
                        style={{ color: "#ea168a" }}
                      />
                    </button>
                  </div>
                </center>
                <div className="twoarrows">
                  <button
                    className="privious_btn btn "
                    onClick={(e) => {
                      e.preventDefault();
                      Setform1(true);
                      Setform2(false);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCircleArrowLeft}
                      size="2xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                  <button className="next_btn btn " onClick={form2_handler}>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
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
                <center>
                  <div className="form_header">
                    <h3>NUTRITIONAL INFORMATION</h3>
                  </div>
                </center>
                <div>
                  <label htmlFor="calories" name="calories">
                    calories:
                  </label>
                  <input
                    type="text"
                    id="calories"
                    name="calories"
                    value={data.recipe.nutrition.calories}
                    onChange={nutrition_handler}
                  />

                  <label htmlFor="fat" name="fat">
                    fat:
                  </label>
                  <input
                    type="text"
                    id="fat"
                    name="fat"
                    value={data.recipe.nutrition.fat}
                    onChange={nutrition_handler}
                  />

                  <label htmlFor="protein" name="protein">
                    protein:
                  </label>
                  <input
                    type="text"
                    id="protein"
                    name="protein"
                    value={data.recipe.nutrition.protein}
                    onChange={nutrition_handler}
                  />

                  <label htmlFor="carbohydrates" name="carbohydrates">
                    carbohydrates:
                  </label>
                  <input
                    type="text"
                    id="carbohydrates"
                    name="carbohydrates"
                    value={data.recipe.nutrition.carbohydrates}
                    onChange={nutrition_handler}
                  />

                  <button
                    className="privious_btn btn "
                    onClick={(e) => {
                      e.preventDefault();
                      Setform2(true);
                      Setform3(false);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCircleArrowLeft}
                      size="2xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                  <button className="next_btn btn " onClick={form3_handler}>
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      size="2xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                </div>
              </>
            )}

            {form4 && (
              <>
           
                <center>
                  <div className="form_header">
                    <h3>ADD STEPS</h3>
                  </div>
                </center>
                {instructions.map((instructions, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      name="instruction"
                      // value={step.description}
                      onChange={(event) => handleStepChange(index, event)}
                      placeholder={"Step : " + (index + 1)}
                    />
                  </div>
                ))}
                <center>
                  <div className="addbtn">
                    <button className="btn" onClick={handleAddStep}>
                      <FontAwesomeIcon
                        icon={faCirclePlus}
                        size="2xl"
                        style={{ color: "#ea168a" }}
                      />
                    </button>
                  </div>
                </center>
                
                <button
                  onClick={send_data_server}
                  className="btn btn-success"
                  style={{ width: "660px", marginTop: "20px" }}
                  type="submit"
                  name="submit"
                >
                  ADD
                </button>
          
              </>
            )}
            <ToastContainer />
          </form>
        </div>
      </form>
    </>
  );
};

export default Add_data;
