import { useState } from "react";
import { toast, Bounce } from "react-toastify";

const InputEmail = () => {
  const [email, setEmail] = useState("");

  function handleSubscribe() {
    if (email === "") {
      toast.error(
        "Whoops! It seems like you’re trying to subscribe without an email. That’s like ordering pizza without a delivery address!👀",
        {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      toast.error("Oops! That doesn't look like a real email 👀", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    localStorage.setItem("email", email);
    setEmail("");
    toast.success("🎉 Boom! You're subscribed. Let’s go!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  return (
    <div className="flex">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-white rounded-l-lg border border-orange-200 px-4"
        type="text"
        placeholder="Enter Your Email"
      />
      <button
        onClick={handleSubscribe}
        className="bg-amber-400 text-black py-2 px-4 rounded-r-lg font-bold cursor-pointer"
      >
        Subscribe
      </button>
    </div>
  );
};

export default InputEmail;
