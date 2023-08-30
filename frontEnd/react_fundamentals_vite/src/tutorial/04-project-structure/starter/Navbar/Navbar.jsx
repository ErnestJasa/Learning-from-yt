// Idea is to make a separate folder for each component
// and keep all file associated with that component in it's folder

// we can have the login here, then export it from the index file
// this way when importing the component dont need to specify the path as /Navbar/Navbar
function Navbar() {
  return <div>Navbar</div>;
}
export default Navbar;
