import { create } from "twrnc";

// Create custom tw instance
const tw = create(require(`./tailwind.config.js`));

// We must use this tw version everywhere in the app
export default tw;
