export const AddtoCart = async (User_id, pizza_id, navigate) => {
  const response = await fetch(
    `http://localhost:5000/cart/addcart?user=${User_id}&pizza=${pizza_id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: User_id, pizza: pizza_id }),
    }
  );

  const data = await response.json();
  if (response.status === 201) {
    alert("item added succesfully");
    console.log(data);
  } else if (response.status === 500) {
    alert("You need to login first");
    navigate("/login");
  } else if (response.status === 409) {
    alert("Item already present in cart");
    navigate("/cart");
  }
};

export const delete_cart = async (User_id, pizza_id) => {
  const response = await fetch(
    `http://localhost:5000/cart/deleteitem?user=${User_id}&pizza=${pizza_id}`,
    { method: "DELETE" }
  );
  const data = response.json();
  if (response.ok) {
    alert("item deleted successfully");
    console.log(data);
  } else {
    alert("error occurred");
  }
};
