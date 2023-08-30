// we can export from the component inside an index file
// so that when importing we wouldn't need to specify the path as /Navbar/Navbar
// and we wont have a ton of index files open this way, and wont get lost within them
export { default } from "./Navbar";
