import avatar from "../../../assets/default-avatar.svg";
export function Person({ name, nickName = "default value", images }) {
  //   const img = images[0].small.url;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <li>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <h5>{nickName}</h5>
      {/* <img src={person.images[0]?.small.url} alt="" /> */}
    </li>
  );
}
