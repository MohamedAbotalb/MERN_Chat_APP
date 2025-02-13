/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "./index";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });

    return () => {
      socket.off("message");
    };
  });

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/message", {
      message,
    });

    setMessage("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 vh-100">
            <div class="list-group list-group-flush border-bottom scrollarea">
              <a
                href="#"
                class="list-group-item list-group-item-action py-3 lh-sm"
              >
                <div class="d-flex w-100 align-items-center justify-content-between">
                  <strong class="mb-1">Mohamed Abotalb</strong>
                  <small class="text-body-secondary">Mon</small>
                </div>
                <div class="col-10 mb-1 small">Last message</div>
              </a>
            </div>
          </div>

          <div className="col-9 border">
            <div id="head" className="py-3 lh-sm border-bottom">
              <strong className="mb-1">
                Members: Mohamed Abotalb, Ahmed Ali
              </strong>
            </div>

            <div id="conversation" className="py-3 lh-sm border-bottom">
              {messages.map((m) => {
                return (
                  <div className="row p-2" key={m}>
                    <div className="col-6">
                      <div
                        className="d-inline-block alert alert-primary"
                        role="alert"
                      >
                        {m}
                      </div>
                    </div>
                    <div className="col-6"></div>
                  </div>
                );
              })}

              {/* <div className="row p-2">
                <div className="col-6">
                  <div
                    className="d-inline-block alert alert-primary"
                    role="alert"
                  >
                    Hi
                  </div>
                </div>
                <div className="col-6"></div>
              </div> */}
            </div>

            <form id="reply" className="p-3 w-100" onSubmit={submit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="write a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
