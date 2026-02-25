import avtAssets from "../../assets/img/avatar.jpg";
import avtPublic from "/img/avatar.jpg";
import "./MyAvatar.css";
import styles from "./MyAvatar.module.css";

const MyAvatar = () => {
  return (
    <div>
      <figure>
        <img
          className={styles.myAvatar}
          src={avtPublic}
          alt="My cat avatar from /public"
        />
        <figcaption>My cat avatar from /public</figcaption>
      </figure>
      <figure>
        <img
          className="myAvatar"
          src={avtAssets}
          alt="My cat avatar from /assets"
        />
        <figcaption>My cat avatar from /assets</figcaption>
      </figure>
      <figure>
        <img
          style={{
            width: "200px",
            height: "100px",
            borderRadius: "100px",
            objectFit: "cover",
          }}
          src={avtAssets}
          alt="My cat avatar from /assets & inline style css"
        />
        <figcaption>My cat avatar from /assets & inline style css</figcaption>
      </figure>
    </div>
  );
};

export default MyAvatar;
