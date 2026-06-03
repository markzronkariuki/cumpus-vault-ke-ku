import React, { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 Welcome to Campus Vault KE. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");

  // BOT RESPONSES
  const botReplies = {
    hi: "Hello 👋 Welcome to Campus Vault KE.",
    
    hello: "Hi 😊 Need help with storage booking or pricing?",

    pricing:
      "Our storage starts from Ksh 300 depending on the package size 🎒",

    storage:
      "We offer Small, Medium, Large, and Full Room storage options 📦",

    payment:
      "Payments are made securely through M-Pesa 💳",

    mpesa:
      "You can pay instantly using M-Pesa STK Push 📱",

    booking:
      "You can reserve your storage slot in less than 2 minutes 🚀",

    pickup:
      "Yes 🚚 We offer pickup assistance around KU hostels at an extra fee.",

    location:
      "We are located near Kenyatta University hostels 📍",

    security:
      "All items are tagged, recorded, and stored securely under CCTV monitoring 🔐",

    tracking:
      "You can track your stored items using your Booking ID or phone number 📦",

    whatsapp:
      "You can contact us directly through WhatsApp anytime 💬",

    rent:
      "Why pay rent for an empty room? Store smart and save money 💸",

    default:
      "I’m here to help 😊 Ask about pricing, booking, storage, payment, or pickup services."
  };

  // SEND MESSAGE
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      from: "user",
      text: input
    };

    setMessages((prev) => [...prev, userMessage]);

    const key = input.toLowerCase().trim();

    const reply = botReplies[key] || botReplies.default;

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: reply
        }
      ]);
    }, 500);

    setInput("");
  };

  // ENTER KEY SEND
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* FLOATING CHAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "65px",
          height: "65px",
          background: "#25D366",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
        }}
      >
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "95px",
            right: "20px",
            width: "340px",
            height: "500px",
            background: "white",
            borderRadius: "20px",
            overflow: "hidden",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 10px 35px rgba(0,0,0,0.2)"
          }}
        >
          {/* HEADER */}
          <div
            style={{
              background: "#002366",
              color: "white",
              padding: "18px",
              fontWeight: "bold",
              fontSize: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            Campus Vault KE

            <span
              onClick={() => setOpen(false)}
              style={{
                cursor: "pointer",
                fontSize: "22px"
              }}
            >
              ✖
            </span>
          </div>

          {/* CHAT MESSAGES */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              background: "#f5f7fb"
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign:
                    msg.from === "user" ? "right" : "left",
                  marginBottom: "12px"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "12px 15px",
                    borderRadius: "15px",
                    maxWidth: "80%",
                    background:
                      msg.from === "user"
                        ? "#25D366"
                        : "white",
                    color:
                      msg.from === "user"
                        ? "white"
                        : "#222",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    boxShadow:
                      "0 2px 8px rgba(0,0,0,0.08)"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #ddd",
              background: "white"
            }}
          >
            <input
              type="text"
              placeholder="Ask about storage..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{
                flex: 1,
                padding: "15px",
                border: "none",
                outline: "none",
                fontSize: "14px"
              }}
            />

            <button
              onClick={handleSend}
              style={{
                background: "#002366",
                color: "white",
                border: "none",
                padding: "0 20px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;