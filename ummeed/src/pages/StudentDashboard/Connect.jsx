import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

const Connect = () => {

  //Get User Email ID and Room ID

  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room }); //join room
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`); // if join redirect to room page
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="ConnectContainer">
      <div className="HeadingLobby">
        <h1>Lobby</h1>

        <div className="LobbyConnectPage">
          <form onSubmit={handleSubmitForm}>
            <div className="LobbyEmail">
              <label htmlFor="email">Email ID</label>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div className="LobbyRoom">
              <label htmlFor="room">Room Number</label>
            </div>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <br />
            <div className="LobbyJoin">
              <button className="BtnConnect">Join</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
