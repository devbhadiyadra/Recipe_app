import { useState } from "react";
import "../css files/Add-data.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { Alert } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Add_data = ({ isEnabled }) => {
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
    ingredients: "",
    cookingtime: "",
    Measurement: "",
    recipetags: "",
    Nutritionalingridients: "",
    description: "",
    image: "",
  });
  const [selectedValue, setSelectedValue] = useState("");
  const [form1, Setform1] = useState(true);
  const [form2, Setform2] = useState(false);
  const [form3, Setform3] = useState(false);
  // const [mainform, Setmain] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data_added, setdata_added] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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
    if (data.recipetags === "") {
      Setform1(true);
      toast.error("please enter recipe tag name", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (
      data.recipename !== "" &&
      data.category !== "" &&
      data.recipetags !== ""
    ) {
      Setform1(false);
      Setform2(true);
    }
  };

  const form2_handler = (e) => {
    e.preventDefault();
    if (data.ingredients === "") {
      Setform2(true);
      toast.error("please enter ingredients name", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.cookingtime === "") {
      Setform2(true);
      toast.error("please enter cooking time", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.Measurement === "") {
      Setform2(true);
      toast.error("please enter measurement", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (
      data.ingredients !== "" &&
      data.cookingtime !== "" &&
      data.Measurement !== ""
    ) {
      Setform2(false);
      Setform3(true);
    }
  };

  //Function for all data sent to the backend(server)
  const send_data_server = (e) => {
    e.preventDefault();

    // show data in the console just for check
    console.log(data);
    // only ingridient array
    // ingredientsArray = data.ingredients.split("\n");
    // console.log("ingedients array : ", ingredientsArray);

    if (data.Nutritionalingridients === "") {
      Setform3(true);
      toast.error("please enter Nutritionalingridients", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    if (data.description === "") {
      Setform3(true);
      toast.error("please enter recipe steps", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (data.Nutritionalingridients !== "" && data.description !== "") {
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
  const handleImageChange = (event,field) => {
    const file = event.target.files[0];
    const reader = new FileReader()
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
    setData({ ...data, [field]: file.name });
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

                <label htmlFor="recipe-tags">Recipe Tags:</label>
                <input
                  type="text"
                  id="recipe-tags"
                  name="recipetags"
                  value={data.recipetags}
                  onChange={(e) => get_data_teaxtbox(e, "recipetags")}
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
                <div>
                  <form>
                    <input
                      type="file"
                      onChange={(e)=>handleImageChange(e,"image")}
                      accept="image/*"
                    />
                    {selectedImage && (
                      <div>
                        <h3>Preview:</h3>
                        <img src={selectedImage} alt="Selected" style={{width:"660px"}} />
                      </div>
                    )}
                  </form>
                </div>

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
                    style={{ color: "#286827" }}
                  />
                </button>
              </div>
            )}

            {/* form-2 */}
            {form2 && (
              <div>
                <label htmlFor="ingredients">Ingredients:</label>
                {/* {data.ingredients.split("\n").map((ingredient, index) => ( */}
                <textarea
                  // key={index}
                  type="text"
                  // id={`ingredients-${index}`}
                  // name={index}
                  value={data.ingredients}
                  style={{ width: "100%" }}
                  onChange={(e) => get_data_teaxtbox(e, "ingredients")}
                  required
                />
                <label htmlFor="cooking-time">Cooking Time:</label>
                <input
                  type="text"
                  id="cooking-time"
                  name="cookingtime"
                  value={data.cookingtime}
                  onChange={(e) => get_data_teaxtbox(e, "cookingtime")}
                />
                <label htmlFor="Measurement">Measurement:</label>
                <input
                  type="text"
                  id="Measurement"
                  name="Measurement"
                  value={data.Measurement}
                  onChange={(e) => get_data_teaxtbox(e, "Measurement")}
                />
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
                    style={{ color: "#833434" }}
                  />
                </button>
                <button className="next_btn btn " onClick={form2_handler}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="2xl"
                    style={{ color: "#286827" }}
                  />
                </button>
              </div>
            )}

          {/* form-3 */}
            {form3 && (
              <>
                <div>
                  <label
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
                  />

                  <label htmlFor="description" name="description">
                    Recipe Steps/Process:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="10"
                    style={{ width: "100%" }}
                    value={data.description}
                    onChange={(e) => get_data_teaxtbox(e, "description")}
                  />

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
          {isLoading ? (<FadeLoader color="blue" loading={true} size={50} />)
                     : (" ")}
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
