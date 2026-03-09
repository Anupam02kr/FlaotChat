export const signupUser = async (userData) => {
try {


const response = await fetch("http://localhost:5000/api/auth/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(userData)
});

const data = await response.json();

if (!response.ok) {
  return { message: data.message || "Signup failed" };
}

return data;


} catch (error) {
console.error("Signup API error:", error);
return { message: "Unable to connect to server" };
}
};



export const loginUser = async (formData) => {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const data = await response.json();

  // store login token
  if (data.message === "Login successful") {
    localStorage.setItem("token", "loggedin");
  }

  return data;
};


export const generateRAG = async (query) => {

  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/rag/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`   // send login token
    },
    body: JSON.stringify({ query })
  });

  return response.json();
};