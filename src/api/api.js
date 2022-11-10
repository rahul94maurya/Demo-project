export const sendData = async function (data) {
  try {
    fetch(
      "https://react-demo-resimark-default-rtdb.asia-southeast1.firebasedatabase.app/product.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getData = async function () {
  try {
    const response = await fetch(
      "https://react-demo-resimark-default-rtdb.asia-southeast1.firebasedatabase.app/product.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};
