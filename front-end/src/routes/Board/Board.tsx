import { useContext } from "react";
import { getAllScore, getUserInfor, postNewScore } from "../../api/userapi";
import { BtnSuccess } from "../../assets/export_component/resource";
import { AuthContext } from "../../context/auth-context";

const Board = () => {
  const { currentUser, signOut } = useContext(AuthContext);

  currentUser?.getIdToken();

  return (
    <div>
      <h2>Testing </h2>
      {/* <BtnSuccess clickHandler={postNewScore(currentUser?.getIdToken().then((res) => res),)} /> */}
      <button
        onClick={() => {
          if (currentUser) {
            getUserInfor(currentUser);
          }
        }}
      >
        get user infor
      </button>
      <button
        onClick={() => {
          if (currentUser) {
            postNewScore(currentUser, { score: 50 });
          }
        }}
      >
        post new score
      </button>
      <button
        onClick={() => {
          if (currentUser) {
            getAllScore();
          }
        }}
      >
        get all score
      </button>
    </div>
  );
};

export default Board;
