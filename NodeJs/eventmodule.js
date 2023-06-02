/**
 * node js has inbuilt events module "Events"
 */

/**
 *  Example 1 - Registering the event to be fired only one time
 */

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("getName", () => {
  console.log("My name is Shivraj");
});

event.emit("getName");
