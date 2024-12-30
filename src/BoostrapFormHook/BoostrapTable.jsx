import PropTypes from "prop-types";
import "./table.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function BoostrapTable({ newData, setData }) {
  const handledelete = async (id) => {
    try {
      // Make DELETE request
      const response = await axios.delete(`http://localhost:5002/api/data/${id}`);
      if (response.status === 200) {
        // Remove the deleted item from the state
        setData((prevData) => prevData.filter((item) => item._id !== id));
        alert("Item deleted successfully");
      } else {
        alert("Failed to delete the item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    }
  };

  return (
    <>
      <div className="container d-flex">
        <table className="table">
          <thead className="table fw-700">
            <tr>
              <th className="textsizetable">Name</th>
              <th className="textsizetable">Email</th>
              <th className="textsizetable">Gender</th>
              <th className="textsizetable">Phone</th>
              <th className="textsizetable">Action</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((item) => (
              <tr key={item._id}>
                <td className="textsizetable1">{item.name}</td>
                <td className="textsizetable1">{item.email}</td>
                <td className="textsizetable1">{item.Gender}</td>
                <td className="textsizetable1">{item.phone}</td>
                <td>
                  <div className="d-flex">
                    <span className="button-style">
                      <FontAwesomeIcon icon={faPen} />
                    </span>

                    <span
                      onClick={() => handledelete(item._id)}
                      className="ms-3 cursor-pointer text-danger"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

BoostrapTable.propTypes = {
  newData: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired, // Required for updating the data
};

export default BoostrapTable
